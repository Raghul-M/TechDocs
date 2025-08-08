import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Menu, Search, Github, X, BookOpen } from 'lucide-react';

export const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-white">
      {/* Header that spans across both sidebar and main content */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            {/* TechDocs branding in navbar */}
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-2 rounded-lg hover:bg-gray-100"
            >
              <div className="p-2 bg-primary rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">TechDocs</span>
              </div>
            </button>
            
            {/* Back to Home button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="ml-4 lg:ml-24"
            >
              ← Back to Home
            </Button>
          </div>

          {/* Search bar and hamburger menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
              
              {/* GitHub link - round black box with white cat */}
              <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                <Github className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Hamburger menu - transforms to X when open */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 
        transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `} style={{ top: '72px' }}>
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          style={{ top: '72px' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-0" style={{ marginTop: '72px' }}>
        {/* Content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
