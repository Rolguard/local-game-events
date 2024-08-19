
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Any code displayed here, will be displayed on any page e.g. navbar, footer */}
      <body>{children}</body>
    </html>
  );
}
