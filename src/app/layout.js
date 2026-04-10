import { DM_Sans, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Airbnb Assistants For Property Management",
  description: "Professional property management services powered by Airbnb Assistants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${plusJakartaSans.variable}`}>
      <body className={`min-h-full flex flex-col antialiased font-[--font-dm-sans]`}>
        {children}
      </body>
    </html>
  );
}