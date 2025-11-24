import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact | Freelance Developer" },
        { name: "description", content: "Get in touch for your next web project." },
    ];
}

export default function Contact() {
    return (
        <section id="contact" className="pt-32 pb-20 min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-[1200px] mx-auto px-8 w-full">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:rounded-full">
                        Get In Touch
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-xl">
                        <p className="text-xl mb-8">Ready to start your next project? Let's talk!</p>

                        <div className="flex flex-col gap-6">
                            <a
                                href="mailto:hello@example.com"
                                className="flex items-center justify-center gap-4 p-4 rounded-xl text-lg hover:bg-white/5 transition-colors group"
                            >
                                <i className="fas fa-envelope text-indigo-500 text-2xl group-hover:scale-110 transition-transform"></i>
                                <span>hello@example.com</span>
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="flex items-center justify-center gap-4 p-4 rounded-xl text-lg hover:bg-white/5 transition-colors group"
                            >
                                <i className="fas fa-phone text-indigo-500 text-2xl group-hover:scale-110 transition-transform"></i>
                                <span>+1 (234) 567-890</span>
                            </a>

                            <div className="flex items-center justify-center gap-4 p-4 rounded-xl text-lg hover:bg-white/5 transition-colors group">
                                <i className="fas fa-map-marker-alt text-indigo-500 text-2xl group-hover:scale-110 transition-transform"></i>
                                <span>Remote / Worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
