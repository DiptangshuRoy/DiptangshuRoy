import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import LogoWithName from './LogoWithName';
import HireSection from './HireSectionInNavbar/HireSection';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diptangshu Roy | Portfolio",
  description: "I am Diptangshu Roy. I am a Full Stack Web Developer. I am proefficient in MERN Technologies. I am searching for a full stack web development job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MWB7RG96H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6MWB7RG96H');
            `,
          }}
        />
      </Head>
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
