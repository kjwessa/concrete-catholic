import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-50 antialiased">
        <main className="flex min-h-svh flex-col">{children}</main>
      </body>
    </html>
  );
}
