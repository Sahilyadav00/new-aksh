import ServicesPageClient from "./ServicesPageClient";
import { getPageMetadata } from "@/lib/page-meta";

// The page body is interactive (client component), so metadata is provided here.
export function generateMetadata() {
  return getPageMetadata("/services/");
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
