
import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, ArrowRight, CheckCircle, Bot, BarChart, Database, Workflow, MessageSquare, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIIntegrations = () => {
  const features = [
    'Chatbot Development',
    'Machine Learning Models',
    'Natural Language Processing',
    'Computer Vision Solutions',
    'Predictive Analytics',
    'Recommendation Systems',
    'AI-Powered Search',
    'Intelligent Document Processing'
  ];

  const technologies = ['OpenAI', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'Vector Databases'];

  return (
    <div className="min-h-screen bg-background">
      <NavigationWithDropdown />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-kovelor-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI <span className="text-gradient">Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of artificial intelligence to gain insights and competitive advantages.
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Intelligent Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Integrate cutting-edge AI technologies into your business operations to automate decisions, 
                  gain deeper insights, and create intelligent user experiences that set you apart.
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

              <div>
                <Card className="border-kovelor-orange/20 hover:border-kovelor-orange/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Brain className="h-24 w-24 text-kovelor-orange/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Use Cases */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">AI Use Cases for Your Business</h2>
                <p className="text-lg text-muted-foreground">
                  Explore how AI can transform different aspects of your business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: Bot, 
                    title: 'Customer Service', 
                    description: 'AI chatbots that provide 24/7 support and handle common inquiries automatically.' 
                  },
                  { 
                    icon: BarChart, 
                    title: 'Data Analysis', 
                    description: 'Machine learning models that uncover patterns and predict future trends in your data.' 
                  },
                  { 
                    icon: Workflow, 
                    title: 'Process Optimization', 
                    description: 'AI-driven insights to optimize workflows and improve operational efficiency.' 
                  }
                ].map((useCase, index) => {
                  const IconComponent = useCase.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-kovelor-orange" />
                        </div>
                        <CardTitle className="text-lg">{useCase.title}</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
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
              <h2 className="text-3xl font-bold mb-4">Success Story: Kovai Farms AI Revolution</h2>
              <p className="text-lg text-muted-foreground">
                Transforming dairy operations with intelligent chatbots and mobile delivery solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Card className="border-kovelor-orange/20 hover:border-kovelor-orange/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      <Brain className="h-24 w-24 text-kovelor-orange/20" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Kovai Farms</strong>, a progressive dairy company based in Coimbatore, faced significant operational 
                  challenges that were limiting their growth potential:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Overwhelming customer service calls during peak hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Inefficient delivery route planning causing delays</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Lack of real-time order tracking for customers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Manual subscription management leading to errors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-kovelor-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Limited expansion capabilities due to operational constraints</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our AI-Powered Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Kovelor Labs developed an intelligent ecosystem combining advanced chatbot technology with a 
                  sophisticated mobile application to revolutionize Kovai Farms' operations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Intelligent Customer Chatbot',
                    'AI-Powered Route Optimization',
                    'Mobile Delivery Application',
                    'Real-time Order Tracking',
                    'Smart Subscription Management',
                    'Predictive Analytics Dashboard',
                    'Natural Language Processing',
                    'Machine Learning Insights'
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
                    { icon: MessageSquare, text: '80% reduction in customer service calls' },
                    { icon: Smartphone, text: '50% faster delivery times with mobile app' },
                    { icon: TrendingUp, text: '200% increase in customer satisfaction scores' },
                    { icon: Bot, text: '24/7 automated customer support availability' },
                    { icon: BarChart, text: '90% improvement in delivery route efficiency' },
                    { icon: Database, text: 'Enhanced data-driven decision making capabilities' }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Integrate AI into Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's explore how artificial intelligence can solve your business challenges and unlock new opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                Start AI Journey
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

export default AIIntegrations;
