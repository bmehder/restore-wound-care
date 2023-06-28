import menuItems from '$lib/Headers/menuItems'

//list of posts containing a slug [{title: "Test title", slug: "test-title", updatedAt: "2023-01-01"}]
const posts = []

//list of pages as a string ex. ["about", "blog", "contact"]
const pages = menuItems.map(item => item.url.substring(1)).filter(Boolean)

const site = 'https://restorewoundcare.com'

const sitemap = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
    .map(
      page => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('')}
  ${posts
    .map(
      post =>
        `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
    )
    .join('')}
</urlset>`

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const body = sitemap(pages, posts)
  const response = new Response(body)
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
  response.headers.set('Content-Type', 'application/xml')
  return response
}