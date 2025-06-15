import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ArrowRight, CheckCircle, Globe, TrendingUp, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CustomApplications = () => {
  const features = [
    'Web Application Development',
    'Mobile App Development',
    'Enterprise Software Solutions',
    'API Development & Integration',
    'E-commerce Platforms',
    'Progressive Web Apps (PWAs)',
    'Custom CMS Development',
    'Third-party Integrations'
  ];

  const technologies = ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Application Development",
    "description": "Tailored software solutions designed to meet your unique business requirements and drive growth.",
    "provider": {
      "@type": "Organization",
      "name": "Kovelor Labs"
    },
    "serviceType": "Software Development",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <SeoHead
          title="Custom Application Development Services | Kovelor Labs"
          description="Build tailored software solutions with Kovelor Labs. Web apps, mobile development, enterprise solutions, and API integrations designed for your business needs."
          keywords="custom application development, web development, mobile app development, enterprise software, API development, software solutions"
          structuredData={structuredData}
        />
      </Helmet>
      
      <h1 className="sr-only">Custom Application Development Services by Kovelor Labs</h1>
      
      <NavigationWithDropdown />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Code className="h-8 w-8 text-kovelor-orange" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Custom <span className="text-gradient">Applications</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tailored software solutions designed to meet your unique business requirements and drive growth.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <Code className="h-20 w-20 text-kovelor-orange/60" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <Code className="h-20 w-20 text-kovelor-orange/60" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6">Build What Works for Your Business</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every business is unique, and your software should be too. We create custom applications 
                  that solve your specific challenges and grow with your business needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-kovelor-orange/10 text-kovelor-orange rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Success Story: Zorp Agricultural Solutions</h3>
              <p className="text-lg text-muted-foreground">
                How we transformed an agricultural innovation company's digital presence and operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <Code className="h-16 w-16 text-kovelor-orange/60" />
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4">The Challenge</h4>
                <p className="text-muted-foreground mb-6">
                  <strong>Zorp</strong>, an end-to-end agricultural solutions and innovation company based in the scenic Nilgiris, Tamil Nadu, 
                  faced significant challenges in their digital transformation journey:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Outdated legacy systems hindering operational efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Poor online visibility and search engine rankings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Disconnected supply chain management processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Lack of real-time data insights for decision making</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h4 className="text-2xl font-bold mb-4">Our Solution</h4>
                <p className="text-muted-foreground mb-6">
                  Kovelor Labs developed a comprehensive web application that revolutionized Zorp's operations 
                  while significantly enhancing their digital brand presence:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Integrated Supply Chain Platform',
                    'Real-time Inventory Management',
                    'SEO-Optimized Website',
                    'Customer Portal System',
                    'Analytics Dashboard',
                    'Mobile-Responsive Design',
                    'API Integration Hub',
                    'Brand Enhancement Features'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <Code className="h-16 w-16 text-kovelor-orange/60" />
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Results Delivered</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, text: '300% increase in organic search traffic' },
                  { icon: Globe, text: 'Enhanced brand visibility across search engines' },
                  { icon: Users, text: '60% improvement in user engagement' },
                  { icon: Search, text: 'Top 3 rankings for key agricultural keywords' },
                  { icon: Code, text: '40% reduction in operational processing time' },
                  { icon: CheckCircle, text: '99.9% system uptime and reliability' }
                ].map((result, index) => {
                  const IconComponent = result.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-kovelor-orange/5 rounded-lg">
                      <IconComponent className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{result.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Custom Solution?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a custom application that perfectly fits your business needs and drives growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomApplications;
