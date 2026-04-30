import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import WorkGrid from "@/components/WorkGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow w-full max-w-[1600px] mx-auto relative">
        <Hero />
        <About />
        <Marquee />
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
