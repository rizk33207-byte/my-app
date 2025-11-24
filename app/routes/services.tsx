import type { Route } from "./+types/services";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Services | Freelance Developer" },
        { name: "description", content: "Web development, UI/UX design, and other services I offer." },
    ];
}

export default function Services() {
    return (
        <section id="services" className="pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:rounded-full">
                        My Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Web Development</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Custom websites built with modern technologies like HTML5, CSS3, JavaScript, and React. Fast, responsive, and SEO-friendly.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Creating intuitive and visually appealing user interfaces that provide an exceptional user experience across all devices.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Ensuring your website looks and performs perfectly on desktops, tablets, and mobile phones.
                        </p>
                    </div>

                    {/* Service Card 4 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Speeding up your existing website to improve user retention and search engine rankings.
                        </p>
                    </div>

                    {/* Service Card 5 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Building secure and user-friendly online stores to help you sell your products effectively.
                        </p>
                    </div>

                    {/* Service Card 6 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 group">
                        <div className="text-4xl mb-4 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Backend Solutions</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Robust server-side logic and database management to power your applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
