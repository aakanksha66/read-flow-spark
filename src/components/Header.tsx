
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Eye } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Eye className="h-6 w-6 text-readflow-blue" />
          <span className="font-lexend font-bold text-2xl tracking-wide">ReadFlow Spark</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-readflow-blue transition-colors duration-200 font-medium">Features</a>
          <a href="#how-it-works" className="hover:text-readflow-blue transition-colors duration-200 font-medium">How It Works</a>
          <a href="#testimonials" className="hover:text-readflow-blue transition-colors duration-200 font-medium">Testimonials</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex">
            <GraduationCap className="mr-2 h-4 w-4" />
            Learn More
          </Button>
          <Button className="bg-readflow-blue hover:bg-readflow-dark text-white">
            <BookOpen className="mr-2 h-4 w-4" />
            Try It Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
