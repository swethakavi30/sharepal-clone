import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  const categories = [
    "Action Cameras",
    "Cameras",
    "Tracking Gear",
    "Riding Gear",
    "Creator Gear",
    "Gaming Console",
    "Winter Wear",
    "Camping Gear",
    "Audio Visual Equipment",
    "Gaming",
    "Photography",
    "Outdoor Equipment",
  ];

  const helpLinks = [
    "About Us",
    "Contact Us",
    "FAQs",
    "Terms & Conditions",
    "Privacy Policy",
    "Cancellation Policy",
  ];

  return (
    <footer className="sp-footer">

      <div className="sp-footer-main">

        {/* BRAND */}
        <div className="sp-footer-brand">

          <div className="sp-footer-logo">
            Share<span>Pal</span>
          </div>

          <p>
            Rent what you need.
            <br />
            Share what you have.
          </p>

          <div className="sp-footer-socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>
          </div>

        </div>

        {/* CATEGORIES */}
        <div className="sp-footer-column">

          <h3>Explore Categories</h3>

          {categories.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}

        </div>

        {/* QUICK LINKS */}
        <div className="sp-footer-column">

          <h3>Quick Links</h3>

          {helpLinks.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}

        </div>

        {/* CONTACT */}
        <div className="sp-footer-column sp-footer-contact">

          <h3>Get in Touch</h3>

          <p>
            <Mail size={17} />
            <span>Support Email</span>
          </p>

          <p>
            <Phone size={17} />
            <span>Customer Support</span>
          </p>

          <p>
            <MapPin size={17} />
            <span>India</span>
          </p>

        </div>

      </div>

      <div className="sp-footer-bottom">

        <p>
          © {new Date().getFullYear()} SharePal. All rights reserved.
        </p>

        <p>
          Made for sharing.
        </p>

      </div>

    </footer>
  );
}

export default Footer;