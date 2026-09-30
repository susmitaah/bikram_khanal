import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Priorities } from "@/components/Priorities";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { News } from "@/components/News";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Priorities />
        <Work />
        <Journey />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
