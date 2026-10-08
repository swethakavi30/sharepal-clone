import {
  Gamepad2,
  Play,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";

function HeroBanner() {
  return (
    <section className="hero-banner">

      {/* Decorative background elements */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <div className="hero-small-label">
          <Sparkles size={15} />
          <span>PREMIUM GAMING EXPERIENCE</span>
        </div>

        <h1>
          Gaming Gadgets
          <br />
          <span>On Rent</span>
        </h1>

        <p className="hero-description">
          Experience the latest gaming consoles,
          accessories and VR gadgets without
          spending a fortune.
        </p>

        <div className="hero-features">

          <div className="hero-feature">
            <Zap size={17} />
            <span>Latest Gadgets</span>
          </div>

          <div className="hero-feature">
            <ShieldCheck size={17} />
            <span>Quality Checked</span>
          </div>

        </div>

        <button className="hero-button">
          <span>Explore Gaming</span>
          <Play size={16} fill="currentColor" />
        </button>

      </div>

      {/* RIGHT GAMING ILLUSTRATION */}
      <div className="hero-visual">

        {/* Purple circle */}
        <div className="hero-circle"></div>

        {/* Decorative rings */}
        <div className="hero-ring hero-ring-one"></div>
        <div className="hero-ring hero-ring-two"></div>

        {/* Game controller */}
        <div className="hero-controller">

          <div className="controller-top-light"></div>

          <div className="controller-left">

            <div className="dpad">
              <span className="dpad-horizontal"></span>
              <span className="dpad-vertical"></span>
            </div>

            <div className="controller-stick left-stick"></div>

          </div>

          <div className="controller-center">

            <div className="controller-small-button"></div>

            <div className="controller-small-button"></div>

          </div>

          <div className="controller-right">

            <div className="controller-stick right-stick"></div>

            <div className="action-buttons">
              <span className="action-y">Y</span>
              <span className="action-x">X</span>
              <span className="action-a">A</span>
              <span className="action-b">B</span>
            </div>

          </div>

        </div>

        {/* Floating game console card */}
        <div className="hero-console-card">

          <div className="console-top">
            <Gamepad2 size={17} />
            <span>PLAY</span>
          </div>

          <div className="console-screen">
            <div className="screen-line screen-line-one"></div>
            <div className="screen-line screen-line-two"></div>
            <div className="screen-circle"></div>
          </div>

        </div>

        {/* Floating decorative cubes */}
        <div className="hero-cube hero-cube-one"></div>
        <div className="hero-cube hero-cube-two"></div>

      </div>

    </section>
  );
}

export default HeroBanner;