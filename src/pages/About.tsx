import SeoHead from "@/components/SeoHead";
import NavigationWithDropdown from "@/components/NavigationWithDropdown";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Heart, Code, Brain, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Kovelor Labs",
  "description": "Kovelor Labs is a technology consultancy and software firm based in Coimbatore, India. Learn more about our mission, vision, and values.",
  "url": "https://kovelorlabs.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Kovelor Labs",
    "url": "https://kovelorlabs.com/",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
  }
};

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by the tangible impact our solutions have on your business operations and growth.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We partner with you every step of the way, from concept to deployment and beyond.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance across all our projects.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every line of code we write and every solution we deliver.'
    }
  ];

  const technologies = [
    { category: 'Frontend', icon: Code, techs: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Zap, techs: ['Node.js', 'Python', 'Java', 'PostgreSQL'] },
    { category: 'AI/ML', icon: Brain, techs: ['TensorFlow', 'OpenAI', 'LangChain', 'Vector DBs'] }
  ];

  return (
    <>
      <SeoHead
        title="About Kovelor Labs | Software Engineering & Automation Experts"
        description="Kovelor Labs is a software consultancy and development company in India, offering technology solutions for startups and enterprises. Meet our team, discover our values and expertise."
        keywords="About Kovelor Labs, About Us, Technology Consultancy, Software Engineers, India"
        url="https://kovelorlabs.com/about"
        canonical="https://kovelorlabs.com/about"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <NavigationWithDropdown />
        <main className="pt-16" role="main" aria-label="About Kovelor Labs main content">
          {/* Visually hidden accessible page heading for SEO */}
          <h1 className="sr-only">
            About Kovelor Labs – Team, Values, and Technology Mission
          </h1>
          {/* Hero Section */}
          <section className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-gradient">Kovelor Labs</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    We're a team of passionate technologists dedicated to transforming businesses 
                    through custom software solutions, intelligent automation, and cutting-edge AI integrations.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Founded with the vision of making advanced technology accessible to companies of all sizes, 
                    we bridge the gap between complex technical challenges and practical business solutions.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                      Work With Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-kovelor-orange/10 to-tech-blue/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-kovelor-orange mb-4">25+</div>
                    <div className="text-lg text-muted-foreground mb-6">Successful Projects Delivered</div>
                    <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                      <div className="bg-kovelor-orange/20 p-4 rounded-lg">
                        <Code className="h-6 w-6 text-kovelor-orange mx-auto" />
                      </div>
                      <div className="bg-tech-blue/20 p-4 rounded-lg">
                        <Zap className="h-6 w-6 text-tech-blue mx-auto" />
                      </div>
                      <div className="bg-kovelor-orange/20 p-4 rounded-lg">
                        <Brain className="h-6 w-6 text-kovelor-orange mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-kovelor-orange/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-kovelor-orange">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To empower businesses with custom technology solutions that drive growth, 
                      efficiency, and innovation. We believe every company, regardless of size, 
                      deserves access to cutting-edge technology that transforms their operations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-tech-blue/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-tech-blue">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the trusted technology partner that businesses turn to when they need 
                      solutions that work. We envision a future where every business process is 
                      optimized through intelligent automation and AI-driven insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-kovelor-orange" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
                <p className="text-xl text-muted-foreground">
                  We use cutting-edge technologies to build robust, scalable solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-kovelor-orange" />
                        </div>
                        <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {tech.techs.map((techName, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-kovelor-orange/10 text-kovelor-orange rounded-full text-sm"
                            >
                              {techName}
                            </span>
                          ))}
                        </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our team can help transform your business with custom technology solutions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
