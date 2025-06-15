
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 tech-gradient opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-kovelor-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Let's discuss how our custom technology solutions can accelerate your growth 
            and streamline your operations. Get started with a free consultation.
          </p>

          <div className="flex justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-lg px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
              <p className="text-white/80">Get a response within 24 hours</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">No Commitment</h3>
              <p className="text-white/80">Free initial consultation and project estimation</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-white/80">Strategic technology recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
