import { Header, Footer } from "@/components/layout/";
import { Hero, AlternatingText, Stats, Cta } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <AlternatingText />
      <Cta /> 
      <Footer />
    </>
  );
}