import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductSection({ selectedCategory }) {

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <section className="sp-products-section">

      <div className="sp-section-heading">

        <div>
          <h2>Gaming Gadgets On Rent</h2>

          <p>
            Rent gaming consoles and accessories
            at affordable prices.
          </p>
        </div>

        <strong>
          Total items: 50 items
        </strong>

      </div>

      <div className="sp-section-divider"></div>

      <div className="sp-product-grid">

        {filteredProducts
          .slice(0, 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

      </div>

      <div className="sp-product-grid sp-second-row">

        {filteredProducts
          .slice(4, 8)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

      </div>

      <div className="sp-product-grid">

        {filteredProducts
          .slice(8, 12)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

      </div>

      <div className="sp-showing">
        Showing 12 of 50 results
      </div>

      <button className="sp-show-more">
        Show More
      </button>

    </section>
  );
}

export default ProductSection;