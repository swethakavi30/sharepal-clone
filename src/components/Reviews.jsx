function Reviews() {
  return (
    <section className="sp-reviews-section">

      <div className="sp-reviews-heading">
        <p>WHAT OUR CUSTOMERS SAY</p>

        <h2>
          Served more than <span>1 Lakh Orders</span>
        </h2>

        <div className="sp-rating">
          <span>★★★★★</span>
          <strong>4.5</strong>
          <small>Customer Rating</small>
        </div>
      </div>

      <div className="sp-review-grid">

        <div className="sp-review-card">
          <div className="sp-review-top">
            <div className="sp-review-avatar">A</div>

            <div>
              <strong>Happy Customer</strong>
              <small>Verified Customer</small>
            </div>

            <span>★★★★★</span>
          </div>

          <p>
            Amazing experience! The gaming console was
            delivered on time and was in excellent condition.
          </p>
        </div>

        <div className="sp-review-card">
          <div className="sp-review-top">
            <div className="sp-review-avatar">R</div>

            <div>
              <strong>Regular User</strong>
              <small>Verified Customer</small>
            </div>

            <span>★★★★★</span>
          </div>

          <p>
            The rental process was very easy and the
            product quality was really good.
          </p>
        </div>

        <div className="sp-review-card">
          <div className="sp-review-top">
            <div className="sp-review-avatar">S</div>

            <div>
              <strong>SharePal User</strong>
              <small>Verified Customer</small>
            </div>

            <span>★★★★★</span>
          </div>

          <p>
            Great choice for trying gaming products without
            spending a lot on buying them.
          </p>
        </div>

      </div>

      <div className="sp-statistics">

        <div>
          <strong>250Cr+</strong>
          <span>Saved Together</span>
        </div>

        <div>
          <strong>4.5M Kg</strong>
          <span>CO₂ Emissions Saved</span>
        </div>

        <div>
          <strong>100K+</strong>
          <span>Products in Circulation</span>
        </div>

      </div>

    </section>
  );
}

export default Reviews;