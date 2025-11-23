import React from 'react';
import { Grid, GridItem } from "@/components/ui/grid";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { AI, MessageSquare, Rocket } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'AI Assistant',
    description: 'Get instant answers and intelligent support from our advanced AI.',
    icon: <AI className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Real-time Communication',
    description: 'Engage in seamless and responsive conversations in real-time.',
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Fast & Reliable',
    description: 'Experience lightning-fast responses and a dependable connection.',
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Personalized Experience',
    description: 'Tailor the AI to your specific needs and preferences.',
    icon: <AI className="h-6 w-6 text-primary" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto">
        <Typography variant="h2" className="text-center mb-8">
          Key Features
        </Typography>
        <Grid>
          {features.map((feature, index) => (
            <GridItem key={index} className="md:col-span-6 lg:col-span-3">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <div className="rounded-full p-3 bg-secondary">
                    {feature.icon}
                  </div>
                  <Typography variant="h3" className="text-center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-center text-muted-foreground">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesSection;