import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iDesign",
  description:
    "Welcome to iDesign, your go-to IT consultancy for full-stack web development, custom mobile apps, and AI integrations. Boost your business with our tailored tech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SCZ9P4PQ21"
      />
      <Script
        id="gtag-inline-script" // Add a unique id attribute
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-SCZ9P4PQ21');
        `}
      </Script>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="h-[calc(100vh-70px)]">{children}</div>
      </body>
    </html>
  );
}
