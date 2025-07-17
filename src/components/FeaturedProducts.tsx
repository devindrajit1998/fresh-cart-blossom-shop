
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductModal from './ProductModal';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Organic Bananas',
      price: 2.99,
      originalPrice: 3.99,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?w=300&h=300&fit=crop',
      badge: 'Organic',
      discount: 25,
      description: 'Fresh, naturally ripened organic bananas packed with potassium and vitamins.',
      inStock: true
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      price: 4.99,
      originalPrice: 6.99,
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
      badge: 'Fresh',
      discount: 29,
      description: 'Sweet, juicy strawberries perfect for snacking or desserts.',
      inStock: true
    },
    {
      id: 3,
      name: 'Whole Grain Bread',
      price: 3.49,
      originalPrice: 4.49,
      rating: 4.3,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
      badge: 'Bestseller',
      discount: 22,
      description: 'Nutritious whole grain bread made with premium ingredients.',
      inStock: true
    },
    {
      id: 4,
      name: 'Organic Milk',
      price: 3.99,
      originalPrice: 4.99,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
      badge: 'Organic',
      discount: 20,
      description: 'Fresh organic milk from grass-fed cows, rich in calcium and protein.',
      inStock: true
    },
    {
      id: 5,
      name: 'Fresh Spinach',
      price: 2.49,
      originalPrice: 3.49,
      rating: 4.4,
      reviews: 73,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop',
      badge: 'Fresh',
      discount: 29,
      description: 'Crisp, nutrient-rich spinach leaves perfect for salads and cooking.',
      inStock: true
    },
    {
      id: 6,
      name: 'Premium Apples',
      price: 5.99,
      originalPrice: 7.99,
      rating: 4.7,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
      badge: 'Premium',
      discount: 25,
      description: 'Crisp, sweet premium apples handpicked for exceptional quality.',
      inStock: true
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2 font-playfair bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked favorites from our collection</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 px-2"
              >
                <div className="group bg-card border rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02]">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className={`${
                          product.badge === 'Organic' ? 'bg-green-light text-primary' :
                          product.badge === 'Fresh' ? 'bg-orange-light text-orange' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-red-500 text-white">
                        -{product.discount}%
                      </Badge>
                    </div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Button 
                        size="sm" 
                        className="glass-effect text-white hover:bg-white/20 backdrop-blur-md border-white/20"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="gradient-primary text-white hover:scale-105 transition-transform">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{product.name}</h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default FeaturedProducts;
