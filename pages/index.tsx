import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "../components/common/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Sample listings to display
  const listings = [
    {
      title: "Cozy Apartment in Nairobi",
      description: "A modern apartment in the city center.",
      image: "/assets/placeholder1.jpg",
    },
    {
      title: "Beach House in Mombasa",
      description: "Enjoy ocean views and fresh air.",
      image: "/assets/placeholder2.jpg",
    },
    {
      title: "Luxury Villa in Kisumu",
      description: "Spacious villa with private pool.",
      image: "/assets/placeholder3.jpg",
    },
  ];

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen bg-gray-50 p-8 sm:p-20`}
    >
      {/* Header / Hero Section */}
      <header className="mb-12 text-center sm:text-left">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to ALX Listing App
        </h1>
        <p className="text-gray-600 text-lg">
          A clean foundation for building your Airbnb-style listing page.
        </p>
      </header>

      {/* Main Listing Area */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </main>

      {/* Footer / Info Section */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        ALX Listing App — Milestone 1 Setup
      </footer>
    </div>
  );
}
