export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Redeemers",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Tips",
      href: "/",
      subItems: [
        {
          title: "Quit Smoking",
          href: "/dashboard/quit-smoking",
        },
        {
          title: "Building Reputation",
          href: "/dashboard/power-reputation-strategies",
        },
        {
          title: "Fixing solitude",
          href: "/dashboard/navigating-through-solitude",
        },
        // Add more subitems as needed
      ],
    },
  ],
  links: {
    twitter: "/dashboard1",
    github: "/dashboard2",
    docs: "/dashboard3",
  },
}
