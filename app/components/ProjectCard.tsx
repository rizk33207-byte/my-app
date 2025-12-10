import { Link } from "react-router";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    demoLink?: string;
    repoLink?: string;
    image?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    demoLink,
    repoLink,
    image,
}: ProjectCardProps) {
    return (
        <div className="group relative bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col h-full translate-y-0 hover:-translate-y-2">
            {/* Image Placeholder or Actual Image */}
            <div className="h-48 bg-neutral-800 relative overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-800 to-neutral-900 group-hover:from-indigo-900/20 group-hover:to-pink-900/20 transition-colors duration-500">
                        <span className="text-4xl opacity-20">
                            <i className="fas fa-code"></i>
                        </span>
                    </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                            title="Live Demo"
                        >
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    )}
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black rounded-full hover:bg-neutral-800 hover:text-white transition-colors duration-300"
                            title="View Code"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-400 mb-6 line-clamp-3 text-sm grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
