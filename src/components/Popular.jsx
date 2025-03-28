import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

function Popular() {
    const popularRef = useRef(null);
    const investorsRef = useRef(null);
    const startupsRef = useRef(null);

    useGSAP(() => {
        gsap.from(popularRef.current, {
            opacity: 0,
            duration: 2,
            y: -200,
            scrollTrigger: {
                trigger: popularRef.current,
                start: "top 20%",
                end: "bottom 30%",
            }
        });
    });

    // Sample investor data - fetch this from an API in a real app
    const investors = [
        { id: 1, name: "Alex Morgan", image: "https://randomuser.me/api/portraits/men/32.jpg", role: "Angel Investor" },
        { id: 2, name: "Sarah Johnson", image: "https://randomuser.me/api/portraits/women/44.jpg", role: "VC Partner" },
        { id: 3, name: "Michael Chen", image: "https://randomuser.me/api/portraits/men/86.jpg", role: "Tech Investor" },
        { id: 4, name: "Priya Sharma", image: "https://randomuser.me/api/portraits/women/65.jpg", role: "Seed Investor" },
        { id: 5, name: "David Wilson", image: "https://randomuser.me/api/portraits/men/29.jpg", role: "Angel Investor" },
        { id: 6, name: "Emma Roberts", image: "https://randomuser.me/api/portraits/women/22.jpg", role: "VC Partner" },
        { id: 7, name: "James Lee", image: "https://randomuser.me/api/portraits/men/42.jpg", role: "Growth Investor" },
    ];

    const startups = [
        { 
            id: 1, 
            name: "Stripe", 
            logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", 
            category: "FinTech"
        },
        { 
            id: 2, 
            name: "Notion", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", 
            category: "Productivity"
        },
        { 
            id: 3, 
            name: "Discord", 
            logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png", 
            category: "Communication"
        },
        { 
            id: 4, 
            name: "Figma", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", 
            category: "Design"
        },
        { 
            id: 5, 
            name: "Vercel", 
            logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", 
            category: "Developer Tools"
        },
        { 
            id: 6, 
            name: "MongoDB", 
            logo: "https://www.mongodb.com/assets/images/global/leaf.png", 
            category: "Database"
        }
    ];

    return (
        <div ref={popularRef} className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Investors Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-3">Popular Investors</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Connect with top investors who are actively looking for promising startups and new opportunities.
                    </p>
                    
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden">
                        {/* Gradient Overlays for Infinite Effect */}
                        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                        
                        {/* Scrolling Carousel */}
                        <div 
                            ref={investorsRef}
                            className="flex space-x-8 py-4"
                        >
                            {/* Duplicate the investors array for infinite scrolling effect */}
                            {[...investors, ...investors, ...investors].map((investor, index) => (
                                <div 
                                    key={`${investor.id}-${index}`} 
                                    className="flex flex-col items-center flex-shrink-0 transition-all duration-300"
                                >
                                    <div className="relative w-20 h-20 lg:w-36 lg:h-36 mb-3">
                                        <img 
                                            src={investor.image} 
                                            alt={investor.name}
                                            className="w-full h-full rounded-full object-cover border-4 border-teal-950"
                                        />
                                        <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-teal-950/50 transition-all duration-300"></div>
                                    </div>
                                    <h3 className="font-semibold text-lg">{investor.name}</h3>
                                    <p className="text-gray-500 text-sm">{investor.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Startups Section */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-3">Trending Startups</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Discover innovative startups that are reshaping industries and creating new opportunities.
                    </p>
                    
                    <div className="relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                        
                        <div 
                            ref={startupsRef}
                            className="flex space-x-8 py-4"
                        >
                            {[...startups, ...startups, ...startups].map((startup, index) => (
                                <div 
                                    key={`${startup.id}-${index}`}
                                    className="flex flex-col items-center flex-shrink-0 transition-all duration-300"
                                >
                                    <div className="w-24 h-16 lg:w-32 lg:h-24 mb-3 flex items-center justify-center">
                                        <img 
                                            src={startup.logo}
                                            alt={startup.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-lg">{startup.name}</h3>
                                    <p className="text-gray-500 text-sm">{startup.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popular;