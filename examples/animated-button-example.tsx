import React from 'react';
import { AnimatedButton } from '@/components/animated-button';

const AnimatedButtonExample = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-8">NewUI Animated Button Examples</h1>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <AnimatedButton>Default</AnimatedButton>
        <AnimatedButton variant="primary">Primary</AnimatedButton>
        <AnimatedButton variant="secondary">Secondary</AnimatedButton>
        <AnimatedButton variant="ghost">Ghost</AnimatedButton>
        <AnimatedButton variant="outline">Outline</AnimatedButton>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <AnimatedButton size="sm">Small</AnimatedButton>
        <AnimatedButton size="default">Default</AnimatedButton>
        <AnimatedButton size="lg">Large</AnimatedButton>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <AnimatedButton disabled>Disabled</AnimatedButton>
        <AnimatedButton animated={false}>No Animation</AnimatedButton>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <AnimatedButton variant="primary" className="bg-gradient-to-r from-cyan-500 to-blue-500">
          Custom Gradient
        </AnimatedButton>
        <AnimatedButton variant="outline" size="lg">
          Custom Outline
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AnimatedButtonExample;