import { useMemo } from "react";
import { SlidersHorizontal, ChevronRight } from "lucide-react";

import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection({ selectedCategory }) {
  /*
   * Filter products according to the category
   * selected from the left sidebar.
   */
  const filteredProducts = useMemo(() => {
    if (
      !selectedCategory ||
      selectedCategory === "All"
    ) {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section className="product-section">

      {/* ================= SECTION HEADER ================= */}
      <div className="product-section-header">

        <div>
          <h2>Gaming Gadgets On Rent</h2>

          <p>
            Total items:{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            items
          </p>
        </div>

        {/* SORT / FILTER */}
        <button className="filter-button">
          <SlidersHorizontal size={17} />
          <span>Sort & Filter</span>
          <ChevronRight size={16} />
        </button>

      </div>

      {/* ================= ACTIVE CATEGORY ================= */}
      {selectedCategory &&
        selectedCategory !== "All" && (
          <div className="active-filter">

            <span>
              Showing:
              <strong>{selectedCategory}</strong>
            </span>

            <span className="filter-dot"></span>

            <span>
              {filteredProducts.length} products
            </span>

          </div>
        )}

      {/* ================= PRODUCT GRID ================= */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      ) : (
        <div className="no-products">

          <div className="no-products-icon">
            🎮
          </div>

          <h3>No products found</h3>

          <p>
            We couldn't find gaming products
            in this category.
          </p>

        </div>
      )}

      {/* ================= VIEW MORE ================= */}
      {filteredProducts.length > 0 && (
        <div className="view-more-container">

          <button className="view-more-button">
            View More
            <ChevronRight size={17} />
          </button>

        </div>
      )}

    </section>
  );
}

export default ProductSection;