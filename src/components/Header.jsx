import {
  Search,
  ShoppingCart,
  UserRound,
  MapPin,
  ChevronDown,
  CalendarDays,
} from "lucide-react";

function Header({ onSelectDates }) {
  return (
    <>
      <header className="sp-header">

        <div className="sp-header-inner">

          {/* LOGO */}
          <div className="sp-logo-box">
            <div className="sp-logo">
              Share<span>Pal</span>
            </div>
          </div>

          {/* BOOKING BAR */}
          <div className="sp-booking-bar">

            {/* LOCATION */}
            <button className="sp-booking-item">
              <MapPin size={21} strokeWidth={2.2} />

              <span className="sp-location">
                Bangalore
              </span>

              <ChevronDown size={17} />
            </button>

            <div className="sp-booking-divider"></div>

            {/* DELIVERY */}
            <button
              className="sp-booking-item"
              onClick={onSelectDates}
            >
              <CalendarDays size={19} />

              <span>
                Delivery Date: 22nd Oct
              </span>
            </button>

            <div className="sp-booking-divider"></div>

            {/* PICKUP */}
            <button
              className="sp-booking-item"
              onClick={onSelectDates}
            >
              <CalendarDays size={19} />

              <span>
                Pickup Date
              </span>
            </button>

            {/* SELECT */}
            <button
              className="sp-select-button"
              onClick={onSelectDates}
            >
              <CalendarDays size={17} />
              Select
            </button>

          </div>

          {/* RIGHT ACTIONS */}
          <div className="sp-header-actions">

            <button className="sp-action">
              <Search size={29} strokeWidth={2} />
            </button>

            <button className="sp-action sp-cart">
              <ShoppingCart size={31} strokeWidth={2} />
            </button>

            <button className="sp-login">

              <span className="sp-login-circle">
                <UserRound size={25} />
              </span>

              <strong>
                Hi, Login
              </strong>

            </button>

          </div>

        </div>

      </header>
    </>
  );
}

export default Header;