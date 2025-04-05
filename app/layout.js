import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Proza_Libre } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import NavigationBar from "./NavigationBar/NavigationBar";
// import { DockDemo } from "./NavigationBar/NavigationBar";
import LogoWithName from './LogoWithName';
import HireSection from './HireSectionInNavbar/HireSection';
import { color } from "framer-motion";
import { Pointer } from "@/components/magicui/pointer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ScrollDownButton from "./ScrollDownButton";
import WarningForMobile from "./WarningForMobile";

import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"], });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500", "700"] }); // Just use this template for another font-style
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });
const proza_libre = Proza_Libre({ subsets: ["latin"], weight: ["400", "500", "700"] });
const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Diptangshu Roy | Portfolio",
  description: "I am Diptangshu Roy. I am a Full Stack Web Developer. I am proefficient in MERN Technologies. I am searching for a full stack web development job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* <Pointer /> */}
        <ScrollDownButton />
        {/* This is a custom cursor */}
        {/* <Pointer /> */}
        {/* MAKE THIS nav RESPONSIVE */}
        {/* <h1 className='hidden'>Welcome to Diptangshu Roy's Portfolio</h1> */}
        <ScrollProgress className="" />
        {/* <WarningForMobile /> */}
        <nav className='flex justify-around mt-5 mb-4 max-md:mt-2 bg-neutral-900'>

          <h1>
            <LogoWithName />
          </h1>
          <NavigationBar />
          {/* <DockDemo /> */}
          <HireSection />
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
