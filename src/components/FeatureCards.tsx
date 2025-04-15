
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Target, Palette, Gauge, PencilRuler, Accessibility } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${delay}ms` }}>
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
    </div>
  );
};

const FeatureCards: React.FC = () => {
  return (
    <section id="features" className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-readflow-mint/30 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-readflow-lavender/20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">Features Designed for Better Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <FeatureCard 
            icon={<Sparkles className="h-6 w-6 text-readflow-blue" />}
            title="Focused Reading"
            description="Sequential word highlighting helps maintain focus and reduces distractions while reading."
            delay={100}
          />
          <FeatureCard 
            icon={<Target className="h-6 w-6 text-readflow-blue" />}
            title="Improved Tracking"
            description="Visual guidance helps your eyes follow along, eliminating the common issue of losing your place."
            delay={200}
          />
          <FeatureCard 
            icon={<Palette className="h-6 w-6 text-readflow-blue" />}
            title="Color Options"
            description="Customize highlight colors to find what works best for your specific visual processing needs."
            delay={300}
          />
          <FeatureCard 
            icon={<Gauge className="h-6 w-6 text-readflow-blue" />}
            title="Adjustable Speed"
            description="Set your reading pace from relaxed to rapid, adjusting as your comfort level improves."
            delay={400}
          />
          <FeatureCard 
            icon={<PencilRuler className="h-6 w-6 text-readflow-blue" />}
            title="Dyslexia-Friendly Font"
            description="Text displayed in fonts specifically designed to be easier to read for people with dyslexia."
            delay={500}
          />
          <FeatureCard 
            icon={<Accessibility className="h-6 w-6 text-readflow-blue" />}
            title="Accessibility First"
            description="Built from the ground up with accessibility as the core principle, not an afterthought."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
