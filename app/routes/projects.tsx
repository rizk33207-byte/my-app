import type { Route } from "./+types/projects";
import ProjectCard from "../components/ProjectCard";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Projects | Mahmoud Rizk" },
        { name: "description", content: "Showcase of my web development projects and technical work." },
    ];
}

export default function Projects() {
    const projects = [
        {
            title: "Bedaya Website",
            description: "A modern Next.js 15 application built with TypeScript, Tailwind CSS, and React Router. Features a clean folder structure and responsive design.",
            tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Router"],
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Integrated with a mock API for data visualization.",
            tags: ["React", "Chart.js", "API Integration", "Tailwind"],
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "Portfolio v1",
            description: "My previous portfolio website built with HTML, CSS, and JavaScript. Migrated to React for better performance and maintainability.",
            tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "Task Management App",
            description: "A productivity tool to organize tasks with drag-and-drop functionality and local storage persistence.",
            tags: ["React", "DnD", "Local Storage", "State Management"],
            demoLink: "#",
            repoLink: "#",
        },
    ];

    return (
        <section className="min-h-screen pt-24 pb-20 px-6 relative">
            {/* Background Elements */}
            <div className="absolute w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] top-20 left-10 -z-10"></div>
            <div className="absolute w-80 h-80 bg-pink-900/20 rounded-full blur-[100px] bottom-20 right-10 -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`animate-fade-in-up delay-[${(index + 1) * 100}ms]`}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
