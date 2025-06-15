
import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 'future-business-automation-2024',
      title: "The Future of Business Automation in 2024: Transforming Industries Through Technology",
      excerpt: "Discover how cutting-edge business automation technologies are revolutionizing industries worldwide. From AI-powered workflows to intelligent process optimization, explore the trends that are reshaping the modern business landscape and creating unprecedented opportunities for growth and efficiency.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Automation"
    },
    {
      id: 'building-scalable-ai-solutions',
      title: "Building Scalable AI Solutions for Enterprises: A Complete Strategic Guide",
      excerpt: "Learn how forward-thinking enterprise companies are strategically leveraging artificial intelligence to drive exponential growth, improve operational efficiency, and gain competitive advantages. This comprehensive guide covers implementation strategies, ROI optimization, and real-world success stories from industry leaders.",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "AI & Machine Learning"
    },
    {
      id: 'custom-application-development-best-practices',
      title: "Custom Application Development Best Practices: Your Ultimate Guide to Success",
      excerpt: "A comprehensive, expert-driven guide to developing custom applications that not only meet your immediate business needs but also scale seamlessly with your organization's growth. Discover proven methodologies, architecture patterns, and development strategies used by successful companies worldwide.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Development"
    },
    {
      id: 'how-rpa-is-revolutionizing-invoice-processing',
      title: "How RPA is Revolutionizing Invoice Processing: Automating Financial Operations",
      excerpt: "Discover the transformative power of Robotic Process Automation in streamlining accounts payable workflows. Learn how leading companies are reducing manual errors by 90%, accelerating processing times, and freeing up valuable human resources for strategic initiatives through intelligent automation.",
      date: "December 1, 2024",
      readTime: "7 min read",
      category: "Automation"
    },
    {
      id: 'machine-learning-models-for-small-business-success',
      title: "Machine Learning Models for Small Business Success: Practical Implementation Guide",
      excerpt: "Explore practical, cost-effective applications of machine learning that small and medium businesses can implement to gain significant competitive advantages. From customer behavior prediction to inventory optimization, discover how AI can level the playing field for growing companies.",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "AI & Machine Learning"
    },
    {
      id: 'progressive-web-apps-the-future-of-mobile-development',
      title: "Progressive Web Apps: The Future of Mobile Development and User Experience",
      excerpt: "Why Progressive Web Apps (PWAs) are becoming the preferred choice for businesses looking to reach mobile users efficiently while reducing development costs. Explore the benefits, implementation strategies, and success stories of companies that have embraced this revolutionary technology.",
      date: "November 25, 2024",
      readTime: "8 min read",
      category: "Development"
    },
    {
      id: 'chatbot-integration-strategies-for-customer-service',
      title: "Chatbot Integration Strategies for Customer Service Excellence",
      excerpt: "A comprehensive step-by-step guide to implementing AI chatbots that genuinely improve customer satisfaction while reducing operational costs. Learn about natural language processing, conversation design, and integration strategies that create meaningful customer interactions.",
      date: "November 22, 2024",
      readTime: "11 min read",
      category: "AI & Machine Learning"
    },
    {
      id: 'digital-transformation-roadmap-for-manufacturing',
      title: "Digital Transformation Roadmap for Manufacturing: Industry 4.0 Implementation",
      excerpt: "How manufacturing companies can successfully modernize their operations with custom technology solutions. Explore IoT integration, predictive maintenance, supply chain optimization, and data-driven decision making strategies that are transforming the manufacturing landscape.",
      date: "November 18, 2024",
      readTime: "13 min read",
      category: "Industry Solutions"
    },
    {
      id: 'api-development-for-business-integration',
      title: "API Development for Seamless Business Integration: Modern Architecture Strategies",
      excerpt: "Master the art of creating robust, scalable APIs that connect your business systems seamlessly. Learn about RESTful design principles, security best practices, documentation strategies, and integration patterns that ensure long-term success and maintainability.",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Development"
    },
    {
      id: 'data-analytics-dashboard-design-principles',
      title: "Data Analytics Dashboard Design Principles: Creating Actionable Business Intelligence",
      excerpt: "Learn the essential principles of creating dashboards that provide genuine actionable insights and drive data-driven decision making. Explore visualization best practices, user experience design, and performance optimization techniques for maximum business impact.",
      date: "November 12, 2024",
      readTime: "8 min read",
      category: "Analytics"
    },
    {
      id: 'cloud-migration-strategies-for-legacy-systems',
      title: "Cloud Migration Strategies for Legacy Systems: Complete Modernization Guide",
      excerpt: "A comprehensive approach to modernizing legacy applications while maintaining business continuity. Discover proven migration strategies, risk mitigation techniques, and cost optimization methods that ensure successful cloud transformation without disrupting operations.",
      date: "November 8, 2024",
      readTime: "14 min read",
      category: "Cloud Solutions"
    },
    {
      id: 'e-commerce-platform-development-in-2024',
      title: "E-commerce Platform Development in 2024: Building High-Converting Online Stores",
      excerpt: "Modern approaches to building e-commerce solutions that not only scale effectively but also convert visitors into loyal customers. Explore the latest technologies, user experience trends, and conversion optimization strategies that drive online business success.",
      date: "November 5, 2024",
      readTime: "11 min read",
      category: "E-commerce"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationWithDropdown />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tech Insights & <span className="text-gradient">Industry Trends</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Stay ahead of the technology curve with expert insights, industry analysis, and practical guides. 
              Our comprehensive resource hub helps business leaders make informed decisions about digital transformation and technology adoption.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI and automation to custom development strategies, discover the latest trends that are shaping the future of business technology.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-kovelor-orange/30 h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="bg-kovelor-orange/10 text-kovelor-orange px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-kovelor-orange transition-colors duration-200 text-lg leading-tight mb-3">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-kovelor-orange hover:text-kovelor-orange hover:bg-kovelor-orange/10">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with the Latest Insights</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of business leaders and technology professionals who rely on our expert insights 
                to stay ahead of industry trends and make strategic technology decisions.
              </p>
              <Link to="/contact">
                <Button className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white px-8 py-3">
                  Subscribe to Updates
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
