import { useState } from "react";
import { Plus } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "How can I rent from SharePal?",
      answer:
        "Select the product you want to rent, choose your delivery and pickup dates, complete the required verification and place your order."
    },
    {
      question:
        "If I rent multiple products, do I need to extend the rental duration for all?",
      answer:
        "You can manage rental durations according to the applicable rental terms for each product."
    },
    {
      question: "When does the rental start?",
      answer:
        "Your rental starts from the date selected for delivery of the product."
    },
    {
      question:
        "What will be the condition of the products at the time of delivery?",
      answer:
        "Products are checked before being delivered and are provided in usable condition."
    },
    {
      question: "Why is verification required?",
      answer:
        "Verification helps keep the rental process secure and protects both customers and asset partners."
    }
  ];

  return (
    <section className="sp-faq-section">

      <div className="sp-faq-heading">
        <p>NEED HELP?</p>

        <h2>
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      <div className="sp-faq-list">

        {questions.map((item, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              className={`sp-faq-item ${
                isOpen ? "open" : ""
              }`}
              key={index}
            >

              <button
                className="sp-faq-question"
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
              >

                <span>
                  {item.question}
                </span>

                <Plus
                  size={21}
                  className="sp-faq-plus"
                />

              </button>

              {isOpen && (
                <div className="sp-faq-answer">
                  {item.answer}
                </div>
              )}

            </div>
          );
        })}

      </div>

      <button className="sp-view-faq">
        View more FAQs ↗
      </button>

    </section>
  );
}

export default FAQ;