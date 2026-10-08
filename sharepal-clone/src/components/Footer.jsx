import {
  Gamepad2,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <div className="footer-logo">
            <Gamepad2 size={24} />
            <span>SharePal</span>
          </div>

          <p>
            Rent gaming gadgets and equipment
            easily and affordably.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#gaming">Gaming</a>
          <a href="#products">Products</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-links">
          <h3>Support</h3>

          <a href="#help">Help Center</a>
          <a href="#contact">Contact Us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <button>
              <Instagram size={19} />
            </button>

            <button>
              <Facebook size={19} />
            </button>

            <button>
              <Twitter size={19} />
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 SharePal Clone. Created for learning purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;