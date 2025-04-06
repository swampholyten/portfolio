import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What's your typical website development timeline?",
    answer:
      "Timeline varies based on project scope and complexity. A basic website might take 2-4 weeks, while complex platforms could take 2-3 months.",
  },
  {
    question: "Can you describe your workflow process?",
    answer:
      "My process involves initial consultation, detailed planning, iterative development with regular feedback loops, thorough testing, and post-launch support.",
  },
  {
    question: "Do you collaborate with clients worldwide?",
    answer:
      "Absolutely! I maintain flexible scheduling to work effectively with clients across different time zones and provide responsive communication.",
  },
  {
    question: "What's your industry expertise?",
    answer:
      "I've successfully delivered projects in SaaS, education, and beauty industries.",
  },
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
