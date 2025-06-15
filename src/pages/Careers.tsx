
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Heart, Users, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with passionate and talented professionals"
    },
    {
      icon: Coffee,
      title: "Learning Culture",
      description: "Continuous learning and skill development opportunities"
    },
    {
      icon: Briefcase,
      title: "Challenging Projects",
      description: "Work on cutting-edge technology solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Amazing Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              in the world of technology and innovation.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-kovelor-orange/5 to-kovelor-orange/10 rounded-3xl p-12 border border-kovelor-orange/20">
              <div className="w-20 h-20 bg-kovelor-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-10 w-10 text-kovelor-orange" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                🚀 We're Growing Fast!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                While we don't have any open positions right now, we're expanding rapidly 
                and exciting opportunities are coming soon. Stay tuned!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                    Get Notified About Openings
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-kovelor-orange text-kovelor-orange hover:bg-kovelor-orange hover:text-white">
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-gradient">Kovelor Labs?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a company that values innovation, creativity, and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-kovelor-orange/30">
                    <CardHeader>
                      <div className="w-12 h-12 bg-kovelor-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-kovelor-orange" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact for Future Opportunities */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Shape the Future with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Even though we don't have current openings, we'd love to hear from talented individuals. 
              Drop us a message and we'll keep you in mind for future opportunities!
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white">
                Connect With Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
