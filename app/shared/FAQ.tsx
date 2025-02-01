"use client";

import { useState } from "react";

// Define the FAQ data
const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the size and complexity of the project. Typically, residential projects take 4-6 weeks, while larger commercial projects can take a few months.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "Our pricing varies based on the scope of the project. We provide detailed quotes after the initial consultation to give you a clear idea of the costs involved.",
  },
  {
    question: "Do you provide furniture?",
    answer:
      "Yes! We offer custom furniture design and can help source or create unique pieces that fit your space.",
  },
  {
    question: "Can you work with my existing decor?",
    answer:
      "Absolutely! We can integrate your current furnishings and style preferences into our design plans.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "We offer a complimentary initial consultation to discuss your project and understand your design needs.",
  },
  {
    question: "What styles do you specialize in?",
    answer:
      "Our team is experienced in various styles, including modern, contemporary, classic, and eclectic designs.",
  },
  {
    question: "How do you manage project timelines?",
    answer:
      "We work closely with you to establish a clear timeline and regularly update you on progress throughout the project.",
  },
  {
    question: "What is the process for getting started?",
    answer:
      "Once you contact us, we schedule an initial consultation to understand your needs, budget, and style preferences. From there, we develop a tailored plan for your space.",
  },
  {
    question: "Do you handle permits and regulations?",
    answer:
      "Yes, we take care of all necessary permits and ensure that the design complies with local building codes and regulations.",
  },
  {
    question: "Can I see your previous work?",
    answer:
      "Certainly! We have a portfolio of completed projects that showcase our design capabilities and craftsmanship.",
  },
];

// Single Accordion Item Component
function AccordionItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="w-full flex justify-between items-center text-xl font-semibold text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-lg text-gray-700">{faq.answer}</p>}
    </div>
  );
}

// FAQ Component with Accordion
export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          Here are some of the most frequently asked questions about our interior design services. If you have other
          questions, feel free to contact us.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
