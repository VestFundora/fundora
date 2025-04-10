import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Briefcase,
  User,
  Bookmark,
  Send,
  Settings,
  Crown,
  Eye,
  TrendingUp,
  Bell,
  HelpCircle,
  MessageSquare,
  Menu,
  X,
  Search,
  ArrowUpRight
} from 'lucide-react';


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-50 overflow-hidden'>
      {/* Navbar */}
      <nav className='sticky top-0 z-50 flex justify-between items-center px-4 lg:px-6 py-4 bg-teal-900 shadow-sm'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='lg:hidden text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-md p-1'
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          >
            {sidebarOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
          <Link to="/">
                            <h2 className="text-xl text-white font-bold cursor-pointer hover:text-teal-400 transition-colors">
                                Fundora
                            </h2>
                        </Link>
        </div>
        <ul className='flex items-center gap-2 md:gap-4'>
          <li className='hidden md:block'>
            <button className='text-white hover:text-gray-200 focus:outline-none p-1' aria-label='Search'>
              <Search className='h-6 w-6' />
            </button>
          </li>
          <li className='hidden md:block'>
            <button className='text-white hover:text-gray-200 focus:outline-none p-1' aria-label='Messages'>
              <MessageSquare className='h-6 w-6' />
            </button>
          </li>
          <li>
            <button className='text-white hover:text-gray-200 focus:outline-none p-1' aria-label='Notifications'>
              <Bell className='h-6 w-6' />
            </button>
          </li>
          <li className='hidden md:block'>
            <button className='text-white hover:text-gray-200 focus:outline-none p-1' aria-label='Help'>
              <HelpCircle className='h-6 w-6' />
            </button>
          </li>
        </ul>
      </nav>

      <div className='flex flex-1 relative'>
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 w-64 bg-white border-r border-gray-200 pt-5 pb-4 z-40 h-[calc(100vh-4rem)]`}
        >
          <div className='flex flex-col h-full overflow-y-auto'>
            <nav className='flex-1 px-4 space-y-8'>
              <div className='space-y-8'>
                {[
                  { icon: <Home className="h-5 w-5" />, label: 'Home', path: '/home' },
                  { icon: <Briefcase className="h-5 w-5" />, label: 'Portfolio', path: '/portfolio' },
                  { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/profile' },
                  { icon: <Bookmark className="h-5 w-5" />, label: 'Saved Startups', path: '/saved' },
                  { icon: <Send className="h-5 w-5" />, label: 'Approach List', path: '/approach' },
                  { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '/settings' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className='flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
                    onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className='pt-4 border-t border-gray-200'>
                <Link
                  to='/upgrade'
                  className='flex items-center space-x-3 px-3 py-2 rounded-lg text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
                >
                  <Crown className="h-5 w-5" />
                  <span>Upgrade Plan</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden z-30"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <main className='flex-1 p-4 lg:p-8 overflow-y-auto'>
          <div className='mb-6 lg:mb-8'>
            <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>Dashboard Overview</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-max'>
            <div className='bg-white rounded-xl shadow-sm p-4 lg:p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-center mb-4'>
                <Eye className='text-purple-500 h-6 w-6 lg:h-8 lg:w-8' />
                <div className='flex items-center text-green-600'>
                  <ArrowUpRight className='h-4 w-4 mr-1' />
                  <span>75%</span>
                </div>
              </div>
              <p className='text-gray-500 text-xs lg:text-sm'>Profile Viewers</p>
              <p className='text-xl lg:text-2xl font-bold text-gray-900 mt-1'>23,423</p>
            </div>

            <div className='bg-white rounded-xl shadow-sm p-4 lg:p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-center mb-4'>
                <TrendingUp className='text-blue-500 h-6 w-6 lg:h-8 lg:w-8' />
                <div className='flex items-center text-green-600'>
                  <ArrowUpRight className='h-4 w-4 mr-1' />
                  <span>75%</span>
                </div>
              </div>
              <p className='text-gray-500 text-xs lg:text-sm'>Search Appearances</p>
              <p className='text-xl lg:text-2xl font-bold text-gray-900 mt-1'>23,423</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
