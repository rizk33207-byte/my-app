import { useState } from "react";
import { NavLink, Link } from "react-router";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 flex items-center">
            <div className="max-w-[1200px] mx-auto px-8 w-full">
                <nav className="flex justify-between items-center w-full">
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
                        onClick={closeMenu}
                    >
                        Dev
                        <span className="bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                        .
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="flex gap-8 hidden md:flex items-center">
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
                        <li>
                            <Link
                                to="https://mahmoud-rizk-cv.vercel.app/"
                                target="_blank"
                                className="px-6 py-2 rounded-full font-semibold text-sm bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/40 hover:opacity-90 transition-all duration-300"
                            >
                                View CV
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                style={{ top: "80px" }} // Below header
            >
                <ul className="flex flex-col gap-8 text-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bio"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                }`
                            }
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="https://mahmoud-rizk-cv.vercel.app/"
                            target="_blank"
                            className="inline-block px-8 py-3 rounded-full font-semibold text-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/40 hover:opacity-90 transition-all duration-300"
                            onClick={closeMenu}
                        >
                            View CV
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
