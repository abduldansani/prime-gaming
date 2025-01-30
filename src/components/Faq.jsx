import { useState } from "react";
import { faq } from "../constants/faq";
import Section from "./shared/Section";
import { faqClose, faqOpen } from "../assets";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section classNAme="overflow-hidden">
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative space-y-3 xl:space-y-6"
      >
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[300px]" />
        <div className="absolute left-0 -z-10 h-full w-1/4 bg-violetLight blur-[300px]" />
        <h2 className="text-center text-[32px] font-bold">FAQ</h2>
        <div className="flex flex-col gap-6 rounded-lg border-primary3 md:border-2">
          {faq.map((q, i) => (
            <div key={q.id}>
              <div
                className={`relative -ml-px -mr-0.5 -mt-0.5 flex items-center justify-between rounded-lg border-2 bg-bg2 p-3 shadow-xl md:px-4 md:py-3 ${
                  openQuestion === i
                    ? "border-primary"
                    : "-mb-px border-primary3"
                }`}
              >
                <h3 className="font-semibold lg:text-xl">{q.question}</h3>
                <button
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                >
                  <img
                    src={openQuestion === i ? faqOpen : faqClose}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              {openQuestion === i && (
                <div
                  className={`-mb-px -ml-px -mr-0.5 bg-bg2 ${
                    openQuestion === i ? "border-primary" : "border-primary3"
                  } -mt-2 rounded-b-lg border-x-2 border-b-2 px-3 pb-3 pt-4 md:px-6`}
                >
                  <p className="text-grey max-md:text-sm">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Faq;
