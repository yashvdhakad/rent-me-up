import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentMeUp | Explore Flats and Flatmate",
  description:
    "RentMeUp is a platform that helps young professionals and students find their ideal flat and compatible roommate in urban areas, including Jaipur. Our roommate matching algorithm simplifies the housing search process by connecting users with compatible flatmates based on shared interests, lifestyles, and habits. This not only saves time and reduces stress, but also helps users save money by splitting rent and other living expenses. With RentMeUp, finding a new flat and flatmate in Jaipur has never been easier or more affordable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
