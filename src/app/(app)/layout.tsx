import "./globals.css";
import { Footer } from "../../components/Footer";
import { Header } from "../..//components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="flex min-h-svh flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
