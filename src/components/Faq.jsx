import { useState } from "react";
import { faq } from "../constants/faq";
import Section from "./shared/Section";
import { faqClose, faqOpen } from "../assets";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section classNAme="overflow-hidden">
      <div className="relative container space-y-3 xl:space-y-6">
        <div className="absolute w-1/4 h-full bg-violetLight blur-[250px] right-0 -z-10" />
        <h2 className="font-bold text-[32px] text-center">FAQ</h2>
        <div className="md:border-2 border-primary3 rounded-lg flex flex-col gap-6">
          {faq.map((q, i) => (
            <div key={q.id}>
              <div
                className={`relative bg-bg2 shadow-xl -mt-0.5 -ml-px -mr-0.5 p-3 md:py-3 md:px-4 border-2 flex rounded-lg items-center justify-between ${
                  openQuestion === i
                    ? "border-primary"
                    : "border-primary3 -mb-px"
                }`}
              >
                <h3 className="lg:text-xl font-semibold">{q.question}</h3>
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
                  className={`bg-bg2 -mb-px -mr-0.5 -ml-px ${
                    openQuestion === i ? "border-primary" : "border-primary3"
                  } -mt-2 pt-4 border-x-2 border-b-2  px-3 md:px-6 pb-3 rounded-b-lg`}
                >
                  <p className="max-md:text-sm text-grey">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
