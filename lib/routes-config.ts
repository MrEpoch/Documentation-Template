// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Začátek",
    href: "getting-started",
    items: [
      { title: "Úvod", href: "/introduction" },
      { title: "Struktura", href: "/project-structure" },
    ],
  },
  {
    title: "Komponenty",
    href: "components",
    items: [
      { title: "Header", href: "/header" },
      { title: "Galerie", href: "/gallery" },
      { title: "Animovaný wrapper", href: "/animated-div" },
    ],
  },
  {
    title: "Server Actions",
    href: "server-actions",
    items: [
      { title: "getSession", href: "/getSession" },
      { title: "getToken", href: "/getToken" },
      { title: "getRole", href: "/getRole" },
    ],
  },
  {
    title: "React Hooks",
    href: "react-hooks",
    items: [
      { title: "useSession", href: "/use-session" },

      { title: "useFetch", href: "/use-fetch" },
      { title: "useAuth", href: "/use-auth" },
      { title: "useProduct", href: "/use-product" },
      { title: "useOrder", href: "/use-order" },
      { title: "useCart", href: "/use-cart" },
      { title: "usePayment", href: "/use-payment" },
      { title: "useShipping", href: "/use-shipping" },
      { title: "useNotification", href: "/use-notification" },
      { title: "useReview", href: "/use-review" },
      { title: "useInventory", href: "/use-inventory" },
      { title: "useUser", href: "/use-user" },
      { title: "useSettings", href: "/use-settings" },
      { title: "useAnalytics", href: "/use-analytics" },
      { title: "useTheme", href: "/use-theme" },
      { title: "useRouter", href: "/use-router" },
      { title: "useData", href: "/use-data" },
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
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
