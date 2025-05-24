import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdDashboard } from 'react-icons/md'
import logo from '../assets/Logo.png'
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSignupOptions, setShowSignupOptions] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // GSAP scroll animation
        const headerAnimation = gsap.to(headerRef.current, {
            duration: 0.5,
            padding: '1rem',
            backgroundColor: 'rgba(0, 84, 89, 0.8)',
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

    const handleSignUp = () => {
        setShowSignupOptions(!showSignupOptions);
    };

    return (
        <header ref={headerRef} className="fixed w-full top-0 left-0 z-50 transition-all duration-500 px-4 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="text-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                >                                                                           
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white font-raleway to-white/70">
                        <img src={logo} alt="Logo" className="h-12 w-auto inline-block mr-2" />
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

                {/* Auth Buttons - Modified */}
                <div className="hidden md:flex items-center gap-3 relative">
                    <Link 
                        to="/dashboard" 
                        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-teal-950/20 rounded-full transition-all duration-300 hover:bg-teal-950/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 cursor-pointer backdrop-blur-sm"
                    >
                        <MdDashboard className="text-lg" />
                        <span>Dashboard</span>
                    </Link>
                    <button className="px-5 py-2 text-sm font-medium text-white bg-transparent rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-white/20 active:scale-95 cursor-pointer">
                        Login
                    </button>
                    <div className="relative">
                        <button 
                            onClick={handleSignUp}
                            className="px-5 py-2 text-sm font-medium text-teal-950 bg-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            Sign Up
                        </button>
                        {showSignupOptions && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                <Link 
                                    to="/signup/startup"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => setShowSignupOptions(false)}
                                >
                                    Join as Startup
                                </Link>
                                <Link 
                                    to="/signup/investor"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => setShowSignupOptions(false)}
                                >
                                    Join as Investor
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Modified */}
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
                            <Link 
                                to="/dashboard"
                                className="w-full px-5 py-2 text-sm font-medium text-white bg-teal-950 rounded-lg transition-all duration-300 hover:bg-teal-900 flex items-center justify-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MdDashboard className="text-lg" />
                                <span>Dashboard</span>
                            </Link>
                            <button className="w-full px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg transition-all duration-300 hover:bg-white/10">
                                Login
                            </button>
                            <div className="space-y-2">
                                <Link 
                                    to="/signup/startup"
                                    className="block w-full px-5 py-2 text-sm font-medium text-teal-950 bg-white rounded-lg transition-all duration-300 hover:opacity-90"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Join as Startup
                                </Link>
                                <Link 
                                    to="/signup/investor"
                                    className="block w-full px-5 py-2 text-sm font-medium text-teal-950 bg-white rounded-lg transition-all duration-300 hover:opacity-90"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Join as Investor
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header