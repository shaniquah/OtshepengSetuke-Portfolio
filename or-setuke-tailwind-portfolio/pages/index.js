import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-12 py-4">
      <Hero />
    </main>
  );
}
