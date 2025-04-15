
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-readflow-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-readflow-blue/10 z-0"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Reading Experience?</h2>
                  <p className="text-lg text-gray-600 mb-6 dyslexic-text">
                    Join thousands of readers who have discovered the joy of comfortable, focused reading with ReadFlow Spark.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                    <Button className="bg-readflow-blue hover:bg-readflow-dark text-white">
                      Try It Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-readflow-blue to-readflow-lavender flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
                      <BookOpen className="h-20 w-20 text-readflow-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
