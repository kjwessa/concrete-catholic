import "./globals.css";
import { FooterLayout } from "../..//components/FooterLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="flex min-h-svh flex-col">{children}</main>
        <FooterLayout />
      </body>
    </html>
  );
}
