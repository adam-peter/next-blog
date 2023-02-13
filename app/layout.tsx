import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white w-8/12 mx-auto text-lg">
        <div className="">Layout</div>
        {children}
      </body>
    </html>
  );
}
