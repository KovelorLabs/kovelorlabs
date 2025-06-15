
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Vedanth',
      role: 'CEO',
      company: 'Zorp',
      content: 'Kovelor Labs transformed our manual processes into a seamless automated workflow. The ROI was evident within the first month, and their team guided us through every step of the implementation.',
      rating: 5,
      avatar: 'V'
    },
    {
      name: 'Rakesh',
      role: 'MD',
      company: 'Rakon Infrastructure',
      content: 'The custom application they built for us has revolutionized how we manage our supply chain. Their attention to detail and understanding of our complex requirements was exceptional.',
      rating: 5,
      avatar: 'R'
    },
    {
      name: 'Anand',
      role: 'Founder',
      company: 'Xtrem.in',
      content: 'The AI integration project exceeded our expectations. Our customer service efficiency improved by 300%, and the intelligent insights have helped us make better strategic decisions.',
      rating: 5,
      avatar: 'A'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with Kovelor Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-kovelor-orange/50 relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-kovelor-orange" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-kovelor-orange text-kovelor-orange" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-kovelor-orange text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-kovelor-orange">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-kovelor-orange mb-2">25+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kovelor-orange mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kovelor-orange mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
