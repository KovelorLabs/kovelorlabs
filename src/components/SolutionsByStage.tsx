
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsByStage = () => {
  const solutions = [
    {
      icon: Rocket,
      title: 'For Startups',
      subtitle: 'Launch Fast, Scale Smart',
      description: 'Get your innovative ideas to market quickly with cost-effective, scalable solutions.',
      features: [
        'Rapid prototyping and MVP development',
        'Cost-effective automation solutions',
        'Scalable architecture planning',
        'Growth-stage technology roadmaps'
      ],
      color: 'kovelor-orange',
      bgGradient: 'from-kovelor-orange/5 to-kovelor-orange/10'
    },
    {
      icon: Building,
      title: 'For Enterprises',
      subtitle: 'Transform and Optimize',
      description: 'Modernize your operations with enterprise-grade solutions and advanced automation.',
      features: [
        'Legacy system modernization',
        'Enterprise-grade security implementations',
        'Large-scale automation projects',
        'Compliance and regulatory solutions'
      ],
      color: 'kovelor-orange',
      bgGradient: 'from-kovelor-orange/5 to-kovelor-orange/10'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions by <span className="text-gradient">Company Stage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're an innovative startup or an established enterprise, 
            we have the right technology solutions to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className={`group relative overflow-hidden bg-gradient-to-br ${solution.bgGradient} border-border/50 hover:border-kovelor-orange/50 transition-all duration-300 hover:shadow-2xl`}>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-kovelor-orange" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <p className="text-kovelor-orange font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-kovelor-orange mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className="w-full bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <IconComponent className="w-full h-full" />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Not sure which approach is right for your company?
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
              Schedule a Strategic Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsByStage;
