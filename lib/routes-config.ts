// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Začátek",
    href: "getting-started",
    items: [
      { title: "Úvod", href: "/introduction" },
      { title: "Struktura", href: "/project-structure" },
      { title: "Directus Auth", href: "/auth-directus" },
    ],
  },
  {
    title: "Komponenty",
    href: "components",
    items: [
      { title: "Header", href: "/header" },
      { title: "Galerie", href: "/gallery" },
      { title: "Animovaný wrapper", href: "/animated-div" },
      { title: "Form akce", href: "/auth-form" },
      { title: "Web3form kontakt", href: "/web3forms-contact-form" },
    ],
  },
  {
    title: "Server Actions",
    href: "server-actions",
    items: [{ title: "Directus akce", href: "/directus" }],
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
    items: [{ title: "Directus", href: "/directus" }],
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
