import { useState } from "react";
import {
  X,
  CalendarDays,
} from "lucide-react";

function DateSelector({ onClose }) {
  const [deliveryDate, setDeliveryDate] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  return (
    <div className="date-modal-overlay">

      <div className="date-modal">

        <button
          className="date-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="date-modal-icon">
          <CalendarDays size={28} />
        </div>

        <h2>Select Rental Dates</h2>

        <p>
          Choose your delivery and pickup dates
          to view rental prices.
        </p>

        <div className="date-input-group">

          <label>
            Delivery Date
          </label>

          <input
            type="date"
            value={deliveryDate}
            onChange={(event) =>
              setDeliveryDate(event.target.value)
            }
          />

        </div>

        <div className="date-input-group">

          <label>
            Pickup Date
          </label>

          <input
            type="date"
            value={pickupDate}
            onChange={(event) =>
              setPickupDate(event.target.value)
            }
          />

        </div>

        <button
          className="date-confirm-button"
          onClick={onClose}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default DateSelector;