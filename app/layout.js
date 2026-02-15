import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "A-1 Prints | Quality Screen Printers of Textiles | Mumbai, India",
  description: "A-1 Prints — 50 years of trusted textile screen printing in Mumbai. Specializing in cotton saree printing, pigment printing, and dyeing. Pan India delivery. Est. 1975.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
