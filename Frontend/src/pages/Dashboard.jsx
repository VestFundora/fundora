import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, BarChart2, TrendingUp, Settings, LogOut,
  ChevronLeft, ChevronRight, ArrowUp, ArrowDown, TrendingUp as TrendingUpIcon, Plus,
  Home, User, Star, List
} from "lucide-react";

/* --------------------- Sidebar --------------------- */
const navigationItems = [
  { icon: Home, label: "Home", href: "/", active: true },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Briefcase, label: "Portfolio", href: "/dashboard/portfolio" },
  { icon: Star, label: "Saved Startups", href: "/dashboard/saved-startups" },
  { icon: List, label: "Approach List", href: "/dashboard/approach-list" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const DashboardSidebar = ({ isOpen, onToggle }) => (
  <div className={`fixed left-0 top-0 h-full bg-teal-900 shadow-lg transition-all duration-300 z-10 ${isOpen ? 'w-72' : 'w-20'}`}>
    <div className="p-4 border-b border-teal-700 flex items-center justify-between">
      {isOpen && <h1 className="text-xl font-bold text-white">Fundora</h1>}
      <button onClick={onToggle} className="p-1 hover:bg-teal-700 rounded-lg transition-colors">
        {isOpen ? <ChevronLeft size={20} className="text-white" /> : <ChevronRight size={20} className="text-white" />}
      </button>
    </div>
    <nav className="py-4">
      <ul className="space-y-2">
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              className={`flex items-center px-5 py-4 mx-3 rounded-lg transition-colors ${ 
                item.active
                  ? "bg-teal-700 text-white border-r-4 border-teal-600"
                  : "text-white hover:bg-teal-700"
              }`}
            >
              <item.icon size={24} className="flex-shrink-0 text-white" />
              {isOpen && <span className="ml-4 text-base font-medium">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

/* --------------------- Stats Cards --------------------- */
const statsData = [
  {
    title: "Total Value",
    amount: "$270,750",
    change: "+8.2% overall",
    changeType: "positive",
    icon: TrendingUpIcon,
  },
  {
    title: "Total Invested",
    amount: "$250,000",
    subtitle: "Across 4 investments",
    icon: Briefcase,
  },
  {
    title: "Unrealized Gains",
    amount: "+$20,750",
    subtitle: "Potential profit",
    changeType: "positive",
    icon: ArrowUp,
  },
  {
    title: "Best Performer",
    amount: "TechNova",
    subtitle: "+20% return",
    changeType: "positive",
    icon: TrendingUpIcon,
  },
];

const StatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {statsData.map((stat, index) => (
      <div
        key={index}
        className={`p-6 rounded-lg shadow-sm transition-shadow ${
          stat.changeType === "positive"
            ? "bg-teal-100 border border-teal-600 text-teal-700"
            : stat.changeType === "negative"
            ? "bg-red-100 border border-red-600 text-red-700"
            : "bg-gray-100 border border-gray-400 text-gray-700"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">{stat.title}</h3>
          {stat.icon && <stat.icon size={20} className="text-gray-400" />}
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{stat.amount}</p>
          {stat.change && (
            <p className="text-sm flex items-center gap-1">
              {stat.changeType === "positive" && <ArrowUp size={14} className="text-teal-700" />}
              {stat.changeType === "negative" && <ArrowDown size={14} className="text-red-700" />}
              {stat.change}
            </p>
          )}
          {stat.subtitle && (
            <p className="text-sm">{stat.subtitle}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

/* --------------------- Asset Allocation --------------------- */
const allocationData = [
  { name: "Equity Investments", percentage: 55, amount: "$137,500", color: "bg-black" },
  { name: "Real Estate (REITs)", percentage: 30, amount: "$75,000", color: "bg-gray-600" },
  { name: "Funds & ETFs", percentage: 15, amount: "$37,500", color: "bg-gray-400" },
];

const AssetAllocation = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-xl font-semibold text-black mb-2">Asset Allocation</h3>
    <p className="text-gray-600 mb-6">Distribution of your investment</p>
    <div className="space-y-6">
      {allocationData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{item.name}</span>
            <div className="text-right">
              <span className="text-sm font-semibold text-black">{item.percentage}%</span>
              <span className="text-sm text-gray-500 ml-2">({item.amount})</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* --------------------- Performance Metrics --------------------- */
const metricsData = [
  { label: "ROI", value: "+8.30%", type: "positive" },
  { label: "Volatility", value: "12.5%", type: "neutral" },
  { label: "Sharpe Ratio", value: "1.42", type: "neutral" },
  { label: "Risk Level", value: "Medium", type: "warning" },
];

const PerformanceMetrics = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-xl font-semibold text-black mb-6">Performance Metrics</h3>
    <div className="space-y-4">
      {metricsData.map((metric, index) => (
        <div key={index} className="flex justify-between items-center py-2">
          <span className="text-sm font-medium text-gray-700">{metric.label}</span>
          <span className={`text-sm font-semibold ${
            metric.type === "positive"
              ? "text-teal-600"
              : metric.type === "warning"
              ? "text-orange-600 bg-orange-100 px-2 py-1 rounded-full"
              : "text-gray-800"
          }`}>
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* --------------------- Portfolio Holdings --------------------- */
const holdingsData = [
  {
    name: "TechNova Startup", type: "Equity", invested: "$75,000", currentValue: "$90,000",
    change: "+20.0%", changeType: "positive", status: "Active"
  },
  {
    name: "Green Energy Fund", type: "Fund", invested: "$50,000", currentValue: "$52,500",
    change: "+5.0%", changeType: "positive", status: "Active"
  },
  {
    name: "Real Estate REIT", type: "REIT", invested: "$75,000", currentValue: "$75,000",
    change: "0.0%", changeType: "neutral", status: "Active"
  },
  {
    name: "Tech ETF ", type: "ETF", invested: "$50,000", currentValue: "$53,250",
    change: "+6.5%", changeType: "positive", status: "Active"
  },
];

const PortfolioHoldings = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-xl font-semibold text-black mb-6">Portfolio Holdings</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {holdingsData.map((holding, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all hover:bg-gray-100">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-black text-sm">{holding.name}</h4>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{holding.type}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between"><span className="text-xs text-gray-600">Invested:</span><span className="text-xs font-medium">{holding.invested}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-600">Current:</span><span className="text-xs font-medium">{holding.currentValue}</span></div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Change:</span>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  holding.changeType === "positive"
                    ? "text-teal-600"
                    : holding.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}>
                  {holding.changeType === "positive" && <ArrowUp size={12} />}
                  {holding.changeType === "negative" && <ArrowDown size={12} />}
                  {holding.change}
                </div>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">{holding.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* --------------------- Main Dashboard --------------------- */
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen bg-white flex w-full">
      <DashboardSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-20'} bg-white`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Investor Dashboard</h1>
              <div>
                
                <p className="text-gray-600">Manage and track your investment </p>
              </div>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus size={20} />
              Add Investment
            </button>
          </div>

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2"><AssetAllocation /></div>
            <div className="lg:col-span-1"><PerformanceMetrics /></div>
          </div>

          <div className="mt-8"><PortfolioHoldings /></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
