import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diptangshu R | Portfolio",
  description:
    "Discover Elhussary's front-end developer portfolio featuring innovative projects, modern web technologies, and a passion for clean, user-friendly design. Explore expertise in React, Next.js, Tailwind CSS, and more.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "UI/UX Design",
    "Responsive Web Design",
    "Tailwind CSS",
    "Web Development Projects",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Diptangshu", url: "https://diptangshu-portfolio-2.vercel.app/" }],
  openGraph: {
    title: "Diptangshu Roy | Fullstack Developer Portfolio",
    description:
      "Explore Diptangshu's cutting-edge front-end development projects, utilizing modern frameworks like React, Next.js, and Tailwind CSS.",
    url: "https://diptangshu-portfolio-2.vercel.app/",
    siteName: "Diptangshu Portfolio",
    type: "website",
    images: [
      {
        url: "https://diptangshu-portfolio-2.vercel.app/preview.png", // ✅ Your image URL here
        width: 1200,
        height: 630,
        alt: "Diptangshu Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diptangshu | Front-End Developer Portfolio",
    description:
      "Showcasing innovative web projects using React, Next.js, and modern UI/UX practices.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* HYDRATION ERROR DOES NOT HAPPEN IN PRIVATE BROWSING MODE. SO, DON'T FIX IT ~~JUST CHILL */}
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
