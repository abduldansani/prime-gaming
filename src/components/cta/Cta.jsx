import Section from "../shared/Section";
import AccountForm from "./AccountForm";
import CtaDetails from "./CtaDetails";

const Cta = () => {
  return (
    <Section>
      <div className="container relative flex gap-4 max-lg:flex-col xl:gap-6">
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[250px]" />
        <CtaDetails />
        <AccountForm />
      </div>
    </Section>
  );
};

export default Cta;
