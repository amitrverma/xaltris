/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://xaltris.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*', '/drafts/*'],
  transform: async (_config, path) => {
    let priority = 0.7

    if (path === '/') priority = 1.0

    if (['/about', '/portfolio', '/contact', '/blog'].includes(path)) {
      priority = 0.8
    }

    if (path.startsWith('/blog/')) {
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
