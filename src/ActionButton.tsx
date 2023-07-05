import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./utils";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-500 hover:text-white hover:bg-primary-500"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
