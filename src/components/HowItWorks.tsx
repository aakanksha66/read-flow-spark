
import React from 'react';
import { Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-readflow-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How ReadFlow Spark Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-readflow-blue text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
            <h3 className="text-2xl font-semibold mb-4">Paste Any Text</h3>
            <p className="dyslexic-text">
              Simply paste the text you want to read into ReadFlow Spark. Works with articles, books, emails, or any digital text.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-readflow-blue text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
            <h3 className="text-2xl font-semibold mb-4">Adjust Your Settings</h3>
            <p className="dyslexic-text">
              Choose your preferred reading speed, highlighting color, and font size to create your perfect reading environment.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-readflow-blue text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
            <h3 className="text-2xl font-semibold mb-4">Start Reading</h3>
            <p className="dyslexic-text">
              Press play and follow along as ReadFlow Spark guides your eyes through the text, one word at a time, improving focus and comprehension.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Why It's Effective</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Reduces the visual crowding effect that makes reading difficult</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Helps maintain place while reading, reducing frustration</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Increases focus and attention on individual words</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Adaptable to individual reading needs and preferences</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Built with dyslexia-friendly typography and spacing</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 rounded-full bg-readflow-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-readflow-blue" />
              </div>
              <p className="dyslexic-text">Helps develop reading confidence and independence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
