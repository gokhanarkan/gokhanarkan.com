import React from "react";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${posts
          .map(({ slug, date, published }) => {
            if (published) { // Only published blog posts will be written in sitemap
              return `
                    <url>
                        <loc>${`${process.env.BASE_URL}/blog/${slug}`}</loc>
                        <lastmod>${new Date(date)}</lastmod>
                    </url>
                `;
            }
          })
          .join("")}
          <url>
            <loc>${process.env.BASE_URL}/blog</loc>
          </url>
          <url>
            <loc>${process.env.BASE_URL}</loc>
          </url>
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const posts = await getAllPosts();

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;
