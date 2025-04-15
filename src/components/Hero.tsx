
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reading Made <span className="text-readflow-blue">Easier</span> for Everyone
            </h1>
            <p className="text-xl mb-8 dyslexic-text">
              ReadFlow Spark helps people with dyslexia read with greater focus and less frustration by highlighting words in sequence, improving comprehension and reducing eye strain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-readflow-blue hover:bg-readflow-dark text-white text-lg py-6 px-8">
                Try ReadFlow Spark
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Watch How It Works
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No sign up required. Works instantly on any text.
            </p>
          </div>
          
          <div className="mt-10 md:mt-0 relative">
            <div className="relative bg-white rounded-xl p-1 shadow-xl">
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
