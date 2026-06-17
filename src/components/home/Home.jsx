import { Navbar } from "../Navbar";
import { Hero } from "../Hero";
import { About } from "../About";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Experience } from "../Experience";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Background } from "../common/Background";

export default function Home() {
  return (
    <div className="relative min-h-screen text-brand-text font-sans selection:bg-brand-primary/30">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}