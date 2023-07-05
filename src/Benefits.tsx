import { IBenefit, SelectedPage } from "./utils";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "./HText";
import Benefit from "./Benefit";
import ActionButton from "./ActionButton";

const benefits: Array<IBenefit> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art facilities",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, neque.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100 of diverce classes",
    desc: "Lorem consectetur, adipisicing elit. Totam, neque.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Export and Pro Trainers",
    desc: "Lorem ipsum consectetur, adipisicing elit. Totam, neque.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            sunt optio aliquid dolores facilis. Et reiciendis natus magnam
            deleniti eum. Non perspiciatis nesciunt eaque fugit.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map(({ icon, title, desc }: IBenefit, index) => (
            <Benefit
              key={index}
              icon={icon}
              title={title}
              desc={desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESC */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src="BenefitsPageGraphic"
            alt="BenefitsPageGraphicImage"
            className="mx-auto"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia facilis ut magni laboriosam voluptatem? Temporibus,
                ipsam numquam impedit et, nisi sed commodi voluptate ipsum
                minima ullam porro autem odio. Quis?
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci tempore esse, laborum illum necessitatibus asperiores
                neque qui tenetur sint repellat.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
