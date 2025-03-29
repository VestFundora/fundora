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
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-16">
            <div className="container mx-auto px-4">
                <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Innovators Arena: Bi-Monthly Ideathon
                </h1>

                <div className="flex items-center justify-between">
                    <div ref={containerRef} className="flex space-x-4 mx-auto lg:space-x-8">
                    <div ref={buttonRef} className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                            <div className="text-lg text-teal-100 mb-4 text-center">
                                Ready to showcase your idea?
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-teal-900"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M14 6l6 6-6 6" />
                                </svg>
                            </div>
                            <button className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold overflow-hidden bg-white rounded-full transition-all duration-300 ease-out hover:scale-105">
                                <span className="relative z-10 text-teal-900 group-hover:text-teal-950 cursor-pointer">
                                    Register Now
                                </span>
                                
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <div className="mt-3 text-teal-100/80 text-xs text-center">
                                Limited slots available
                            </div>
                        </div>
                        <div ref={el => cardsRef.current[0] = el} className="w-[250px] h-[250px] bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                            <h2 className="text-xl font-semibold mb-3 text-teal-100">About the Event</h2>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Every two months, we organize an exciting ideathon where innovative minds come together
                                to present their groundbreaking ideas.
                            </p>
                        </div>

                        <div ref={el => cardsRef.current[1] = el} className="w-[250px] h-[250px] bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                            <h2 className="text-xl font-semibold mb-3 text-teal-100">Selection Process</h2>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Out of all the brilliant ideas presented, our expert panel
                                selects the top 3 most promising concepts.
                            </p>
                        </div>

                        <div ref={el => cardsRef.current[2] = el} className="w-[250px] h-[250px] bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                            <h2 className="text-xl font-semibold mb-3 text-teal-100">Rewards</h2>
                            <div className="text-white/80 text-sm space-y-2">
                                <p>🏆 First Place: Extended mentorship</p>
                                <p>🥈 Second Place: Resource allocation</p>
                                <p>🥉 Third Place: Recognition</p>
                            </div>
                        </div>

                        {/* Register Button Section */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovatorsArena;
