
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-readflow-blue/10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-readflow-lavender/20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-readflow-mint/15 filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Reading Made <span className="text-readflow-blue">Easier</span> for Everyone
            </h1>
            <p className="text-xl mb-8 dyslexic-text delayed-fade-in delay-200">
              ReadFlow Spark helps people with dyslexia read with greater focus and less frustration by highlighting words in sequence, improving comprehension and reducing eye strain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 delayed-fade-in delay-400">
              <Button className="bg-readflow-blue hover:bg-readflow-dark text-white text-lg py-6 px-8 animate-pulse-highlight">
                Try ReadFlow Spark
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Watch How It Works
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 delayed-fade-in delay-500">
              No sign up required. Works instantly on any text.
            </p>
          </div>
          
          <div className="mt-10 md:mt-0 relative delayed-fade-in delay-300">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-readflow-blue to-readflow-lavender rounded-xl blur opacity-30"></div>
            <div className="relative bg-white rounded-xl p-1 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Person reading with ease" 
                className="rounded-lg w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
