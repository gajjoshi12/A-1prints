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
  title: "A-1 Prints | Traditional Rajasthani Textiles",
  description: "Experience the heritage of hand block printing with A-1 Prints.",
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
