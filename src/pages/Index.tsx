
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import CategorySlider from '@/components/CategorySlider';
import FeaturedProducts from '@/components/FeaturedProducts';
import OfferZone from '@/components/OfferZone';
import WhyShopWithUs from '@/components/WhyShopWithUs';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <HeroSlider />
        </section>

        {/* Categories Section */}
        <CategorySlider />

        {/* Featured Products */}
        <section className="container mx-auto px-4">
          <FeaturedProducts />
        </section>

        {/* Offer Zone */}
        <OfferZone />

        {/* Why Shop With Us */}
        <WhyShopWithUs />

        {/* Testimonials */}
        <TestimonialsSlider />

        {/* Newsletter */}
        <NewsletterSection />
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
