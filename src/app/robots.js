export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akshdigital.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/admin/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "AnthropicAI",
          "PerplexityBot",
          "Google-Extended",
          "Bytespider",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
