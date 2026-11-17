export const BLOG_PLACEHOLDER_IMAGE = "/assets/images/Placeholder.webp";

// Older posts had this saved automatically by the API when no cover was uploaded.
const LEGACY_DEFAULT_IMAGE = "/assets/images/home/BLOG-01.WEBP";

// The post's real cover image, or null if it has none.
export function getBlogCoverImage(image) {
  return image && image !== LEGACY_DEFAULT_IMAGE ? image : null;
}

// Image to display on cards and the post page.
export function getBlogImage(image) {
  return getBlogCoverImage(image) || BLOG_PLACEHOLDER_IMAGE;
}
