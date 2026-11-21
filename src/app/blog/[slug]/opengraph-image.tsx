import { BLOG_SOCIAL_IMAGE_SIZE, renderBlogSocialImage } from '../../../lib/blog-social-image'

export const alt = 'Xaltris blog article'
export const size = BLOG_SOCIAL_IMAGE_SIZE
export const contentType = 'image/png'

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return renderBlogSocialImage(slug)
}
