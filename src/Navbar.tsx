import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "./utils";
import useMediaQuery from "./useMediaQuery";
import ActionButton from "./ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopPage: boolean;
};

const Navbar = ({ selectedPage, isTopPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopPage ? "" : "bg-primary-100 drop-shadow";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src="Logo" alt="Logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Home"
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact"
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Benefits"
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Our Classes"
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member.
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggled((prev) => !prev);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled((prev) => !prev)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Home"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Contact"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Benefits"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Our Classes"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
