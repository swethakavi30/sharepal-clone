import { Heart, Plus } from "lucide-react";

function ProductCard({ product }) {
  return (
    <article className="sp-product-card">

      <div className="sp-product-image">

        {product.badge && (
          <span
            className={`sp-product-badge ${product.badgeType || ""}`}
          >
            {product.badge}
          </span>
        )}

        <button className="sp-heart">
          <Heart size={20} />
        </button>

        <div className="sp-product-picture">
          {product.emoji}
        </div>

      </div>

      <div className="sp-product-info">

        <h3>{product.name}</h3>

        {product.waitlist && (
          <div className="sp-waitlist">

            <strong>
              We launch if 1k people join the waitlist.
            </strong>

            <p>
              Get notified first!
            </p>

            <div className="sp-progress">
              <span></span>
            </div>

            <small>
              24/1000 Joined
            </small>

            <button>
              Join Waitlist
            </button>

          </div>
        )}

        {!product.waitlist && (
          <div className="sp-price-row">

            <div>
              <p className="sp-select-date">
                Select Dates to view price
              </p>

              <p className="sp-price">
                ₹ — / day
              </p>
            </div>

            <button className="sp-add-button">
              <Plus size={22} />
            </button>

          </div>
        )}

      </div>

    </article>
  );
}

export default ProductCard;