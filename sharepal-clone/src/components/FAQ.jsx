import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "How does renting gaming gadgets work?",
      answer:
        "Choose the gaming gadget you want, select your delivery and pickup dates, provide your details, and place your rental order. We deliver the gadget to your selected location and collect it after your rental period.",
    },
    {
      question: "What gaming consoles can I rent?",
      answer:
        "You can rent popular gaming consoles and accessories such as PlayStation 5, Xbox consoles, gaming controllers, VR headsets and other gaming equipment.",
    },
    {
      question: "Are the gaming gadgets quality checked?",
      answer:
        "Yes. Our gaming gadgets are checked before they are delivered to customers to make sure they are in good working condition.",
    },
    {
      question: "Can I rent a gaming gadget for just one day?",
      answer:
        "Rental availability and minimum rental duration can vary depending on the product and location. Select your dates to see the available rental options.",
    },
    {
      question: "Where do you deliver gaming gadgets?",
      answer:
        "Delivery availability depends on your selected location. Choose your city and rental dates to check the products available in your area.",
    },
    {
      question: "What happens if I damage the rented product?",
      answer:
        "Please contact customer support as soon as possible. The support team will guide you through the next steps based on the type and extent of the damage.",
    },
    {
      question: "Can I become an asset partner?",
      answer:
        "Yes. If you have useful equipment that is not being used regularly, you can explore the Asset Partner program and earn whenever your listed asset is rented.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section">

      {/* ================= HEADER ================= */}
      <div className="faq-header">

        <span className="faq-label">
          FAQ
        </span>

        <h2>
          Frequently Asked
          <span> Questions</span>
        </h2>

        <p>
          Everything you need to know about
          renting gaming gadgets from SharePal.
        </p>

      </div>

      {/* ================= QUESTIONS ================= */}
      <div className="faq-list">

        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-item ${
                isOpen ? "open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  toggleQuestion(index)
                }
                aria-expanded={isOpen}
              >
                <span>
                  {item.question}
                </span>

                <span className="faq-icon">
                  {isOpen ? (
                    <Minus size={19} />
                  ) : (
                    <Plus size={19} />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default FAQ;
