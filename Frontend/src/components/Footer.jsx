import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-teal-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Fundora</h2>
                        <p className="text-gray-300 mb-4">
                            Connecting startups with investors to build the future together.
                            Our platform makes fundraising and investment streamlined and transparent.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-white hover:text-teal-900 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-900 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-900 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-900 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/updates" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Updates
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources/startup-guide" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Startup Guide
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources/investor-guide" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Investor Guide
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources/tutorials" className="text-gray-300 hover:text-white transition-colors hover:underline">
                                    Tutorials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MdLocationOn className="text-teal-900 mr-3 mt-1" size={20} />
                                <span className="text-gray-300">
                                   Manipal University,<br />
                                    Jaipur, Rajasthan, India
                                </span>
                            </li>
                            <li className="flex items-center">
                                <MdPhone className="text-teal-900 mr-3" size={20} />
                                <span className="text-gray-300">+9555 1234567</span>
                            </li>
                            <li className="flex items-center">
                                <MdEmail className="text-teal-900 mr-3" size={20} />
                                <span className="text-gray-300">info@fundora.com</span>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Divider */}
                <div className="border-t border-gray-700 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">&copy; {currentYear} Fundora. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer