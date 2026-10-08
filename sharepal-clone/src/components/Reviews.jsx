import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Reviews() {
  const reviews = [
    {
      name: "Rahul K",
      location: "Bangalore",
      text: "Amazing experience! The PS5 was delivered on time and was in excellent condition. The whole rental process was very smooth.",
      product: "PS5 Console",
    },
    {
      name: "Priya S",
      location: "Bangalore",
      text: "I rented a gaming console for the weekend and everything was perfect. Great quality and very helpful support team.",
      product: "Gaming Console",
    },
    {
      name: "Arjun M",
      location: "Bangalore",
      text: "SharePal made renting gaming equipment extremely easy. The product looked almost brand new and worked perfectly.",
      product: "PS5 + Controller",
    },
    {
      name: "Sneha R",
      location: "Bangalore",
      text: "Very good service and affordable prices. I would definitely recommend SharePal to anyone looking to rent gadgets.",
      product: "Gaming Accessories",
    },
  ];

  return (
    <section className="reviews-section">

      {/* ================= SECTION HEADER ================= */}
      <div className="reviews-header">

        <div className="reviews-title">

          <span className="reviews-label">
            CUSTOMER REVIEWS
          </span>

          <h2>
            Served more than
            <br />
            <span>1 Lakh Orders</span>
          </h2>

          <p>
            Thousands of customers trust us for
            quality rentals and a hassle-free
            experience.
          </p>

        </div>

        {/* RATING SUMMARY */}
        <div className="rating-summary">

          <div className="rating-number">
            4.8
          </div>

          <div className="rating-details">

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <span>
              Based on 1,000+ reviews
            </span>

          </div>

        </div>

      </div>

      {/* ================= REVIEW CARDS ================= */}
      <div className="reviews-wrapper">

        <button className="review-arrow review-arrow-left">
          <ChevronLeft size={21} />
        </button>

        <div className="reviews-grid">

          {reviews.map((review, index) => (
            <article
              className="review-card"
              key={index}
            >

              {/* QUOTE */}
              <div className="review-quote">
                <Quote size={25} />
              </div>

              {/* STARS */}
              <div className="review-stars">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}

              </div>

              {/* REVIEW TEXT */}
              <p className="review-text">
                "{review.text}"
              </p>

              {/* CUSTOMER */}
              <div className="review-customer">

                <div className="customer-avatar">
                  {review.name.charAt(0)}
                </div>

                <div className="customer-info">

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.location}
                  </span>

                </div>

              </div>

              {/* PRODUCT */}
              <span className="review-product">
                Rented: {review.product}
              </span>

            </article>
          ))}

        </div>

        <button className="review-arrow review-arrow-right">
          <ChevronRight size={21} />
        </button>

      </div>

      {/* ================= REVIEW CTA ================= */}
      <div className="reviews-bottom">

        <div>
          <strong>
            Join 1 Lakh+ happy customers
          </strong>

          <span>
            Experience easy and reliable rentals.
          </span>
        </div>

        <div className="review-trust">

          <div className="trust-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                fill="currentColor"
              />
            ))}
          </div>

          <span>Trusted by our customers</span>

        </div>

      </div>

    </section>
  );
}

export default Reviews;