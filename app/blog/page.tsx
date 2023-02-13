import React from "react";

import Link from 'next/link'

import { getAllPosts } from "@/lib/cms";

export function getStaticParams() {
  return;
}

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => {
        return (
          <Link href={`/blog/${post.postId}`} key={post.postId}>
            <div>
              <h1>{post.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
