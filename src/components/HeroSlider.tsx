
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Fresh & Organic",
      subtitle: "Farm to Table",
      description: "Get the freshest organic produce delivered to your doorstep",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      cta: "Shop Now",
      offer: "Up to 50% OFF"
    },
    {
      id: 2,
      title: "Premium Quality",
      subtitle: "Best Prices",
      description: "Premium quality groceries at unbeatable prices",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      cta: "Explore Deals",
      offer: "Free Delivery"
    },
    {
      id: 3,
      title: "Healthy Living",
      subtitle: "Made Easy",
      description: "Everything you need for a healthy lifestyle in one place",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop",
      cta: "Start Shopping",
      offer: "24/7 Delivery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="relative h-full">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white animate-fadeIn">
                  <div className="inline-block gradient-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 text-white shadow-lg">
                    {slide.offer}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">
                    {slide.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-orange to-yellow bg-clip-text text-transparent font-semibold">
                    {slide.subtitle}
                  </h3>
                  <p className="text-lg mb-6 text-gray-200">
                    {slide.description}
                  </p>
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:scale-105 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-300"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white/30 rounded-full p-3 transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white/30 rounded-full p-3 transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
