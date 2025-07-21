import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import "swiper/css";
import "swiper/css/navigation";

interface ProductGridProps {
  products: any[];
  showNavigation?: boolean;
  slidesPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const ProductGrid = ({ 
  products, 
  showNavigation = true,
  slidesPerView = { mobile: 2, tablet: 3, desktop: 4 }
}: ProductGridProps) => {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="relative">
      {showNavigation && (
        <div className="flex justify-end space-x-2 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={16}
        slidesPerView={slidesPerView.mobile}
        breakpoints={{
          640: {
            slidesPerView: slidesPerView.tablet,
          },
          1024: {
            slidesPerView: slidesPerView.desktop,
          },
        }}
        modules={[Navigation]}
        className="products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGrid;