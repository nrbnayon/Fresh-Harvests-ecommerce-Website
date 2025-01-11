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
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta name='robots' content={metadata.robots} />
        <link rel='canonical' href={metadata.alternates.canonical} />
        <meta property='og:title' content={metadata.openGraph.title} />
        <meta
          property='og:description'
          content={metadata.openGraph.description}
        />
        <meta property='og:url' content={metadata.openGraph.url} />
        <meta property='og:site_name' content={metadata.openGraph.siteName} />
        <meta property='og:type' content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property='og:image' content={image.url} />
        ))}
        <title>{metadata.title}</title>
      </head>
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
