import { ArrowRight, Zap, Smartphone, Palette, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div className="w-full">
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">Personal Project Documentation</h1>
             <p className="text-xl text-gray-600 mb-3">
               Welcome to my technical project documentation hub. Explore comprehensive guides and 
               implementation details.
             </p>

             {/* Hero Image */}
             <div className="mb-4">
               <img 
                 src="/images/docs/Duplicate-bro.png" 
                 alt="Documentation interface illustration" 
                 className="h-80 mx-auto"
               />
             </div>

             {/* Quick Start Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                       <Link to="/docs/environment-setup" className="group">
                 <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                     <Zap className="h-6 w-6 text-blue-600" />
                   </div>
                   <h3 className="font-semibold text-gray-900 mb-2">Project Setup</h3>
                   <p className="text-sm text-gray-600">Get started with project setup and configuration</p>
                 </div>
               </Link>

                       <Link to="/docs/cli-installation" className="group">
                 <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                     <Smartphone className="h-6 w-6 text-green-600" />
                   </div>
                   <h3 className="font-semibold text-gray-900 mb-2">Installation Guide</h3>
                   <p className="text-sm text-gray-600">Install and configure project dependencies</p>
                 </div>
               </Link>

                       <Link to="/docs/packages-cdn" className="group">
                 <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                   <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                     <Palette className="h-6 w-6 text-purple-600" />
                   </div>
                   <h3 className="font-semibold text-gray-900 mb-2">API Reference</h3>
                   <p className="text-sm text-gray-600">Explore project APIs and integrations</p>
                 </div>
               </Link>

                       <Link to="/docs/next-steps" className="group">
                 <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                     <Target className="h-6 w-6 text-orange-600" />
                   </div>
                   <h3 className="font-semibold text-gray-900 mb-2">Deployment</h3>
                   <p className="text-sm text-gray-600">Deploy and run projects in production</p>
                 </div>
               </Link>
      </div>
    </div>
  );
};

export default Overview;
