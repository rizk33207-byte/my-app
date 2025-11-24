import { NavLink } from "react-router";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 flex items-center">
            <div className="max-w-[1200px] mx-auto px-8 w-full">
                <nav className="flex justify-between items-center w-full">
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
                    >
                        Dev
                        <span className="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                        .
                    </NavLink>
                    <ul className="flex gap-8 hidden md:flex">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium relative transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/bio"
                                className={({ isActive }) =>
                                    `font-medium relative transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `font-medium relative transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                                    }`
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `font-medium relative transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    {/* Mobile Menu Button (Hidden for now, but layout ready) */}
                    <button className="md:hidden text-2xl text-white">
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
        </header>
    );
}
