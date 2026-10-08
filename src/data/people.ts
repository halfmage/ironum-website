// Person nodes for authors other than the founder (#person-gerrit lives in Layout.astro,
// since the Organization references it on every page). Add a person's node only on the
// pages that reference it: their blog posts, guide pages and the About page.
export const PERSON_ALESIA = {
  "@type": "Person",
  "@id": "https://ironum.com/#person-alesia",
  "name": "Alesia Kunz",
  "jobTitle": "Product Manager",
  "worksFor": { "@id": "https://ironum.com/#organization" },
  "image": "https://ironum.com/images/authors/alesia-kunz.jpg",
  "url": "https://ironum.com/about/",
  "description": "Product Manager at Ironum and CEO of LearnSlice, the company behind Ironum. 17+ years in software engineering as a product manager and product owner. Author of Ironum's AI guides for product managers and product owners.",
  "hasOccupation": [
    { "@type": "Occupation", "name": "Product Manager" },
    { "@type": "Occupation", "name": "Chief Executive Officer" }
  ],
  "affiliation": { "@type": "Organization", "name": "LearnSlice", "url": "https://learnslice.com" },
  "sameAs": ["https://www.linkedin.com/in/alesiakunz/"],
  "knowsAbout": [
    "Product management",
    "Scrum and product ownership",
    "Backlog refinement",
    "Generative AI at work"
  ]
};

/** Byline name -> profile page, so author names can link to a bio. */
export const AUTHOR_PAGES: Record<string, string> = {
  'Alesia Kunz': '/about/',
  'Gerrit Halfmann': '/about/',
};
