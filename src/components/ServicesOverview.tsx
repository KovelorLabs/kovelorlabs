
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Applications',
      description: 'Tailored software solutions that perfectly fit your business needs and scale with your growth.',
      features: [
        'Web & Mobile Development',
        'Enterprise Solutions',
        'API Integration',
        'Cloud Architecture'
      ],
      color: 'kovelor-orange',
      link: '/services/custom-applications'
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'Streamline operations and eliminate repetitive tasks with intelligent automation solutions.',
      features: [
        'Workflow Optimization',
        'Process Digitization',
        'System Integration',
        'Data Migration'
      ],
      color: 'kovelor-orange',
      link: '/services/business-automation'
    },
    {
      icon: Brain,
      title: 'AI Integrations',
      description: 'Harness the power of artificial intelligence to gain insights and competitive advantages.',
      features: [
        'Machine Learning',
        'Chatbot Development',
        'Predictive Analytics',
        'Computer Vision'
      ],
      color: 'kovelor-orange',
      link: '/services/ai-integrations'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            Our <span className="text-gradient">Technology Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            We specialize in three core areas that drive business transformation. 
            Each solution is designed to deliver measurable results and lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-${service.color}/50`}>
                <CardHeader className="p-0">
                  <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-52 bg-muted rounded-t-lg">
                    <Icon className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-${service.color}`} />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <CardTitle className="text-base sm:text-lg md:text-xl mb-2 text-center lg:text-left">{service.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base text-muted-foreground text-center lg:text-left">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm md:text-base text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full mr-2 sm:mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button className="w-full bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-xs sm:text-sm md:text-base py-2 sm:py-2.5">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
