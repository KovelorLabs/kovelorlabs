import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 tech-gradient opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-kovelor-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-tech-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Transform Your Business With{' '}
            <span className="text-gradient">Custom Technology</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-4xl mx-auto px-2">
            From concept to deployment, we build what works. Expert development in custom applications, 
            business automation, and AI integrations for companies ready to scale.
          </p>

          <div className="flex justify-center items-center mb-8 md:mb-12 px-2">
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>

          {/* Service highlights section removed as per user request */}
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
