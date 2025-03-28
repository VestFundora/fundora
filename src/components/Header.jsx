import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // GSAP scroll animation
        const headerAnimation = gsap.to(headerRef.current, {
            duration: 0.5,
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            ease: 'power2.inOut',
            paused: true
        });

        // ScrollTrigger for header
        ScrollTrigger.create({
            start: 'top+=20 top',
            onUpdate: (self) => {
                if (self.progress > 0) {
                    headerAnimation.play();
                } else {
                    headerAnimation.reverse();
                }
            }
        });

        return () => {
            headerAnimation.kill();
        };
    }, []);

    return (
        <header ref={headerRef} className="fixed w-full top-0 left-0 z-50 transition-all duration-500 px-4 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="text-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Fundora
                    </span>
                </Link>

                {/* Navigation Pills - Hidden on mobile */}
                <nav className="hidden md:flex p-4 items-center justify-center bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 mx-4">
                    <ul className="flex items-center gap-2">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/services", label: "Services" },
                            { path: "/contact", label: "Contact" },
                            { path: "/updates", label: "Updates" }
                        ].map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`relative px-4 py-2 text-sm font-medium text-white/90 rounded-full transition-all duration-300
                                        ${location.pathname === item.path 
                                            ? 'bg-white/20 text-white' 
                                            : 'hover:bg-white/10 hover:text-white'
                                        }
                                        hover:scale-105 active:scale-95`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}></span>
                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}></span>
                    </div>
                </button>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="px-5 py-2 text-sm font-medium text-white bg-transparent rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                        Login
                    </button>
                    <button className="px-5 py-2 text-sm font-medium text-teal-950 bg-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 hover:scale-105 active:scale-95">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-x-0 top-[72px] bg-black/90 backdrop-blur-lg transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
            }`}>
                <nav className="container mx-auto px-4 py-6">
                    <ul className="space-y-4">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/services", label: "Services" },
                            { path: "/contact", label: "Contact" },
                            { path: "/updates", label: "Updates" }
                        ].map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-2 text-white/90 rounded-lg transition-all duration-300 ${
                                        location.pathname === item.path 
                                            ? 'bg-white/20 text-white' 
                                            : 'hover:bg-white/10'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 flex flex-col gap-2">
                            <button className="w-full px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg transition-all duration-300 hover:bg-white/10">
                                Login
                            </button>
                            <button className="w-full px-5 py-2 text-sm font-medium text-teal-950 bg-white rounded-lg transition-all duration-300 hover:opacity-90">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header