
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Any code displayed here, will be displayed on any page e.g. navbar, footer */}
      {/* Layouts are only applied to children of that route, can fetch data  */}
      <body className="text-xl font-roboto flex">
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
