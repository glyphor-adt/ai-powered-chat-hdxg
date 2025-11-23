import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
              Unlock the Power of AI-Driven Conversations
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Experience seamless and intelligent interactions with our AI chat application.  Get instant answers, personalized support, and engage in meaningful dialogues.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center">
            {/* Replace with your AI chat app image or visual */}
            <img
              src="https://placehold.co/600x400/ffffff/000000?text=AI+Chat+Visual"
              alt="AI Chat Application"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;