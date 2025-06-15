
import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ArrowRight, CheckCircle, Workflow, BarChart, Database, Bot, Clock, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessAutomation = () => {
  const features = [
    'Workflow Automation',
    'Process Digitization',
    'System Integration',
    'Data Migration',
    'Business Intelligence Dashboards',
    'Reporting Automation',
    'Document Management Systems',
    'Legacy System Modernization'
  ];

  const technologies = ['Zapier', 'Microsoft Power Automate', 'Python', 'REST APIs', 'Webhooks', 'ETL Pipelines'];

  return (
    <div className="min-h-screen bg-background">
      <NavigationWithDropdown />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-tech-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-tech-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business <span className="text-gradient">Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline operations and eliminate repetitive tasks with intelligent automation solutions.
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Automate Your Success</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transform manual processes into automated workflows that save time, reduce errors, 
                  and allow your team to focus on high-value activities that drive business growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-tech-blue flex-shrink-0" />
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
                        className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div>
                <Card className="border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Zap className="h-24 w-24 text-tech-blue/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Automate Your Business?</h2>
                <p className="text-lg text-muted-foreground">
                  Discover the transformative benefits of business automation for your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: Workflow, 
                    title: 'Increased Efficiency', 
                    description: 'Reduce manual work by up to 80% and complete tasks faster than ever before.' 
                  },
                  { 
                    icon: BarChart, 
                    title: 'Better Accuracy', 
                    description: 'Eliminate human errors and ensure consistent, reliable results every time.' 
                  },
                  { 
                    icon: Bot, 
                    title: 'Cost Savings', 
                    description: 'Lower operational costs while increasing productivity and output quality.' 
                  }
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-tech-blue" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        <CardDescription>{benefit.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Story: Vijay Tapes Invoice Automation</h2>
              <p className="text-lg text-muted-foreground">
                Transforming manual processes for a leading textile elastics manufacturer
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Card className="border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Zap className="h-24 w-24 text-tech-blue/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Vijay Tapes</strong>, a large textile elastics manufacturer, was struggling with overwhelming manual processes 
                  that were hampering their growth and operational efficiency:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Processing nearly 1,000 purchase orders manually every month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Significant delays in invoice processing and approval workflows</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">High error rates due to manual data entry and verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Excessive operational effort consuming valuable staff time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Lack of real-time visibility into processing status</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Kovelor Labs built a custom invoice automation solution seamlessly integrated with their existing ERP system, 
                  transforming their entire workflow:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Custom ERP Integration',
                    'Automated PO Processing',
                    'Intelligent Invoice Matching',
                    'Workflow Orchestration',
                    'Real-time Status Tracking',
                    'Exception Handling System',
                    'Approval Workflows',
                    'Audit Trail Management'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-tech-blue flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Results Delivered</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: '70% reduction in invoice processing time' },
                    { icon: Target, text: '90% fewer manual errors' },
                    { icon: Zap, text: '3x faster turnaround from PO to invoice' },
                    { icon: Users, text: 'Freed up staff time for higher-value work' },
                    { icon: BarChart, text: 'Improved cash flow visibility by 85%' },
                    { icon: Workflow, text: 'Enhanced supplier relationship management' }
                  ].map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-tech-blue/5 rounded-lg">
                        <IconComponent className="h-5 w-5 text-tech-blue flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's identify the processes that can be automated to maximize your efficiency and growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                Start Automation Journey
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

export default BusinessAutomation;
