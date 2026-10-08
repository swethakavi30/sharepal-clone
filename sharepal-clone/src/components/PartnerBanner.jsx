import {
  Wallet,
  Percent,
  Gift,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function PartnerBanner() {
  return (
    <section className="partner-banner">

      {/* Decorative background */}
      <div className="partner-shape partner-shape-one"></div>
      <div className="partner-shape partner-shape-two"></div>
      <div className="partner-glow"></div>

      {/* LEFT CONTENT */}
      <div className="partner-content">

        <div className="partner-label">
          <Sparkles size={15} />
          <span>ASSET PARTNER PROGRAM</span>
        </div>

        <h2>
          Become an Asset Partner.
          <br />
          <span>Earn Monthly.</span>
        </h2>

        <p>
          Have gaming gadgets or other assets
          sitting unused? List them with us and
          turn them into a source of monthly income.
        </p>

        <button className="partner-button">
          <span>Become a Partner</span>
          <ArrowRight size={17} />
        </button>

      </div>

      {/* BENEFITS */}
      <div className="partner-benefits">

        {/* BENEFIT 1 */}
        <div className="partner-benefit-card">

          <div className="partner-benefit-icon">
            <Wallet size={25} />
          </div>

          <div>
            <strong>Upto ₹10,000</strong>
            <span>Instant Wallet</span>
          </div>

        </div>

        {/* BENEFIT 2 */}
        <div className="partner-benefit-card">

          <div className="partner-benefit-icon">
            <Percent size={25} />
          </div>

          <div>
            <strong>10% Off</strong>
            <span>On Your Rentals</span>
          </div>

        </div>

        {/* BENEFIT 3 */}
        <div className="partner-benefit-card">

          <div className="partner-benefit-icon">
            <Gift size={25} />
          </div>

          <div>
            <strong>10% Cashback</strong>
            <span>On Every Order</span>
          </div>

        </div>

      </div>

      {/* DECORATIVE CARD */}
      <div className="partner-floating-card">

        <div className="partner-floating-icon">
          ₹
        </div>

        <div>
          <span>Monthly</span>
          <strong>Earnings</strong>
        </div>

      </div>

    </section>
  );
}

export default PartnerBanner;