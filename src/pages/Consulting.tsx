
import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowRight, CheckCircle, Target, Lightbulb, BarChart, Cog, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  const services = [
    'Technology Strategy & Planning',
    'Digital Transformation Roadmaps',
    'System Architecture Design',
    'Technology Stack Selection',
    'Security & Compliance Assessment',
    'Performance Optimization',
    'Cloud Migration Planning',
    'Technical Due Diligence'
  ];

  const approaches = [
    {
      icon: Target,
      title: 'Strategic Assessment',
      description: 'We analyze your current technology landscape and identify opportunities for improvement and growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Planning',
      description: 'Our team helps you leverage emerging technologies to gain competitive advantages in your market.'
    },
    {
      icon: BarChart,
      title: 'Performance Analysis',
      description: 'We evaluate your systems performance and provide actionable recommendations for optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationWithDropdown />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-kovelor-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="text-gradient">Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic technology guidance to help your business make informed decisions and achieve digital excellence.
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Expert Technology Guidance</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Navigate complex technology decisions with confidence. Our experienced consultants provide 
                  strategic insights and practical roadmaps to help your business thrive in the digital age.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div>
                <Card className="border-kovelor-orange/20 hover:border-kovelor-orange/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Users className="h-24 w-24 text-kovelor-orange/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Consulting Approach</h2>
              <p className="text-lg text-muted-foreground">
                We combine industry expertise with practical experience to deliver actionable technology strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-kovelor-orange" />
                      </div>
                      <CardTitle className="text-lg">{approach.title}</CardTitle>
                      <CardDescription>{approach.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Story: TechFlow Industries Digital Transformation</h2>
              <p className="text-lg text-muted-foreground">
                How strategic consulting helped a manufacturing company modernize their entire technology infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Card className="border-kovelor-orange/20 hover:border-kovelor-orange/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Users className="h-24 w-24 text-kovelor-orange/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  <strong>TechFlow Industries</strong>, a mid-sized manufacturing company, was struggling with outdated 
                  technology systems that were hindering their growth and operational efficiency:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Legacy systems causing frequent downtime and inefficiencies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Disconnected departments with no unified data strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Security vulnerabilities due to outdated infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Limited scalability options for future growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Strategic Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Kovelor Labs conducted a comprehensive technology assessment and developed a phased digital 
                  transformation roadmap that addressed immediate needs while planning for future growth:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Technology Infrastructure Audit',
                    'Cloud Migration Strategy',
                    'Security Framework Design',
                    'Data Integration Planning',
                    'Scalability Roadmap',
                    'Change Management Support',
                    'Vendor Selection Guidance',
                    'ROI Analysis & Metrics'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Results Delivered</h3>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, text: '40% reduction in operational costs' },
                    { icon: Cog, text: '99.9% system uptime achieved' },
                    { icon: Shield, text: 'Enhanced security posture and compliance' },
                    { icon: BarChart, text: '60% improvement in data accessibility' },
                    { icon: Target, text: 'Clear 3-year technology roadmap established' },
                    { icon: Lightbulb, text: 'Future-ready scalable architecture implemented' }
                  ].map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-kovelor-orange/5 rounded-lg">
                        <IconComponent className="h-5 w-5 text-kovelor-orange flex-shrink-0" />
                        <span className="text-muted-foreground">{result.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Technology Strategy?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our consulting expertise can help you make informed technology decisions and drive business growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                Schedule Consultation
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

export default Consulting;
