export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Forge | Software Company",
  logo: "Forge",
  description:
    "Forge is a bespoke research and development software company that provides enterprise software solutions, application modernization, cloud migration services, and conducts R&D in leading technologies. Our team of experts is committed to delivering scalable and inventive software products that exceed our partners' and clients' expectations. Contact us today to learn how we can help you succeed in your industry.",
  mainNav: [
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Solutions",
      href: "/solutions",
      // disabled: true,
    },
    {
      title: "Documentation",
      href: "/documentation",
    },
    {
      title: "Pricing",
      href: "/pricing",
      // disabled: true,
    },
  ],
  mainFooter: [
    {
      title: "Research",
      tabs: [
        {
          title: "Overview",
          href: "/research",
        },
        {
          title: "Documentation",
          href: "/documentation",
        },
      ],
    },
    {
      title: "Product",
      tabs: [
        {
          title: "Overview",
          href: "/product",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Customer Stories",
          href: "/customer",
        },
        {
          title: "Safety Standards",
          href: "/safety",
        },
      ],
    },
    {
      title: "Safety",
      tabs: [
        {
          title: "Overview",
          href: "/safety",
        },
      ],
    },
    {
      title: "Partner",
      tabs: [
        {
          title: "Our Partners",
          href: "/partners",
        },
        {
          title: "Join Us",
          href: "/join-Us",
        },
      ],
    },
    {
      title: "Company",
      tabs: [
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Charter",
          href: "/charter",
        },
        {
          title: "Security",
          href: "/Security",
        },
      ],
    },
  ],
  links: {
    twitter: "https://twitter.com/usurpa_africa",
    github: "https://github.com/Forge-Software-Dev",
    docs: "https://www.notion.so/7dd91ce19d644d3c8e9ea56185185cbd?v=b66cee32d295480dbff3cef40517c440",
    youtube: "https://youtube.com",
  },
}
