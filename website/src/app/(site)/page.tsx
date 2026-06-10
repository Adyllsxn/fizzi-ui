import Header from "@/components/layout/header/Header";
import { Hero, About, AlternatingText } from "./sections";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AlternatingText/>
      <About/>
      <Footer />
    </main>
  );
}