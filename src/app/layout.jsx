import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/provider/CartProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsFonts = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "MS Restaurants",
  description: "Best food delivery app in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppinsFonts.className}>
      <body
        className={`${poppinsFonts.variable} ${poppinsFonts.variable} antialiased`}
      >
        <Header></Header>
        <CartProvider>{children}</CartProvider>
        
        
      </body>
    </html>
  );
}
