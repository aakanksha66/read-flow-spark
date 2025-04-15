
import React from 'react';
import { Eye } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Eye className="h-6 w-6 text-readflow-blue" />
            <span className="font-lexend font-bold text-2xl tracking-wide">ReadFlow Spark</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-lg mb-3">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Customization</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Research</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Dyslexia Info</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-readflow-blue transition-colors duration-200">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} ReadFlow Spark. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Making reading accessible for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
