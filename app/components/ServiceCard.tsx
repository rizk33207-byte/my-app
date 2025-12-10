interface ServiceCardProps {
    title: string;
    description: string;
    icon: string; // FontAwesome class
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-neutral-800/50 transition-all duration-300 group">
            <div className="mb-6 w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                <i className={`${icon} text-2xl text-neutral-400 group-hover:text-indigo-400 transition-colors`}></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">
                {title}
            </h3>
            <p className="text-neutral-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
