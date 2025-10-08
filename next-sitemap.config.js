/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://xaltris.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  sitemapSize: 7000,

  // Exclude internal or non-public routes
  exclude: ['/api/*', '/admin/*', '/drafts/*'],

  // Control how each route is transformed in the sitemap
  transform: async (config, path) => {
    let priority = 0.7

    // Home page → highest priority
    if (path === '/') priority = 1.0

    // Main navigation pages
    if (
      [
        '/about',
        '/portfolio',
        '/solutions',
        '/contact',
        '/products',
        '/blog',
      ].includes(path)
    ) {
      priority = 0.8
    }

    // Blog posts and product details → slightly lower but still important
    if (path.startsWith('/blog/') || path.startsWith('/products/')) {
      priority = 0.64
    }

    return {
      loc: path,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
