import type { Route } from "./+types/bio";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Me | Mahmoud Rizk" },
        { name: "description", content: "Learn more about my background, skills, and experience as a Full Stack Developer." },
    ];
}

export default function Bio() {
    return (
        <section id="about" className="pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:rounded-full">
                        About Me
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        {/* Image Border Effect */}
                        <div className="absolute inset-0 border-2 border-pink-500/50 rounded-2xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            src="/images/mahmoud-rizk.jpg"
                            alt="Mahmoud Rizk"
                            className="w-full rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            Mahmoud Rizk <br />
                            <span className="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                Full Stack Developer
                            </span>
                        </h3>
                        <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                            I am a dedicated Full Stack Developer with a passion for building scalable and beautiful web solutions. With years of experience in both frontend and backend development, I help businesses transform their ideas into reality.
                        </p>
                        <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                            My approach combines technical expertise with a keen eye for design, ensuring that every project I deliver is not only functional but also visually stunning.
                        </p>

                        <div className="flex gap-8 mt-8">
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">50+</h4>
                                <p className="text-sm uppercase tracking-wider text-neutral-500">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">3+</h4>
                                <p className="text-sm uppercase tracking-wider text-neutral-500">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">100%</h4>
                                <p className="text-sm uppercase tracking-wider text-neutral-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
