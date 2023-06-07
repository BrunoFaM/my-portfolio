import Header from "./components/Header";
import "./globals.css";
import {Libre_Baskerville} from "next/font/google";
import SocialNav from "./components/SocialNav";

export const metadata = {
  title: "My portfolio",
  description: "Generated by create next app",
};
const libre_Baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
  variable: '--font_libre',
  display: "swap"
})
const libre_thin = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  variable: '--font_libre_thin',
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libre_Baskerville.variable}  ${libre_thin.variable} `} >
      <body className="bg-base text-white font-libre lg:pt-2  lg:pl-5 lg:pr-5">
        <Header />
        {children}
        <SocialNav />
      </body>
    </html>
  );
}
