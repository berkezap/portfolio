import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berke Ozsap - Software Developer",
  description: "Full-Stack Developer specializing in Java, Spring Boot, React, and TypeScript",
  keywords: ["Berke Ozsap", "Software Developer", "Full-Stack", "Java", "Spring Boot", "React", "TypeScript"],
  authors: [{ name: "Berke Ozsap" }],
  openGraph: {
    title: "Berke Ozsap - Software Developer",
    description: "Full-Stack Developer specializing in Java, Spring Boot, React, and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
