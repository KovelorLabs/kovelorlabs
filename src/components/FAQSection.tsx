
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of projects do you specialize in?",
      answer: "We specialize in custom web and mobile applications, business process automation, AI integrations, and enterprise software solutions. Our expertise spans across various industries including healthcare, finance, e-commerce, and manufacturing."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple applications can be delivered in 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We also provide 24/7 support for critical business applications."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, React Native, PostgreSQL, MongoDB, AWS, and various AI/ML frameworks. We choose the best technology stack based on your specific requirements and long-term goals."
    },
    {
      question: "How do you ensure project security and data protection?",
      answer: "Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with regulations like GDPR. All our development follows secure coding practices."
    },
    {
      question: "Can you help modernize our existing legacy systems?",
      answer: "Absolutely! We have extensive experience in legacy system modernization. We can help migrate your existing systems to modern platforms, improve performance, enhance security, and integrate with new technologies while ensuring minimal disruption to your business operations."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements during our free consultation."
    },
    {
      question: "Do you work with startups or only enterprises?",
      answer: "We work with both startups and enterprises. For startups, we focus on rapid MVP development and cost-effective solutions. For enterprises, we provide comprehensive solutions including legacy modernization and large-scale automation projects."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are some of the most common questions we receive.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
