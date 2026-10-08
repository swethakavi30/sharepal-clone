import {
  Star,
  MapPin,
  Heart,
  ShoppingCart,
} from "lucide-react";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      {/* ================= PRODUCT IMAGE AREA ================= */}
      <div className="product-image-area">

        {/* PRODUCT TAG */}
        {product.tag && (
          <span className="product-tag">
            {product.tag}
          </span>
        )}

        {/* WISHLIST */}
        <button className="wishlist-button">
          <Heart size={18} />
        </button>

        {/* ================= PRODUCT VISUAL ================= */}
        <div className={`product-visual ${product.image}`}>

          {product.image.includes("ps5") && (
            <div className="ps5-console">

              <div className="ps5-left-panel"></div>

              <div className="ps5-center-panel">
                <div className="ps5-disc"></div>
              </div>

              <div className="ps5-right-panel"></div>

              <div className="ps5-light"></div>

            </div>
          )}

          {product.image === "xbox" && (
            <div className="xbox-console">

              <div className="xbox-top">
                <div className="xbox-circle"></div>
              </div>

              <div className="xbox-front">
                <div className="xbox-logo">X</div>
              </div>

            </div>
          )}

          {product.image.includes("controller") && (
            <div className="game-controller">

              <div className="controller-grip controller-grip-left"></div>
              <div className="controller-grip controller-grip-right"></div>

              <div className="controller-body">

                <div className="card-dpad">
                  <span></span>
                  <span></span>
                </div>

                <div className="card-stick stick-one"></div>
                <div className="card-stick stick-two"></div>

                <div className="card-buttons">
                  <b>Y</b>
                  <b>X</b>
                  <b>A</b>
                  <b>B</b>
                </div>

              </div>

            </div>
          )}

          {product.image.includes("vr") && (
            <div className="vr-headset">

              <div className="vr-lens vr-lens-left"></div>
              <div className="vr-lens vr-lens-right"></div>

              <div className="vr-bridge"></div>

              <div className="vr-strap"></div>

            </div>
          )}

        </div>
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}
      <div className="product-information">

        {/* CATEGORY */}
        <span className="product-category">
          {product.category}
        </span>

        {/* NAME */}
        <h3 className="product-name">
          {product.name}
        </h3>

        {/* LOCATION */}
        <div className="product-location">
          <MapPin size={14} />
          <span>{product.location}</span>
        </div>

        {/* RATING */}
        <div className="product-rating">

          <div className="stars">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>

          <span className="review-count">
            ({product.reviews})
          </span>

        </div>

        {/* PRICE */}
        <div className="product-price-row">

          <div>
            <span className="price-label">
              Starting from
            </span>

            <div className="price">
              ₹{product.price}
              <span className="price-period">
                /day
              </span>
            </div>
          </div>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

        </div>

        {/* ACTION BUTTON */}
        <button className="rent-button">
          <ShoppingCart size={17} />
          Rent Now
        </button>

      </div>

    </article>
  );
}

export default ProductCard;
