import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Victory } from "@/components/sections/Victory";
import { About } from "@/components/sections/About";
import { Transparency } from "@/components/sections/Transparency";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Victory />
        <About />
        <Transparency />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
