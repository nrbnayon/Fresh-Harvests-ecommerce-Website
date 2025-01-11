import { Geist, Geist_Mono, Questrial, Rubik } from "next/font/google";
import "./globals.css";
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
  title: "Fresh Harvests E-commerce",
  description: "Discover fresh, organic products delivered to your doorstep.",
};

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
