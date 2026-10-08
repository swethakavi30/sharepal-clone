import {
  ArrowRight,
  Package,
  IndianRupee,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function EarnBanner() {
  return (
    <section className="earn-banner">

      {/* Decorative shapes */}
      <div className="earn-circle earn-circle-one"></div>
      <div className="earn-circle earn-circle-two"></div>
      <div className="earn-dots"></div>

      {/* LEFT CONTENT */}
      <div className="earn-content">

        <div className="earn-label">
          <Sparkles size={15} />
          <span>RENT & EARN</span>
        </div>

        <h2>
          Got gear you
          <br />
          <span>don't use anymore?</span>
        </h2>

        <p>
          Turn your unused gaming gadgets and
          equipment into extra income. List your
          gear and earn whenever someone rents it.
        </p>

        <div className="earn-points">

          <div>
            <CheckCircle2 size={17} />
            <span>Easy listing</span>
          </div>

          <div>
            <CheckCircle2 size={17} />
            <span>Safe & secure</span>
          </div>

          <div>
            <CheckCircle2 size={17} />
            <span>Earn on every rental</span>
          </div>

        </div>

        <button className="earn-button">
          <span>Rent it & Earn</span>
          <ArrowRight size={18} />
        </button>

      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="earn-visual">

        {/* Main package */}
        <div className="earn-package">

          <div className="package-top"></div>

          <div className="package-front">

            <div className="package-logo">
              <Package size={30} />
            </div>

            <span>RENT</span>

          </div>

          <div className="package-side"></div>

        </div>

        {/* Gaming controller */}
        <div className="earn-controller">

          <div className="earn-controller-body">

            <div className="earn-dpad">
              <span></span>
              <span></span>
            </div>

            <div className="earn-stick earn-stick-one"></div>
            <div className="earn-stick earn-stick-two"></div>

            <div className="earn-buttons">
              <span>Y</span>
              <span>X</span>
              <span>A</span>
              <span>B</span>
            </div>

          </div>

          <div className="earn-grip earn-grip-left"></div>
          <div className="earn-grip earn-grip-right"></div>

        </div>

        {/* Money card */}
        <div className="earn-money-card">

          <div className="money-icon">
            <IndianRupee size={21} />
          </div>

          <div>
            <span>Earn</span>
            <strong>₹ Monthly</strong>
          </div>

        </div>

        {/* Floating coins */}
        <div className="earn-coin earn-coin-one">
          ₹
        </div>

        <div className="earn-coin earn-coin-two">
          ₹
        </div>

      </div>

    </section>
  );
}

export default EarnBanner;