import { Link } from "react-router-dom";
function Hero() {
    return (
        <>
            <div className="relative w-full bg-gradient-to-br from-teal-800 via-teal-300 to-teal-600 h-screen overflow-hidden">
                {/* Hero Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-start md:justify-center min-h-[600px] mt-4 md:h-full pt-16 md:pt-32 pb-16 md:pb-16 text-white px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl">
                        Empower Your Financial Future with Fundora
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
                        Seamless solutions for investment, savings, and financial growth. Take control of your wealth journey today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-md md:max-w-none">
                        <button className="px-8 py-3 bg-gradient-to-r from-teal-950 to-teal-900 text-white font-medium rounded-md hover:from-teal-900 hover:to-teal-800 transition-all duration-300 shadow-lg  transform hover:scale-105 cursor-pointer">
                            <Link to="/signup/startup">
                                Join as a Startup
                            </Link>
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-teal-950 transition-all duration-300 shadow-lg  hover:shadow-white/20 transform hover:scale-105 cursor-pointer">
                        <Link to="/signup/investor">
                            Join as an Investor
                            </Link>
                        </button>
                    </div>

            
                </div>
            </div>
        </>
    );
}

export default Hero