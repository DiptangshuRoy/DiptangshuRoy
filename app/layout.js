import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import LogoWithName from './LogoWithName';
import HireSection from './HireSectionInNavbar/HireSection';


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
        <nav className='flex justify-around my-5'>
          <LogoWithName />
          <NavigationBar />
          <HireSection />
        </nav>
        {children}
      </body>
    </html>
  );
}
