import ProjectItem from "@/component/ProjectItem";
import Sheet from "@/component/Sheet";
import Showcase from "@/component/Showcase";
import Work from "@/component/Work";
import Works from "@/component/Works";
import fs from 'fs';
import matter from "gray-matter";
import path from 'path';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "I&apos;m web or app developer, a focused on creating tailor-made websites.",
};

export default function Home() {
  const files = fs.readdirSync(path.join(process.cwd(), 'public', 'work'));
  
  const posts = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      let filePath = path.join(process.cwd(), 'public', 'work', filename)
      const markdownContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(markdownContent);
      return ({
        title: data.title,
        year: data.year,
        description: content,
        web_url: data.web_url,
        thumbail: data.thumbail,
        media: data.images,
        categories: data.categories,
        status: data.status,
        slug: filename.replace('.md', '')
      })
  });

  return (
    <main className="relative">
      <Showcase slug="index" menu="work" />
      <Works posts={posts} />
    </main>
  );
}
