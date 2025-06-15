
import NavigationWithDropdown from '@/components/NavigationWithDropdown';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import SolutionsByStage from '@/components/SolutionsByStage';
import TechnologiesSection from '@/components/TechnologiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationWithDropdown />
      <main className="pt-16" role="main" aria-label="Kovelor Labs main content">
        {/* Main SEO-friendly Heading for Home Page (visually hidden, but crawlable and accessible) */}
        <section aria-label="Kovelor Labs Homepage" className="sr-only">
          <h1>
            Kovelor Labs: Custom Software Development, Business Automation &amp; AI Solutions for Startups and Enterprises in India and Worldwide
          </h1>
        </section>

        {/* Visual on-page H2 for UX and additional SEO */}
        <section aria-label="Digital Transformation Experts" className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground sr-only">
            Digital transformation partner for your business: custom applications, automations, and AI solutions from Kovelor Labs.
          </h2>
        </section>

        {/* Content Sections */}
        <HeroSection />
        <ServicesOverview />
        <SolutionsByStage />
        <TechnologiesSection />
        <TestimonialsSection />
        <FAQSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
