import Link from "next/link";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto w-8/12 bg-black text-lg text-white">
        <div className="my-4 flex gap-4 justify-center">
          <Link className="hover:text-blue-500" href="/">Home</Link>
          <Link className="hover:text-blue-500" href="/blog">Blog</Link>
          <Link className="hover:text-blue-500" href="/contact">Contact</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
