import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactCard from '@/components/ContactCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import SeoHead from "@/components/SeoHead";

const SERVICE_ID = 'service_zm589a1';
const TEMPLATE_ID = 'template_n5tppwh';
const PUBLIC_KEY = '6GPnqEZUfi1AKR-2I'; // This is the public key from EmailJS dashboard

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Kovelor Labs",
  "description": "Contact Kovelor Labs to discuss your technology project, custom software, automation, or AI needs. Email, call, or schedule a consultation.",
  "url": "https://kovelorlabs.com/contact",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7094711417",
    "contactType": "customer service",
    "email": "hello@kovelorlabs.com",
    "areaServed": "IN"
  }
};

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@kovelorlabs.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 7094711417',
      description: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Coimbatore, India',
      description: 'Available for in-person meetings'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 hours',
      description: 'We respond quickly to all inquiries'
    }
  ];

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // For Selects
  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // EmailJS template params
    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      company: form.company,
      phone: form.phone,
      project_type: form.projectType,
      budget: form.budget,
      message: form.message
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      toast({
        title: "Thank you!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Contact Kovelor Labs | Custom Software, Automation & AI Solutions"
        description="Contact Kovelor Labs for a free consultation or quote for your business needs. Email, phone, or schedule a meeting. Based in India, serving clients worldwide."
        keywords="Contact Kovelor Labs, Software Consulting, Automation Quote, AI Solutions India"
        url="https://kovelorlabs.com/contact"
        canonical="https://kovelorlabs.com/contact"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        {/* Visually hidden page heading for crawlability */}
        <Navigation />
        <main className="pt-16">
          <h1 className="sr-only">
            Contact Kovelor Labs – India's Software Consulting & Automation Experts
          </h1>
          
          {/* Hero Section */}
          <section className="py-16 md:py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Let's <span className="text-gradient">Build Something Great</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Ready to transform your business with custom technology solutions? 
                  Get in touch and let's discuss your project.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <ContactCard 
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    content={info.content}
                    description={info.description}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 md:py-20 bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Form */}
                <div className="order-2 lg:order-1">
                  <Card className="shadow-lg">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl md:text-3xl">Start Your Project</CardTitle>
                      <CardDescription className="text-base">
                        Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                              First Name *
                            </label>
                            <Input id="firstName" required value={form.firstName} onChange={handleChange} />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                              Last Name *
                            </label>
                            <Input id="lastName" required value={form.lastName} onChange={handleChange} />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input id="email" type="email" required value={form.email} onChange={handleChange} />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <Input id="company" value={form.company} onChange={handleChange} />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input id="phone" type="tel" value={form.phone} onChange={handleChange} />
                        </div>
                        
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                            Project Type *
                          </label>
                          <Select value={form.projectType} onValueChange={value => handleSelectChange('projectType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="custom-application">Custom Application</SelectItem>
                              <SelectItem value="business-automation">Business Automation</SelectItem>
                              <SelectItem value="ai-integration">AI Integration</SelectItem>
                              <SelectItem value="consulting">Technology Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-2">
                            Budget Range
                          </label>
                          <Select value={form.budget} onValueChange={value => handleSelectChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-25k">Under $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="over-250k">$250,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Project Description *
                          </label>
                          <Textarea 
                            id="message" 
                            rows={4} 
                            placeholder="Tell us about your project, challenges you're facing, and what you hope to achieve..."
                            required
                            value={form.message}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-kovelor-orange hover:bg-kovelor-orange/90 text-white" disabled={submitting}>
                          {submitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* What Happens Next */}
                <div className="order-1 lg:order-2">
                  <Card className="border-tech-blue/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-xl">
                        <MessageCircle className="h-5 w-5 text-tech-blue" />
                        <span>What Happens Next?</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-tech-blue text-sm font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Quick Response</h4>
                            <p className="text-muted-foreground text-sm">We'll respond within 24 hours with initial thoughts and next steps</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-tech-blue text-sm font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Discovery Call</h4>
                            <p className="text-muted-foreground text-sm">We'll schedule a call to dive deeper into your requirements and goals</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-tech-blue text-sm font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Detailed Proposal</h4>
                            <p className="text-muted-foreground text-sm">You'll receive a comprehensive project proposal with timeline and pricing</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
