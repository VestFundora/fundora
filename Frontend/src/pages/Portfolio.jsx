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

    // Handle responsive sidebar
    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stats = [
        { title: "Total Investment", value: "$2.4M", icon: FaWallet, change: "+14%" },
        { title: "Active Startups", value: "45", icon: FaUserCircle, change: "+5%" },
        { title: "Portfolio Value", value: "$3.2M", icon: FaStar, change: "+23%" },
        { title: "Success Rate", value: "89%", icon: FaList, change: "+7%" }
    ];

    const investmentData = [
        { name: 'Jan', amount: 4000 },
        { name: 'Feb', amount: 3000 },
        { name: 'Mar', amount: 5000 },
        { name: 'Apr', amount: 2780 },
        { name: 'May', amount: 7890 },
        { name: 'Jun', amount: 6390 },
        { name: 'Jul', amount: 8490 },
    ];

    const portfolioData = [
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 45 },
        { name: 'Mar', value: 42 },
        { name: 'Apr', value: 50 },
        { name: 'May', value: 58 },
        { name: 'Jun', value: 65 },
        { name: 'Jul', value: 72 },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <DashboardSidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Main Content */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
                {/* Header */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center gap-4 p-4">
                        <h1 className="ml-2 font-bold text-3xl text-">Investor Portfolio</h1>
                        <div className="flex-1">
                            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
                                <FaSearch className="text-gray-400 min-w-[20px]" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="ml-2 bg-transparent outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                <FaBell className="text-gray-600" />
                            </button>
                            <div className="w-8 h-8 bg-teal-950 rounded-full cursor-pointer"></div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-teal-950/10 rounded-lg">
                                        <stat.icon className="text-teal-950 text-xl" />
                                    </div>
                                    <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                                </div>
                                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Investment Overview</h3>
                            <div className="h-[300px] md:h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={investmentData}>
                                        <defs>
                                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#115e59" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#115e59" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="amount"
                                            stroke="#115e59"
                                            fillOpacity={1}
                                            fill="url(#colorAmount)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
                            <div className="h-[300px] md:h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={portfolioData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#115e59"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                            activeDot={{ r: 6 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Recent Activity</h3>
                            <button className="text-sm text-teal-950 hover:text-teal-800 cursor-pointer">View All</button>
                        </div>
                        <div className="space-y-4 overflow-x-auto">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center justify-between py-3 border-b hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <p className="font-medium">New Investment Made</p>
                                            <p className="text-sm text-gray-500">2 hours ago</p>
                                        </div>
                                    </div>
                                    <span className="text-teal-950 font-semibold">$50,000</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Portfolio;
