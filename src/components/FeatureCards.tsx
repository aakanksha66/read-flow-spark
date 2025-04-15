
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Target, Palette, Gauge, PencilRuler, Accessibility } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm hover:scale-105">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="w-12 h-12 rounded-full bg-readflow-blue/10 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dyslexic-text">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureCards: React.FC = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Features Designed for Better Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6 text-readflow-blue" />}
              title="Focused Reading"
              description="Sequential word highlighting helps maintain focus and reduces distractions while reading."
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <FeatureCard 
              icon={<Target className="h-6 w-6 text-readflow-blue" />}
              title="Improved Tracking"
              description="Visual guidance helps your eyes follow along, eliminating the common issue of losing your place."
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <FeatureCard 
              icon={<Palette className="h-6 w-6 text-readflow-blue" />}
              title="Color Options"
              description="Customize highlight colors to find what works best for your specific visual processing needs."
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <FeatureCard 
              icon={<Gauge className="h-6 w-6 text-readflow-blue" />}
              title="Adjustable Speed"
              description="Set your reading pace from relaxed to rapid, adjusting as your comfort level improves."
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <FeatureCard 
              icon={<PencilRuler className="h-6 w-6 text-readflow-blue" />}
              title="Dyslexia-Friendly Font"
              description="Text displayed in fonts specifically designed to be easier to read for people with dyslexia."
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <FeatureCard 
              icon={<Accessibility className="h-6 w-6 text-readflow-blue" />}
              title="Accessibility First"
              description="Built from the ground up with accessibility as the core principle, not an afterthought."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
