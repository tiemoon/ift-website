import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function UltraMinimalIFT() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight">
            Institute of Frontier Technology
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#academics" className="hover:text-black">Academics</a>
            <a href="#research" className="hover:text-black">Research</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-3 text-sm">
            <a href="#about" className="block">About</a>
            <a href="#academics" className="block">Academics</a>
            <a href="#research" className="block">Research</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO WITH BIG IMAGE */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-[80vh] object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-semibold leading-tight"
            >
              A new standard for
              <br />
              frontier technology education
            </motion.h1>

            <p className="mt-6 max-w-xl text-white/80">
              Clean, modern, and globally aligned academic environment focused on innovation, research, and future-ready talent.
            </p>

            <div className="mt-6">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium inline-flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-lg leading-8 text-black/70">
            The Institute of Frontier Technology is positioned as a next-generation academic institution focused on advanced digital capability, interdisciplinary learning, and applied research. The design intentionally removes clutter and communicates clarity, confidence, and global ambition.
          </p>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section>
          <img
            //src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-[70vh] object-cover"
          />
        </section>

        {/* ACADEMICS */}
        <section id="academics" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">Academics</h2>

          <div className="mt-12 grid md:grid-cols-2 gap-12 text-lg">
            <div>
              <h3 className="font-medium">Software & AI</h3>
              <p className="mt-2 text-black/60">Advanced computing, data systems, and intelligent software.</p>
            </div>
            <div>
              <h3 className="font-medium">Cyber Security</h3>
              <p className="mt-2 text-black/60">Secure systems, digital trust, and resilience.</p>
            </div>
            <div>
              <h3 className="font-medium">IoT & Robotics</h3>
              <p className="mt-2 text-black/60">Connected devices and cyber-physical systems.</p>
            </div>
            <div>
              <h3 className="font-medium">Digital Transformation</h3>
              <p className="mt-2 text-black/60">Technology-driven change across industries.</p>
            </div>
          </div>
        </section>

        {/* IMAGE */}
        <section>
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-[70vh] object-cover"
          />
        </section>

        {/* RESEARCH */}
        <section id="research" className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">Research</h2>
          <p className="mt-6 text-lg leading-8 text-black/70">
            Research is presented as a core institutional pillar—focused on artificial intelligence, cyber systems, connected infrastructure, and digital innovation. The minimal design gives research more authority and clarity.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">Contact</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-10 text-black/70">
            <div>
              <p className="font-medium text-black">Address</p>
              <p className="mt-2">Kaliakair, Gazipur, Bangladesh</p>
            </div>
            <div>
              <p className="font-medium text-black">Email</p>
              <p className="mt-2">info@ift.edu.bd</p>
            </div>
            <div>
              <p className="font-medium text-black">Phone</p>
              <p className="mt-2">+880 0000 000000</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-black/10 py-8 text-center text-sm text-black/50">
          Institute of Frontier Technology
        </footer>
      </main>
    </div>
  );
}
