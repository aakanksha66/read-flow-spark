import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import FeatureCards from '@/components/FeatureCards';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-lexend">
      <Header />
      <main>
        <Hero />
        <DemoSection />
        <FeatureCards />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
