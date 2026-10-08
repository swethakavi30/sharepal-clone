function PartnerBanner() {
  return (
    <section className="sp-partner-banner">

      <div className="sp-partner-content">

        <p className="sp-banner-label">
          SHAREPAL ASSET PARTNER
        </p>

        <h2>
          Become an <span>Asset Partner.</span>
          <br />
          Earn Monthly.
        </h2>

        <div className="sp-benefits">

          <div className="sp-benefit-column">
            <h4>EARNING BENEFITS</h4>

            <div className="sp-benefit">
              <strong>Monthly Earnings</strong>
              <span>Earn from your unused gadgets</span>
            </div>

            <div className="sp-benefit">
              <strong>Upto ₹10,000</strong>
              <span>Instant Wallet credits</span>
            </div>
          </div>

          <div className="sp-benefit-column">
            <h4>RENTAL BENEFITS</h4>

            <div className="sp-benefit">
              <strong>10% Off</strong>
              <span>Exclusive discount when you rent</span>
            </div>

            <div className="sp-benefit">
              <strong>10% Cashback</strong>
              <span>On every order</span>
            </div>
          </div>

        </div>

        <button className="sp-know-more">
          Know More ↗
        </button>

      </div>

      <div className="sp-partner-visual">

        <div className="sp-partner-device device-one">
          📷
        </div>

        <div className="sp-partner-device device-two">
          🎮
        </div>

        <div className="sp-partner-device device-three">
          🚁
        </div>

        <div className="sp-money money-one">
          ₹
        </div>

        <div className="sp-money money-two">
          ₹
        </div>

      </div>

    </section>
  );
}

export default PartnerBanner;