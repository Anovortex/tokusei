import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tokusei",
  description:
    "Elevate your style with our anime-inspired t-shirts. Discover unique designs crafted for fans, by fans. Shop now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
