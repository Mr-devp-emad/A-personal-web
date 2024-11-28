"use client"

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main>
        <Navbar />
     
       <Hero />
       <About />
       
       <hr/>
       <Testimonials />
       <Contact />
       <Projects />
       <Footer />
   </main>
  );
}
