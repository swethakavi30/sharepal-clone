import {
  Search,
  ShoppingCart,
  UserRound,
  MapPin,
  ChevronDown,
  CalendarDays,
  Menu,
} from "lucide-react";

function Header({ onSelectDates }) {
  return (
    <header className="site-header">

      {/* ================= TOP HEADER ================= */}
      <div className="header-top">

        {/* LOGO */}
        <div className="sharepal-logo">
          <div className="logo-icon">
            <span className="logo-dot"></span>
            <span className="logo-line"></span>
          </div>

          <div className="logo-text">
            <span className="logo-share">Share</span>
            <span className="logo-pal">Pal</span>
          </div>
        </div>

        {/* MOBILE MENU */}
        <button className="mobile-menu-button">
          <Menu size={24} />
        </button>

        {/* ================= SEARCH / BOOKING BAR ================= */}
        <div className="booking-bar">

          {/* LOCATION */}
          <button className="booking-item location-item">
            <MapPin size={19} />

            <div className="booking-text">
              <span className="booking-label">Location</span>
              <span className="booking-value">Bangalore</span>
            </div>

            <ChevronDown size={16} />
          </button>

          <div className="booking-divider"></div>

          {/* DELIVERY DATE */}
          <button
            className="booking-item"
            onClick={onSelectDates}
          >
            <CalendarDays size={19} />

            <div className="booking-text">
              <span className="booking-label">Delivery Date</span>
              <span className="booking-value">Select Date</span>
            </div>

            <ChevronDown size={16} />
          </button>

          <div className="booking-divider"></div>

          {/* PICKUP DATE */}
          <button
            className="booking-item"
            onClick={onSelectDates}
          >
            <CalendarDays size={19} />

            <div className="booking-text">
              <span className="booking-label">Pickup Date</span>
              <span className="booking-value">Select Date</span>
            </div>

            <ChevronDown size={16} />
          </button>

          {/* SELECT BUTTON */}
          <button
            className="booking-select-button"
            onClick={onSelectDates}
          >
            Select
          </button>

        </div>

        {/* ================= RIGHT SIDE ACTIONS ================= */}
        <div className="header-actions">

          {/* SEARCH */}
          <button className="header-icon-button">
            <Search size={22} />
          </button>

          {/* CART */}
          <button className="header-icon-button cart-button">
            <ShoppingCart size={22} />
            <span className="cart-count">0</span>
          </button>

          {/* USER */}
          <button className="login-button">
            <UserRound size={21} />

            <span>Hi, Login</span>
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;