import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductGrid from "./products/ProductGrid";
import SectionHeader from "./products/SectionHeader";
import { useSelector } from "react-redux";

const FeaturedProducts = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = props.data || [];
  const flatProducts = products.map((item) => item.id || item);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={`${props?.title} Products`}
          subtitle={props?.sub_title}
        />

        <ProductGrid products={flatProducts} />
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
