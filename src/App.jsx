import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Skills } from "./section/Skills";
import { Projects } from "@/section/Projects";
import { Contact } from "@/section/Contact";
import { Footer } from "./layout/Footer";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
