import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./utils";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  desc: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, desc, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 bg-primary-100 border-gray-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{desc}</p>
      <AnchorLink
        className="hover:text-secondary-500 transition-all duration-300 text-sm font-bold text-primary-500 underline"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
