
import React from 'react';
import ReadFlowDemo from './ReadFlowDemo';

const DemoSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-readflow-cream opacity-40 filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-readflow-blue/20 filter blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience ReadFlow Spark</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dyslexic-text">
            Try our interactive demo below. See how sequential word highlighting 
            helps guide your eyes through text, making reading smoother and more comfortable.
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "200ms" }}>
          <ReadFlowDemo />
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "400ms" }}>
          <p className="text-lg font-medium dyslexic-text">
            This is just a small sample of what ReadFlow Spark can do. <br />
            The full version works with any text you want to read.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
