import { getPageMetadata } from "@/lib/page-meta";

export function generateMetadata() {
  return getPageMetadata("/faq/");
}

export default function FAQLayout({ children }) {
  return children;
}
