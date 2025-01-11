import "./globals.css";
import { Geist, Geist_Mono, Questrial, Rubik } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Fresh Harvests | Organic Products Delivered to Your Doorstep",
  description:
    "Discover a wide range of fresh, organic products with Fresh Harvests.",
  keywords: "Fresh Harvests, Organic Products, E-commerce",
  author: "Fresh Harvests Team",
  openGraph: {
    title: "Fresh Harvests | Organic Products Delivered to Your Doorstep",
    description:
      "Shop fresh, organic products and experience seamless delivery.",
    url: "https://freshtask.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://freshtask.netlify.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Fresh Harvests",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Harvests | Organic Products Delivered to Your Doorstep",
    description: "Enjoy fresh, organic products delivered to your doorstep.",
    images: ["https://freshtask.netlify.app/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://freshtask.netlify.app/",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${questrial.variable} ${rubik.variable} fallback-font antialiased`}
      >
        <ReduxProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
        <Toaster position='top-center' />
      </body>
    </html>
  );
}
