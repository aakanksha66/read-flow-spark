
import React from 'react';
import ReadFlowDemo from './ReadFlowDemo';

const DemoSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience ReadFlow Spark</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dyslexic-text">
            Try our interactive demo below. See how sequential word highlighting 
            helps guide your eyes through text, making reading smoother and more comfortable.
          </p>
        </div>
        
        <ReadFlowDemo />
        
        <div className="mt-16 text-center">
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
