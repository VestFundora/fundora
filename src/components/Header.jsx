import { useState } from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        /* Logo */
        <header className='sticky top-0 z-50 flex items-center justify-between bg-[#219184] p-4 shadow-md transition-all duration-300' >
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold text-white cursor-pointer transition-all duration-300 lg:pl-30 hover:scale-105'>
                    Fundora
                </h1>
            </div>

            {/* Desktop Navigation*/}
            <div>
                <ul className='hidden lg:flex gap-12 text-white text-lg'> 
                    <li>
                        <Link to="/" className='transition-all duration-300  hover:bg-gray-700 p-3 rounded-md  hover:scale-105 inline-block'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className='transition-all duration-300  hover:bg-gray-700 p-3 rounded-md  hover:scale-105 inline-block'>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className='transition-all duration-300  hover:bg-gray-700 p-3 rounded-md  hover:scale-105 inline-block'>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/updates" className='transition-all duration-300 hover:bg-gray-700 p-3 rounded-md hover:scale-105 inline-block'>
                            Updates
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
                <button onClick={toggleMenu} className='focus:outline-none transition-all duration-300 cursor-pointer text-white relative w-6 h-4'>
                    <span className={`absolute h-1 w-8 bg-white rounded-lg transform transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-3'}`}></span>
                    
                    <span className={`absolute h-1 w-8 bg-white rounded-lg transform transition-all duration-500 ${menuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`}></span>
                    
                    <span className={`absolute h-1 w-8 bg-white rounded-lg transform transition-all duration-500 ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-3'}`}></span>
                </button>
            </div>
            {/* Mobile Menu DropDown */}
            {menuOpen && (
                <div className='lg:hidden absolute top-16 left-0 right-0 bg-[#219184] shadow-md z-50'>
                    <ul className='flex flex-col p-4 text-center text-white text-lg'>
                        <li className='py-2 border-b border-white/10'>
                            <Link to="/" className='block w-full py-2 hover:bg-white/10 rounded transition-all duration-300'>
                                Home
                            </Link>
                        </li>
                        <li className='py-2 border-b border-white/10'>
                            <Link to="/services" className='block w-full py-2 hover:bg-white/10 rounded transition-all duration-300'>
                                Services
                            </Link>
                        </li>
                        <li className='py-2 border-b border-white/10'>
                            <Link to="/contact" className='block w-full py-2 hover:bg-white/10 rounded transition-all duration-300'>
                                Contact Us
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/updates" className='block w-full py-2 hover:bg-white/10 rounded transition-all duration-300'>
                                Updates
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Login/Sign Up*/}
            <div className='flex lg:pr-30 gap-4'>
                <button className='px-4 py-2 text-sm font-medium text-[#219184] bg-white rounded-md transition-all duration-300 hover:bg-opacity-90 cursor-pointer hover:shadow-lg hover:scale-105'>
                    Login
                </button>
                <button className='px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#219184] hover:shadow-lg'>
                    Sign Up
                </button>
            </div>
        </header>
    )
}

export default Header