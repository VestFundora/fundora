import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function SuccessStories() {
    const storiesRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(storiesRef.current, 
            {
                background: "white",
            }, 
            {
                background: "#115e59",
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: storiesRef.current,
                    start: "top center",
                    end: "+=300",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                }
            }
        );
    }, []);

    const storiesData = [
        {
            founderName: "Sarah Chen",
            founderImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
            designation: "CEO & Founder",
            company: "TechVision AI",
            funding: "$2.5M",
            description: "From a small startup to revolutionizing AI-driven healthcare solutions, TechVision AI secured major funding within 6 months of joining Fundora.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
        },
        {
            founderName: "John Doe",
            founderImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
            designation: "Founder",
            company: "GreenEnergy Solutions",
            funding: "$5M",
            description: "Connected with perfect investors through our AI matching, leading to successful Series A funding for sustainable energy tech.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
        },
        {
            founderName: "Jane Smith",
            founderImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
            designation: "Co-Founder",
            company: "FinTech Revolution",
            funding: "$3.8M",
            description: "Transformed from a local fintech startup to a national player with strategic investments facilitated through Fundora.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white py-12" ref={storiesRef}>
            <div className="container mx-auto px-6" >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-white mb-6">Success Stories</h2>
                    <div className="w-24 h-1.5 bg-teal-400 mx-auto mb-8"></div>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Discover how startups achieved their funding goals and transformed their vision into reality
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {storiesData.map((story, index) => (
                        <div 
                            key={index}
                            className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                           
                            <div className="p-6 ">
                                <div className="flex items-start gap-4 mb-6">
                                    <img 
                                        src={story.founderImage} 
                                        alt={story.founderName}
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-400 ring-offset-2 ring-offset-teal-800"
                                    />
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-1">{story.founderName}</h3>
                                        <span className="text-sm text-teal-200 font-medium">{story.designation}</span>
                                    </div>
                                    <span className="bg-teal-400/20 px-4 py-1.5 rounded-full text-teal-100 text-sm font-semibold border border-teal-400/30">
                                        {story.funding}
                                    </span>
                                </div>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    {story.description}
                                </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SuccessStories;