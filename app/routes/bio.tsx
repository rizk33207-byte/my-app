import type { Route } from "./+types/bio";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Me | Mahmoud Rizk" },
        { name: "description", content: "Learn more about my background, skills, and experience as a Frontend Developer." },
    ];
}

export default function Bio() {
    return (
        <section id="about" className="pt-32 pb-20 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Hero / Intro */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group order-2 md:order-1">
                        {/* Image Border Effect */}
                        <div className="absolute inset-0 border-2 border-pink-500/50 rounded-2xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            src="/images/mahmoud-rizk.jpg"
                            alt="Mahmoud Rizk"
                            className="w-full rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-3/4"
                        />
                    </div>

                    <div className="order-1 md:order-2">
                        <p className="text-indigo-400 font-medium mb-4 uppercase tracking-widest text-sm">Introduction</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Building digital <br />
                            <span className="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                experiences
                            </span> that matter.
                        </h1>
                        <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                            I am a dedicated Frontend Developer with a passion for building scalable and beautiful web solutions. My journey began with a curiosity for how things work on the web, which quickly turned into a career dedicated to crafting seamless user experiences.
                        </p>
                        <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                            With years of experience in both frontend and backend development, I help businesses transform their ideas into reality. My approach combines technical expertise with a keen eye for design, ensuring that every project I deliver is not only functional but also visually stunning.
                        </p>

                        <div className="flex gap-8 mt-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">50+</h4>
                                <p className="text-xs uppercase tracking-wider text-neutral-500">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">3+</h4>
                                <p className="text-xs uppercase tracking-wider text-neutral-500">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-indigo-500 mb-1">100%</h4>
                                <p className="text-xs uppercase tracking-wider text-neutral-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Journey Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">My <span className="text-pink-500">Journey</span></h2>
                    <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
                        {/* Item 1 */}
                        <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:block md:col-span-2 text-right pr-8">
                                <span className="text-indigo-400 font-bold block text-xl">2023 - Present</span>
                                <span className="text-neutral-500 text-sm">Freelance Developer</span>
                            </div>
                            <div className="absolute -left-[5px] md:left-auto md:right-0 md:col-start-3 md:col-end-3 md:relative md:-ml-[5px] w-3 h-3 rounded-full bg-indigo-500 outline outline-4 outline-[#0a0a0a]"></div>
                            <div className="md:col-span-3">
                                <span className="md:hidden text-indigo-400 font-bold block mb-2">2023 - Present</span>
                                <h3 className="text-xl font-bold mb-2">Senior Frontend Developer</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Specializing in Next.js and React applications. Delivering high-quality code and user-centric designs for diverse clients globally.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:block md:col-span-2 text-right pr-8">
                                <span className="text-indigo-400 font-bold block text-xl">2021 - 2023</span>
                                <span className="text-neutral-500 text-sm">Tech Solutions Inc.</span>
                            </div>
                            <div className="absolute -left-[5px] md:left-auto md:right-0 md:col-start-3 md:col-end-3 md:relative md:-ml-[5px] w-3 h-3 rounded-full bg-pink-500 outline outline-4 outline-[#0a0a0a]"></div>
                            <div className="md:col-span-3">
                                <span className="md:hidden text-indigo-400 font-bold block mb-2">2021 - 2023</span>
                                <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Collaborated with cross-functional teams to develop and maintain responsive web applications using React and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                        <i className="fas fa-lightbulb text-3xl text-indigo-500 mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">Innovation</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            I constantly explore new technologies and approaches to solve problems creatively and efficiently.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-pink-500/30 transition-all duration-300">
                        <i className="fas fa-search text-3xl text-pink-500 mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">Detail Oriented</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            I believe great software is in the details, from pixel-perfect implementation to clean, maintainable code.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                        <i className="fas fa-users text-3xl text-indigo-500 mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Open communication and teamwork are the pillars of my workflow, ensuring project success and client satisfaction.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
