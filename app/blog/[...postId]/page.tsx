import React from "react";

type BlogPostProps = {
  params: { postId: number };
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { postId } = params;
  return (
    <div>
      Blog post <span className="text-blue-500 font-bold">{postId}</span>
    </div>
  );
};

export default BlogPost;
