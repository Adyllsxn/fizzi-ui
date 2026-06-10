// src/app/page.tsx
import Header from "@/components/layout/header/Header";
import { Hero } from "./_components/Hero";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}