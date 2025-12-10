interface SkillBadgeProps {
    name: string;
    icon: string; // FontAwesome class
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-white/5 hover:border-indigo-500/30 hover:bg-neutral-800 transition-all duration-300 cursor-default">
            <i className={`${icon} text-indigo-400`}></i>
            <span className="text-sm font-medium text-neutral-300">{name}</span>
        </div>
    );
}
