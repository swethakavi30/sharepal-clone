import { useState } from "react";

import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import Sidebar from "./components/Sidebar";
import HeroBanner from "./components/HeroBanner";
import ProductSection from "./components/ProductSection";
import PartnerBanner from "./components/PartnerBanner";
import EarnBanner from "./components/EarnBanner";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DateSelector from "./components/DateSelector";
import ChatButton from "./components/ChatButton";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDateSelector, setShowDateSelector] = useState(false);

  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <Header
        onSelectDates={() => setShowDateSelector(true)}
      />

      {/* ================= MAIN CATEGORY NAVIGATION ================= */}
      <CategoryNav />

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-container">

        {/* LEFT SIDEBAR */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* RIGHT CONTENT */}
        <section className="content-area">

          {/* HERO SECTION */}
          <HeroBanner />

          {/* PRODUCTS */}
          <ProductSection
            selectedCategory={selectedCategory}
          />

          {/* ASSET PARTNER BANNER */}
          <PartnerBanner />

          {/* RENT & EARN BANNER */}
          <EarnBanner />

          {/* REVIEWS */}
          <Reviews />

          {/* FAQ */}
          <FAQ />

        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= FLOATING CHAT ================= */}
      <ChatButton />

      {/* ================= DATE SELECTOR ================= */}
      {showDateSelector && (
        <DateSelector
          onClose={() => setShowDateSelector(false)}
        />
      )}

      {/* ================= BOTTOM RENTAL BAR ================= */}
      <button
        className="floating-rental-button"
        onClick={() => setShowDateSelector(true)}
      >
        <span className="calendar-small">📅</span>

        <span>
          Select rental dates to view prices
        </span>

        <span className="arrow-small">→</span>
      </button>

    </div>
  );
}

export default App;