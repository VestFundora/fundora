import {useState} from 'react'

function Header(){
    const[menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return (
        /* Logo */
        <header className='sticky top-0 z-50 flex items-center justify-between bg-[#219184] p-4 shadow-md transition-all duration-300' >
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold text-white cursor-pointer transition-all  item-center duration-300 lg:pl-30 hover:scale-105'>
                    Fundora
                </h1>
            </div>

            {/* Center Links */}
            <div>
                <ul className='lg:flex hidden gap-12 text-white text-lg '>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Services"></a>Services</li>
                    <li><a href="#ContactUs"></a>Contact Us</li>
                    <li><a href="Updates"></a>Updates</li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
                <button onClick={toggleMenu}></button>
            </div>

                {/* Mobile Menu DropDown */}
                {menuOpen&&(
                    <ul className=' flex gap-12 text-white text-lg '>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Services"></a>Services</li>
                    <li><a href="#ContactUs"></a>Contact Us</li>
                    <li><a href="Updates"></a>Updates</li>
                </ul>
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