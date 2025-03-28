import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Popular() {
    const carouselRef = useRef(null);

    useGSAP(() => {
        const totalWidth = carouselRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        const distance = totalWidth - visibleWidth;

        gsap.fromTo(
            carouselRef.current,
            {
                x: 0
            },
            {
                x: -distance,
                duration: 20,
                ease: "none",
                repeat: -1,
                yoyo: true
            }
        );
    }, []);
    
    // Sample investor data -  fetch this from an API in a real app
    const investors = [
        { id: 1, name: "Alex Morgan", image: "https://randomuser.me/api/portraits/men/32.jpg", role: "Angel Investor" },
        { id: 2, name: "Sarah Johnson", image: "https://randomuser.me/api/portraits/women/44.jpg", role: "VC Partner" },
        { id: 3, name: "Michael Chen", image: "https://randomuser.me/api/portraits/men/86.jpg", role: "Tech Investor" },
        { id: 4, name: "Priya Sharma", image: "https://randomuser.me/api/portraits/women/65.jpg", role: "Seed Investor" },
        { id: 5, name: "David Wilson", image: "https://randomuser.me/api/portraits/men/29.jpg", role: "Angel Investor" },
        { id: 6, name: "Emma Roberts", image: "https://randomuser.me/api/portraits/women/22.jpg", role: "VC Partner" },
        { id: 7, name: "James Lee", image: "https://randomuser.me/api/portraits/men/42.jpg", role: "Growth Investor" },
    ];
    
 
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
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
                        ref={carouselRef}
                        className="flex space-x-8 py-4"
                    >
                        {/* Duplicate the investors array for infinite scrolling effect */}
                        {[...investors, ...investors, ...investors].map((investor, index) => (
                            <div 
                                key={`${investor.id}-${index}`} 
                                className="flex flex-col items-center flex-shrink-0 transition-all duration-300"
                            >
                                <div className="relative w-36 h-36 mb-3">
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
        </div>
    );
}

export default Popular;