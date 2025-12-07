import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Freelance Developer | Portfolio" },
    { name: "description", content: "Professional portfolio of a freelance developer specializing in modern web solutions." },
  ];
}

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Blobs */}
      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-40 -top-20 -left-20 animate-float"></div>
      <div className="absolute w-80 h-80 bg-pink-600 rounded-full blur-[100px] opacity-40 bottom-10 -right-10 animate-float animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl text-indigo-400 font-semibold mb-6 uppercase tracking-[0.2em] animate-fade-in-down">
          Mahmoud Rizk
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up delay-[200ms]">
          Frontend <br />
          <span className="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-[400ms] leading-relaxed">
          I craft high-performance websites and applications with a focus on premium design and seamless user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-[600ms]">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/40 hover:-translate-y-1 hover:shadow-indigo-500/60 transition-all duration-300"
          >
            Hire Me
          </Link>
          <Link
            to="https://mahmoud-rizk-cv.vercel.app/"
            target="_blank"
            className="px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/40 hover:-translate-y-1 hover:shadow-indigo-500/60 transition-all duration-300"
          >
            View CV
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 rounded-full font-semibold text-base bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
