import heroImg from '../assets/Hero.jpg'

function Hero() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Hero Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={heroImg} 
                    alt="Financial services" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
                <h1 className="text-5xl font-bold mb-6 leading-tight max-w-3xl">
                    Empower Your Financial Future with Fundora
                </h1>
                <p className="text-xl max-w-2xl mb-8 text-gray-200">
                    Seamless solutions for investment, savings, and financial growth. Take control of your wealth journey today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-3 bg-[#219184] text-white font-medium rounded-md hover:bg-[#1a7268] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                        Get Started
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#219184] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                        Learn More
                    </button>
                </div>
                
                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold">10k+</h3>
                        <p className="text-gray-200">Happy Customers</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold">$50M+</h3>
                        <p className="text-gray-200">Assets Managed</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-3xl font-bold">99%</h3>
                        <p className="text-gray-200">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero