
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Plus, Minus, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturedProducts from '@/components/FeaturedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: 'Organic Bananas',
    price: 2.99,
    originalPrice: 3.99,
    rating: 4.5,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1543218024-57a70143c369?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543218024-57a70143c369?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543218024-57a70143c369?w=600&h=600&fit=crop'
    ],
    badge: 'Organic',
    discount: 25,
    description: 'Fresh organic bananas, perfect for snacking or baking. These premium bananas are naturally sweet and packed with essential nutrients.',
    longDescription: 'Our organic bananas are carefully selected from sustainable farms that follow strict organic farming practices. These bananas are rich in potassium, vitamin B6, and dietary fiber, making them an excellent choice for a healthy lifestyle.',
    inStock: true,
    category: 'Fruits',
    sku: 'ORG-BAN-001',
    weight: '1 lb',
    origin: 'Ecuador',
    nutritionalInfo: {
      calories: 89,
      protein: '1.1g',
      carbs: '23g',
      fiber: '2.6g',
      sugar: '12g'
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      comment: 'These bananas are amazing! Super fresh and sweet.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Mike R.',
      rating: 4,
      comment: 'Great quality organic bananas. Will definitely buy again.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Emily K.',
      rating: 5,
      comment: 'Perfect ripeness and excellent taste. Highly recommend!',
      date: '2024-01-08',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge 
                className={`mb-4 ${
                  product.badge === 'Organic' ? 'bg-green-light text-primary' :
                  product.badge === 'Fresh' ? 'bg-orange-light text-orange' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {product.badge}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-lg font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 font-medium">{product.sku}</span>
                </div>
                <div>
                  <span className="text-gray-500">Weight:</span>
                  <span className="ml-2 font-medium">{product.weight}</span>
                </div>
                <div>
                  <span className="text-gray-500">Origin:</span>
                  <span className="ml-2 font-medium">{product.origin}</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 font-medium">{product.category}</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-medium px-4">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-primary hover:bg-primary/90"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Free delivery over $50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>100% Fresh guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span>Easy returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
                  <h4 className="text-lg font-semibold mt-6 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 100% Organic and naturally grown</li>
                    <li>• Rich in potassium and vitamin B6</li>
                    <li>• Perfect for snacking, smoothies, and baking</li>
                    <li>• Sustainably sourced from certified farms</li>
                    <li>• No artificial preservatives or additives</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Nutrition Facts (per 100g)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Calories</span>
                        <span className="font-medium">{product.nutritionalInfo.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span className="font-medium">{product.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbohydrates</span>
                        <span className="font-medium">{product.nutritionalInfo.carbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dietary Fiber</span>
                        <span className="font-medium">{product.nutritionalInfo.fiber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar</span>
                        <span className="font-medium">{product.nutritionalInfo.sugar}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Health Benefits</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Supports heart health</li>
                      <li>• Aids in digestion</li>
                      <li>• Provides natural energy</li>
                      <li>• Helps regulate blood pressure</li>
                      <li>• Supports brain function</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <FeaturedProducts />
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default ProductDetail;
