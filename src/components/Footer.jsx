import { contactInfo, links, social } from "../constants/footer";
import Logo from "./shared/Logo";
import Section from "./shared/Section";

const Footer = () => {
  return (
    <Section>
      <div className="container flex max-md:flex-col justify-between gap-6 lg:gap-3">
        <div className="space-y-3 xl:space-y-6 md:w-[37%]">
          <div className="flex gap-4 items-center">
            <Logo />
            <h4 className="max-xl:text-sm">
              Unleash your gaming potential with Prime Gaming
            </h4>
          </div>
          <p className="max-xl:text-sm text-grey">
            Step into the future of gaming with Prime Gaming. Explore top-tier
            reviews, news, and in-depth analysis on the latest and greatest
            games. Join the gaming community now to get exclusive content and
            features.
          </p>
          <div className="flex items-center justify-around">
            {social.map((icon, i) => (
              <img key={i} src={icon} alt="-" width={24} height={24} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-around gap-1">
          {Object.entries(links).map(([key, value], i) => (
            <div key={i} className="space-y-8 text-center">
              <h3 className="max-xl:text-sm font-medium xl:font-semibold text-primary">
                {key}
              </h3>
              <div className="flex flex-col items-center gap-6">
                {value.map((link, i) => (
                  <a key={i} href="#" className="text-greyText text-xs">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 md:w-fit items-center">
          <h3 className="max-xl:text-sm font-medium xl:font-semibold text-primary4">
            Contact Us
          </h3>
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href="#"
                className="text-greyText text-xs flex items-center gap-1"
              >
                <img src={info.icon} alt="-" />
                <div className="">{info.info}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
