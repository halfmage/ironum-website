#!/usr/bin/env node
/**
 * Manually submit EVERY URL in the live sitemap to IndexNow (Bing, Yandex,
 * Seznam, Naver).
 *
 * Unlike scripts/indexnow.mjs (which runs on deploy and only submits URLs that
 * changed since the last deploy), this script ignores the diff and re-submits
 * the full sitemap. Use it to seed a new property or clear a Bing Webmaster
 * "publish your URLs to IndexNow" warning:
 *
 *   npm run indexnow:full
 *
 * It has no CONTEXT gate, so it works from a local machine.
 */

const KEY = 'b21b3de71708456ce5b6293940ca4505';
const HOST = 'ironum.com';
const SITEMAP_URL = `https://${HOST}/sitemap-0.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const log = (msg) => console.log(`[indexnow:full] ${msg}`);

const res = await fetch(SITEMAP_URL);
if (!res.ok) {
  log(`could not fetch ${SITEMAP_URL} (HTTP ${res.status}) — aborting`);
  process.exit(1);
}

const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  log('no URLs found in sitemap — aborting');
  process.exit(1);
}

log(`submitting all ${urlList.length} URL(s) from ${SITEMAP_URL}`);

try {
  const post = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });
  log(`response: HTTP ${post.status} ${post.statusText}`);
  if (!post.ok) process.exit(1);
} catch (err) {
  log(`POST failed (${err.message})`);
  process.exit(1);
}
