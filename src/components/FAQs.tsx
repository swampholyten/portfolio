import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What programming languages do you use?",
    answer: "Rust, TypeScript, C, and Python."
  },
  {
    question: "What technologies and frameworks do you work with?",
    answer: "Axum, Next.js, React, Nest.js."
  },
  {
    question: "What's your background?",
    answer: "Master's student in High Performance Computing at Politecnico di Milano."
  },
  {
    question: "What are your interests?",
    answer: "Web development, High-performance computing, and low-level programming."
  }
];

export const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="section" id="faqs">
      <div className="box">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="border-t border-foreground/50 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bg-foreground/10 -z-10 group-hover/faq:h-full bottom-0 left-0 transition-all duration-500",
                  index === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-500 group-hover/faq:lg:px-8",
                  index === selectedIndex && "px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-foreground/50 rounded-full shrink-0 transition duration-500 bg-background",
                    index === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {index === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
