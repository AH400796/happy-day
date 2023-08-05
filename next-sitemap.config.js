/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    "https://www.your-happy-day.lviv.ua" || process.env.NEXT_PUBLIC_BASE_URL,
  staticRoutes: ["/", "/about", "/collections"],
  dynamicRoutes: async () => {
    return [
      {
        loc: "/collections/tiffany",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        loc: "/collections/wednesday",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        loc: "/collections/ukrainian_style",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        loc: "/collections/barbie_and_friends",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        loc: "/collections/colors_of_nature",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        loc: "/collections/home_style",
        lastmod: "2023-07-24T11:00:26.900Z",
        changefreq: "daily",
        priority: 0.7,
      },
    ];
  },
  generateRobotsTxt: true,
  exclude: ["/secret-page"],
  changefreq: "daily",
  priority: 0.7,
};
