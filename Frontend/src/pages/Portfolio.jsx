import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaBell, FaSearch, FaWallet, FaStar, FaUserCircle, FaList, FaCrown } from 'react-icons/fa';
import { MdDashboard, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const navigationItems = [
    { icon: FaHome, label: "Home", href: "/" },
    { icon: FaUserCircle, label: "Profile", href: "/dashboard/profile" },
    { icon: FaWallet, label: "Dashboard", href: "/dashboard" },
    { icon: FaStar, label: "Saved Startups", href: "/dashboard/saved-startups" },
    { icon: FaList, label: "Approach List", href: "/dashboard/approach-list" },
    { icon: FaCog, label: "Settings", href: "/dashboard/settings" },
];

const DashboardSidebar = ({ isOpen, onToggle }) => (
    <div className={`fixed left-0 top-0 h-full bg-teal-900 shadow-lg transition-all duration-300 z-10 ${isOpen ? 'w-72' : 'w-20'}`}>
        <div className="p-4 border-b border-teal-700 flex items-center justify-between">
            {isOpen && <h1 className="text-xl font-bold text-white">Fundora</h1>}
            <button onClick={onToggle} className="p-1 hover:bg-teal-700 rounded-lg transition-colors">
                {isOpen ? <MdChevronLeft size={20} className="text-white" /> : <MdChevronRight size={20} className="text-white" />}
            </button>
        </div>
        <nav className="py-4">
            <ul className="space-y-2">
                {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.href}
                            className="flex items-center px-5 py-4 mx-3 rounded-lg transition-colors text-white hover:bg-teal-700"
                        >
                            <item.icon size={24} className="flex-shrink-0 text-white" />
                            {isOpen && <span className="ml-4 text-base font-medium">{item.label}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-6 border-t border-teal-800 pt-4 px-5">
                <Link
                    to="/upgrade"
                    className="flex items-center text-yellow-400 hover:text-yellow-300"
                >
                    <FaCrown size={20} />
                    {isOpen && <span className="ml-4 text-base font-medium">Upgrade Plan</span>}
                </Link>
            </div>
        </nav>
    </div>
);

function Portfolio() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <DashboardSidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center gap-4 p-4">
                        <h1 className="ml-2 font-bold text-3xl text-black">Investor Portfolio</h1>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                        <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
                        <p className="text-gray-600">This is the portfolio page where investment details are displayed.</p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Portfolio;
