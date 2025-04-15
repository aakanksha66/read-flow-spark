
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <Card className="border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-readflow-blue mb-4 opacity-50" />
        <p className="mb-4 dyslexic-text">{quote}</p>
        <div>
          <strong className="block font-semibold text-lg">{name}</strong>
          <span className="text-gray-500">{title}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-readflow-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <TestimonialCard 
            quote="ReadFlow Spark has completely changed how I read online. I can actually finish articles now without getting frustrated or losing my place."
            name="Alex Morgan"
            title="Student with Dyslexia"
          />
          <TestimonialCard 
            quote="As a teacher, I've seen incredible improvements in my dyslexic students' reading comprehension when they use this tool. It's been a game-changer."
            name="Dr. Jamie Collins"
            title="Special Education Teacher"
          />
          <TestimonialCard 
            quote="The ability to customize the highlighting colors has been essential for me. Different colors work better depending on what I'm reading and my energy level."
            name="Sam Rodriguez"
            title="Web Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
