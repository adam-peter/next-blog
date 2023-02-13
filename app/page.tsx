import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white flex justify-center items-center ">
      <div>
        <div>
          <h1 className="">my name is Adam Petržela</h1>
        </div>
        <div>
          <Link href="/blog">checkout my Blog</Link>
        </div>
        <div>
          <Link href="/contact">contact me</Link>
        </div>
      </div>
    </div>
  );
}
