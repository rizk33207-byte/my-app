import { Form } from "react-router";
import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact | Freelance Developer" },
        { name: "description", content: "Get in touch for your next web project." },
    ];
}

export default function Contact() {
    return (
        <section id="contact" className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative">
            {/* Background Elements */}
            <div className="absolute w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] top-20 left-10 -z-10 animate-pulse"></div>
            <div className="absolute w-80 h-80 bg-pink-900/20 rounded-full blur-[100px] bottom-20 right-10 -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-6xl mx-auto px-8 w-full">
                <div className="text-center mb-16 relative">
                    <p className="text-indigo-400 font-medium mb-4 uppercase tracking-widest text-sm">Let's Connect</p>
                    <h2 className="text-4xl md:text-5xl font-bold inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:rounded-full">
                        Get In Touch
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-neutral-400 mb-8 leading-relaxed">
                                Ready to start your next project? Whether you have a specific idea or need help figuring out the next steps, I'm here to help.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:rizk33207@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                                        <i className="fas fa-envelope text-indigo-400 group-hover:text-white transition-colors"></i>
                                    </div>
                                    <span className="text-lg">rizk33207@gmail.com</span>
                                </a>

                                <a
                                    href="tel:+2010679832502"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                                        <i className="fas fa-phone text-pink-400 group-hover:text-white transition-colors"></i>
                                    </div>
                                    <span className="text-lg">+20 106 798 32502</span>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center group-hover:bg-neutral-600 transition-colors">
                                        <i className="fas fa-map-marker-alt text-neutral-400 group-hover:text-white transition-colors"></i>
                                    </div>
                                    <span className="text-lg">Remote / Worldwide</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://github.com/mahmoud-rizk" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors text-xl">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors text-xl">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-sky-500 transition-colors text-xl">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl animate-fade-in-up delay-200">
                        <Form method="post" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-neutral-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-neutral-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-neutral-600 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-bold text-white bg-linear-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
                            >
                                Send Message
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
