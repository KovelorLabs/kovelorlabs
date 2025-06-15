import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Code, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Invoice Processing Automation (PO to Invoice)',
      category: 'Business Automation',
      description: 'Automated end-to-end invoice processing system that streamlines purchase order matching, invoice validation, and approval workflows.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'OCR APIs', 'React'],
      results: [
        'Reduced invoice processing time by 85%',
        'Eliminated manual data entry errors',
        'Improved vendor payment cycles by 60%'
      ],
      image: 'bg-gradient-to-br from-kovelor-orange/20 to-tech-blue/20',
      icon: Zap,
      color: 'kovelor-orange'
    },
    {
      title: 'Accounts Payable Automation',
      category: 'Business Automation',
      description: 'Intelligent accounts payable system that automates vendor invoice processing, approval workflows, and payment scheduling.',
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'ML Models'],
      results: [
        'Automated 90% of invoice processing',
        'Reduced processing costs by 70%',
        'Improved cash flow visibility by 85%'
      ],
      image: 'bg-gradient-to-br from-kovelor-orange/20 to-tech-blue/20',
      icon: Brain,
      color: 'kovelor-orange'
    },
    {
      title: 'Kovai Farms Mobile App',
      category: 'Mobile Application',
      description: 'Comprehensive dairy products delivery platform with AI-powered features for order management, route optimization, and customer service.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AI Chatbot', 'Real-time Tracking'],
      results: [
        'Streamlined delivery operations by 60%',
        'Improved customer satisfaction by 200%',
        'Enabled business expansion to new territories'
      ],
      image: 'bg-gradient-to-br from-tech-blue/20 to-kovelor-orange/20',
      icon: Brain,
      color: 'tech-blue'
    },
    {
      title: 'Healthcare Workflow Automation',
      category: 'Business Automation',
      description: 'Automated patient scheduling, billing, and record management system for a multi-location healthcare provider.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Docker'],
      results: [
        'Reduced administrative tasks by 80%',
        'Improved patient satisfaction scores by 40%',
        'Saved $2M annually in operational costs'
      ],
      image: 'bg-gradient-to-br from-tech-blue/20 to-kovelor-orange/20',
      icon: Zap,
      color: 'tech-blue'
    },
    {
      title: 'Supply Chain Management System',
      category: 'Enterprise Solution',
      description: 'Comprehensive supply chain optimization platform for a Fortune 500 manufacturing company.',
      technologies: ['React', 'Java Spring', 'Oracle DB', 'Apache Kafka', 'Kubernetes'],
      results: [
        'Optimized inventory levels reducing costs by 30%',
        'Improved delivery times by 45%',
        'Enhanced visibility across 200+ suppliers'
      ],
      image: 'bg-gradient-to-br from-tech-blue/20 to-kovelor-orange/20',
      icon: Code,
      color: 'tech-blue'
    },
    {
      title: 'Healthcare Insurance Claims Processing Automation',
      category: 'Data & AI',
      description: 'AI-powered platform that automates insurance claims processing, fraud detection, and approval workflows for healthcare providers.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS SageMaker'],
      results: [
        'Reduced claims processing time by 80%',
        'Achieved 98% accuracy in fraud detection',
        'Improved claim approval rates by 65%'
      ],
      image: 'bg-gradient-to-br from-kovelor-orange/20 to-tech-blue/20',
      icon: Brain,
      color: 'kovelor-orange'
    }
  ];

  const stats = [
    { number: '25+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$15M+', label: 'Value Generated' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real-world projects where we've helped businesses transform their operations 
              through custom technology solutions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-kovelor-orange mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardHeader>
                      <div className={`h-48 ${project.image} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-16 w-16 text-${project.color}/60`} />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className={`text-${project.color} border-${project.color}/30`}>
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to="/contact">
                        <Button variant="outline" className={`w-full group-hover:bg-${project.color} group-hover:text-white group-hover:border-${project.color} transition-all duration-300`}>
                          Discuss Similar Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex gap-4">
                <Link to="/services/custom-applications">
                  <Button variant="outline" size="lg">
                    Custom Applications
                  </Button>
                </Link>
                <Link to="/services/business-automation">
                  <Button variant="outline" size="lg">
                    Business Automation
                  </Button>
                </Link>
                <Link to="/services/ai-integrations">
                  <Button variant="outline" size="lg">
                    AI Integrations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
