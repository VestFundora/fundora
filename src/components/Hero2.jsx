import { FaSearch, FaUsers, FaArrowRight, FaRocket, FaChartLine } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { BsGraphUp, BsShieldCheck } from 'react-icons/bs'

function Hero2() {
    return (
        <>
            {/* Features Section with Enhanced Design */}
            <div className="py-20 bg-gray-50 text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
                        <div className="w-16 h-1 bg-[#219184] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600">
                            Our platform provides everything you need to connect startups with investors and facilitate growth opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-[#219184]">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[#219184]/10 rounded-full flex items-center justify-center">
                                    <FaSearch className="text-[#219184] text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Smart Search</h3>
                            <p className="text-gray-600 text-center">Find the perfect investors that align with your startup's vision and goals</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-[#219184]">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[#219184]/10 rounded-full flex items-center justify-center">
                                    <FaUsers className="text-[#219184] text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Startup Networking</h3>
                            <p className="text-gray-600 text-center">Connect with innovative startups and explore exciting investment opportunities</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-[#219184]">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[#219184]/10 rounded-full flex items-center justify-center">
                                    <FaRegMessage className="text-[#219184] text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Secure Messaging</h3>
                            <p className="text-gray-600 text-center">Communicate directly with potential partners through our encrypted platform</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-[#219184]">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[#219184]/10 rounded-full flex items-center justify-center">
                                    <BsGraphUp className="text-[#219184] text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Performance Analytics</h3>
                            <p className="text-gray-600 text-center">Track investments and monitor key metrics with powerful analytics tools</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get Started Section with Enhanced Design */}
            <div className="bg-gradient-to-r from-[#219184] to-[#1a7268] text-white py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col items-center justify-center text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
                        <div className="w-24 h-1 bg-white mb-8"></div>
                        <p className="text-xl mb-6 max-w-2xl">
                            Join thousands of founders and investors already using our platform to connect, communicate, and drive business growth.
                        </p>
                    </div>

                    {/* Process Timeline */}
                    <div className="relative mb-20">
                        {/* Timeline Connection */}
                        <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2 z-0"></div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                            <div className="relative bg-white/10 backdrop-blur-sm p-6 pt-8 rounded-xl z-10">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#219184] rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white/20">
                                    <FaRocket className="text-white text-2xl" />
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-xl font-bold mb-3 text-center">Create Your Profile</h3>
                                    <p className="text-white/80">Sign up and build your comprehensive profile to showcase your business or investment preferences</p>
                                </div>
                            </div>
                            
                            <div className="relative bg-white/10 backdrop-blur-sm p-6 pt-8 rounded-xl z-10">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#219184] rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white/20">
                                    <BsShieldCheck className="text-white text-2xl" />
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-xl font-bold mb-3 text-center">Verify Credentials</h3>
                                    <p className="text-white/80">Complete verification process to build trust and credibility with potential partners</p>
                                </div>
                            </div>
                            
                            <div className="relative bg-white/10 backdrop-blur-sm p-6 pt-8 rounded-xl z-10">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#219184] rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white/20">
                                    <FaChartLine className="text-white text-2xl" />
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-xl font-bold mb-3 text-center">Start Growing</h3>
                                    <p className="text-white/80">Connect with partners, secure funding, and track your business growth journey</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                        <button className="px-8 py-5 bg-white text-[#219184] font-bold rounded-md transition-all duration-300 hover:bg-gray-100 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg group">
                            <span>Get Started Today</span>
                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button className="px-8 py-5 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                            <span>Watch Demo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero2