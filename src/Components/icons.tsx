import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const IconComonent = ({ icon, title, description }: Props) => {
  return (
    <div
      className="mt-5 rounded-md px-5 py-16 text-center md:text-xl"
    >
      <div className="mb-4 flex justify-center ">
        <div className="p-4 w-20 h-20 xxs:mt-[-60px] md:mt-[-80px]">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3 xxs:mb-[-60px]">{description}</p>
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      >
        <p>Learn More</p>
      </AnchorLink> */}
    </div>
  );
};

export default IconComonent;