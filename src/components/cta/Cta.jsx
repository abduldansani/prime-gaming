import Section from "../shared/Section";
import AccountForm from "./AccountForm";
import CtaDetails from "./CtaDetails";

import { motion } from "motion/react";
import { revealVar } from "../../motion/opacityReveal";

const Cta = () => {
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative flex gap-4 max-lg:flex-col xl:gap-6"
      >
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[250px]" />
        <CtaDetails />
        <AccountForm />
      </motion.div>
    </Section>
  );
};

export default Cta;
