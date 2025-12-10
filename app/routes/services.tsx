import type { Route } from "./+types/services";
import ServiceCard from "../components/ServiceCard";
import SkillBadge from "../components/SkillBadge";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Services & Skills | Mahmoud Rizk" },
        { name: "description", content: "Professional web development services and technical skills overview." },
    ];
}

export default function Services() {
    const services = [
        {
            title: "Landing Pages",
            description: "High-conversion, visually stunning landing pages designed to capture attention and drive action. Optimized for speed and responsiveness.",
            icon: "fas fa-rocket",
        },
        {
            title: "Dashboard Development",
            description: "Complex data visualization and management dashboards. Intuitive interfaces for handling large datasets and user workflows.",
            icon: "fas fa-chart-line",
        },
        {
            title: "E-Commerce Solutions",
            description: "Full-featured online stores with secure payment integration, product management, and seamless shopping experiences.",
            icon: "fas fa-shopping-cart",
        },
        {
            title: "API Integration",
            description: "Seamless integration of third-party APIs (Stripe, Google Maps, Social Media) to extend application functionality.",
            icon: "fas fa-plug",
        },
        {
            title: "Responsive Web Design",
            description: "Websites that look and function perfectly on all devices, from mobile phones to large desktop screens.",
            icon: "fas fa-mobile-alt",
        },
    ];

    const skills = [
        { name: "Next.js", icon: "fab fa-react" },
        { name: "React", icon: "fab fa-react" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "Node.js", icon: "fab fa-node" },
        { name: "Git & GitHub", icon: "fab fa-git-alt" },
        { name: "REST APIs", icon: "fas fa-server" },
        { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
        { name: "Communication", icon: "fas fa-comments" },
    ];

    return (
        <section className="min-h-screen pt-24 pb-20 px-6 relative">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        My <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Expertise</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        I bring a blend of technical precision and creative design to every project. Here's how I can help you succeed.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mb-20 animate-fade-in-up delay-200">
                    <h2 className="text-2xl font-bold mb-8 text-center text-white">Technical <span className="text-indigo-400">Skills</span></h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <SkillBadge key={index} {...skill} />
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div>
                    <h2 className="text-2xl font-bold mb-10 text-center text-white">Professional <span className="text-pink-500">Services</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className={`animate-fade-in-up delay-[${(index + 3) * 100}ms]`}>
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
