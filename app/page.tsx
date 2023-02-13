"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="shadow">
        <div>
          <h1 className="text-4xl font-bold">
            Hi, I'm{" "}
            <a
              href="https://github.com/badmood111"
              target="_blank"
              className="text-blue-500 hover:text-purple-500" rel="noreferrer"
            >
              @badmood111
            </a>
          </h1>
        </div>
        <div>
          <Link href="/blog" className="text-xl hover:text-purple-500">
            checkout my Blog
          </Link>
        </div>
        <div>
          <Link href="/contact" className="text-xl hover:text-purple-500">contact me</Link>
        </div>
      </div>
    </div>
  );
}
