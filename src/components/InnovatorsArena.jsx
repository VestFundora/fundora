import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InnovatorsArena = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonRef = useRef(null);

    useGSAP(() => {
        // Title animation
        gsap.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            }
        });

        // Cards stagger animation
        gsap.from(cardsRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        });

        // Button animation
        gsap.from(buttonRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: buttonRef.current,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-800 to-teal-900 text-white py-16">
            <div className="container mx-auto px-4">
                <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Innovators Arena: Bi-Monthly Ideathon
                </h1>

                <div ref={containerRef} className="max-w-3xl mx-auto space-y-8">
                    <div ref={el => cardsRef.current[0] = el} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                        <h2 className="text-2xl font-semibold mb-4 text-teal-100">About the Event</h2>
                        <p className="text-white/80 leading-relaxed">
                            Every two months, we organize an exciting ideathon where innovative minds come together
                            to present their groundbreaking ideas. This platform is designed to foster creativity,
                            innovation, and entrepreneurial spirit among participants.
                        </p>
                    </div>

                    <div ref={el => cardsRef.current[1] = el} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                        <h2 className="text-2xl font-semibold mb-4 text-teal-100">Selection Process</h2>
                        <p className="text-white/80 leading-relaxed">
                            Out of all the brilliant ideas presented during the ideathon, our expert panel
                            selects the top 3 most promising concepts. These selected ideas receive special
                            recognition and support for further development.
                        </p>
                    </div>

                    <div ref={el => cardsRef.current[2] = el} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                        <h2 className="text-2xl font-semibold mb-4 text-teal-100">Rewards</h2>
                        <div className="text-white/80 space-y-2">
                            <p>🏆 First Place: Extended mentorship and development support</p>
                            <p>🥈 Second Place: Resource allocation and guidance</p>
                            <p>🥉 Third Place: Recognition and networking opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Register Button Section */}
                <div ref={buttonRef} className="text-center mt-16">
                    <div className="mb-6 text-xl text-teal-100">
                        Ready to showcase your groundbreaking idea?
                    </div>
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold overflow-hidden bg-white rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                        <span className="relative z-10 text-teal-900 group-hover:text-teal-950 cursor-pointer">
                            Register for Next Ideathon
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <div className="mt-4 text-teal-100/80 text-sm ">
                        Next batch starting soon • Limited slots available
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InnovatorsArena;
