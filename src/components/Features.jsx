import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaChartBar, FaRobot, FaTachometerAlt, FaComments } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { MdOutlineAccountBalance, MdPersonSearch } from 'react-icons/md';

function Features() {
    const cardsRef = useRef(null);

    const cards = [
        { icon: FaChartBar, title: "Portfolio Analysis", desc: "Advanced analytics and real-time monitoring of your investment portfolio with predictive insights" },
        { icon: FaRobot, title: "AI Assistance", desc: "Intelligent AI-powered support for investment decisions, market analysis, and automated due diligence" },
        { icon: FaTachometerAlt, title: "Startup Dashboard", desc: "Comprehensive dashboard to track funding progress, investor engagement, and key performance metrics" },
        { icon: FaComments, title: "Live Chat & Video Meet", desc: "Secure video conferencing and real-time chat for seamless communication between startups and investors" },
        { icon: MdOutlineAccountBalance, title: "Be an Investor", desc: "Start your investment journey with verified startups, flexible investment options, and portfolio management" },
        { icon: BsFillPersonCheckFill, title: "Verified Users", desc: "Advanced verification system ensuring legitimate startups and accredited investors for secure transactions" },
        { icon: MdPersonSearch, title: "Personalized AI Matching", desc: "Smart matching algorithm connecting startups with investors based on preferences and growth potential" },
    ];

    useEffect(() => {
        if (!cardsRef.current) return;

        // Simple infinite loop animation
        gsap.to(cardsRef.current, {
            xPercent: -50,  // Move by 50% (exactly one set of cards)
            duration: 20,   // Take 20 seconds to complete
            ease: "none",   // Linear movement, no easing
            repeat: -1,     // Infinite repeats
            
            // This is the magic for smooth infinite loop
            modifiers: {
                xPercent: gsap.utils.unitize(x => {
                    return (parseFloat(x) % -50); // Reset position when reaching -50%
                })
            }
        });
    }, []);

    const renderCard = ({ icon: Icon, title, desc }) => (
        <div key={title} className="flex-shrink-0 w-[400px] bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-teal-950">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-950/10 rounded-full flex items-center justify-center">
                    <Icon className="text-teal-950 text-3xl" />
                </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
            <p className="text-gray-600 text-center">{desc}</p>
        </div>
    );

    return (
        <div className="bg-gray-50 overflow-hidden">
            <div className="py-20">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
                        <div className="w-16 h-1 bg-teal-950 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600">
                            Discover powerful tools and features designed to revolutionize startup funding and investment management
                        </p>
                    </div>
                </div>

                {/* Cards Container - New Structure */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div ref={cardsRef} className="flex gap-8 pl-8 w-fit">
                            {cards.map(renderCard)}
                            {cards.map(renderCard)} {/* Duplicate for seamless loop */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;