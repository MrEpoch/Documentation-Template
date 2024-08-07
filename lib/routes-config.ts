// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Začátek",
    href: "getting-started",
    items: [
      { title: "Úvod", href: "/introduction" },
      { title: "Struktura", href: "/project-structure" },
      { title: "Directus Auth", href: "/auth-directus" },
      { title: "Bezpečnostní hlavičky", href: "/security-headers" },
    ],
  },
  {
    title: "Komponenty",
    href: "components",
    items: [
      { title: "Header", href: "/header" },
      { title: "Faq", href: "/faq" },
      { title: "Galerie", href: "/gallery" },
      { title: "Animovaný wrapper", href: "/animated-div" },
      { title: "Auth form", href: "/auth-form" },
      { title: "Web3form kontakt", href: "/web3forms-contact-form" },
      { title: "Obrázkový form", href: "/image-form" },
    ],
  },
  {
    title: "Server Actions",
    href: "server-actions",
    items: [
      { title: "Directus akce", href: "/directus" },
      { title: "Prisma akce", href: "/prisma" },
      { title: "Lucia auth akce", href: "/lucia-auth" },
      { title: "Obrázkový handler", href: "/image-handler" },
    ],
  },
  {
    title: "Užitečné",
    href: "useful",
    items: [
      { title: "Sitemap", href: "/sitemap" },
      { title: "Favicon", href: "/favicon" },
      { title: "Schovaná složka", href: "/hidden-folder" },
      { title: "Nastavení načítání", href: "/loading" },
      { title: "Globals CSS", href: "/globals-css" },
      { title: "Typescript v nextjs", href: "/types" },
    ],
  },
  {
    title: "Knihovny",
    href: "libs",
    items: [
      { title: "Directus", href: "/directus" },
      { title: "Lucia auth", href: "/lucia-auth" },
      { title: "Prisma ORM", href: "/prisma" },
      { title: "Zod validace", href: "/zod" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
