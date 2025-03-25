import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import LogoWithName from './LogoWithName';
import HireSection from './HireSectionInNavbar/HireSection';
import { color } from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diptangshu Roy | Portfolio",
  description: "I am Diptangshu Roy. I am a Full Stack Web Developer. I am proefficient in MERN Technologies. I am searching for a full stack web development job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* MAKE THIS nav RESPONSIVE */}
        {/* <h1 className='hidden'>Welcome to Diptangshu Roy's Portfolio</h1> */}
        <nav className='flex justify-around my-5'>
          <h1>
            <LogoWithName />
          </h1>
          <NavigationBar />
          <HireSection />
        </nav>
        {children}
      </body>
    </html>
  );
}
