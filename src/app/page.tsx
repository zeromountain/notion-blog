import { fetchPages } from "@/lib/notion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const posts = await fetchPages();

  if (!posts) return notFound();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post: any) => {
        return (
          <article key={post.id}>
            <Link
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
            >
              <Card
                isHoverable
                isPressable
                className="w-full transition-all hover:scale-105"
              >
                <CardHeader>
                  <h2>{post.properties.name.title[0].plain_text}</h2>
                </CardHeader>
                <CardBody>
                  {post.properties?.Image?.url && (
                    <Image
                      src={post.properties.Image.url}
                      alt={post.properties.Image.alt_text}
                      width={post.properties.Image.width}
                      height={post.properties.Image.height}
                    />
                  )}
                </CardBody>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
