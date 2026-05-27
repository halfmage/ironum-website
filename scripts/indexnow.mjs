#!/usr/bin/env node
/**
 * Submit new and updated URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Runs after `astro build` on Netlify production deploys only.
 * Diffs the freshly-built `dist/sitemap-0.xml` against the live sitemap on
 * ironum.com to find URLs that are new or whose <lastmod> changed, and POSTs
 * that list to https://api.indexnow.org/indexnow.
 *
 * Non-2xx responses and network errors are logged but do not fail the deploy.
 */

import { readFile } from 'node:fs/promises';

const KEY = 'b21b3de71708456ce5b6293940ca4505';
const HOST = 'ironum.com';
const NEW_SITEMAP_PATH = 'dist/sitemap-0.xml';
const LIVE_SITEMAP_URL = `https://${HOST}/sitemap-0.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const log = (msg) => console.log(`[indexnow] ${msg}`);

if (process.env.CONTEXT !== 'production') {
  log(`skipping non-production deploy (CONTEXT=${process.env.CONTEXT ?? 'unset'})`);
  process.exit(0);
}

function parseSitemap(xml) {
  const map = new Map();
  for (const block of xml.matchAll(/<url>.*?<\/url>/g)) {
    const loc = block[0].match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    const lastmod = block[0].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '';
    map.set(loc, lastmod);
  }
  return map;
}

const newXml = await readFile(NEW_SITEMAP_PATH, 'utf-8');
const newMap = parseSitemap(newXml);
log(`new sitemap has ${newMap.size} URLs`);

let liveMap = new Map();
try {
  const res = await fetch(LIVE_SITEMAP_URL);
  if (!res.ok) {
    log(`live sitemap fetch returned ${res.status} — skipping submission this run`);
    process.exit(0);
  }
  liveMap = parseSitemap(await res.text());
  log(`live sitemap has ${liveMap.size} URLs`);
} catch (err) {
  log(`live sitemap fetch failed (${err.message}) — skipping submission this run`);
  process.exit(0);
}

const changed = [...newMap.entries()]
  .filter(([url, lastmod]) => liveMap.get(url) !== lastmod)
  .map(([url]) => url);

if (changed.length === 0) {
  log('no URL changes since last deploy');
  process.exit(0);
}

log(`submitting ${changed.length} URL(s):`);
for (const url of changed) console.log(`  - ${url}`);

try {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: changed,
    }),
  });
  log(`response: HTTP ${res.status} ${res.statusText}`);
} catch (err) {
  log(`POST failed (${err.message}) — not failing the deploy`);
}
