import { DM_Sans, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Airbnb Assistants For Property Management",
  description: "Professional property management services powered by Airbnb Assistants",
  keywords: [
    "property management",
    "booking management",
    "short term rental",
    "airbnb management",
    "guest support",
  ],
  authors: [{ name: "Airbnb Assistants Team" }],
  openGraph: {
    title: "Airbnb Assistants For Property Management",
    description: "Professional property management services powered by Airbnb Assistants",
    url: "https://yourdomain.com",
    siteName: "Airbnb Assistants",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Assistants For Property Management",
    description: "Professional property management services powered by Airbnb Assistants",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}