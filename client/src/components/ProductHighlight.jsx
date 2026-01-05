import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {ProductCard1, ProductCard2, ProductCard3} from "./ProductCard";

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Product Card 1 */}
            <ProductCard1 />
          {/* Product Card 2 */}
            <ProductCard2 />
          {/* Product Card 3 */}
            <ProductCard3 />
          </div>
        </div>
    </section>
  );
}

export default ProductHighlight;
