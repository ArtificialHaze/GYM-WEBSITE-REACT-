import Class from "./Class";
import HText from "./HText";
import { IClass, SelectedPage } from "./utils";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourclasses = [
  {
    name: "Weight training classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium.",
    image: "image1",
  },
  {
    name: "Yoga classes",
    desc: "Consectetur adipisicing elit. Distinctio, laudantium.",
    image: "image2",
  },
  {
    name: "Core classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "image3",
  },
  {
    name: "Adventure classes",
    desc: "Lorem ipsum dolor sit elit. Distinctio, laudantium.",
    image: "image4",
  },
  {
    name: "Fitness classes",
    desc: "Lorem ipsum dolor sit elit. Distinctio, laudantium.",
    image: "image5",
  },
  {
    name: "Training classes",
    desc: "Lorem ipsum dolor sit elit. Distinctio, laudantium.",
    image: "image6",
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium necessitatibus aliquam illo nobis vero doloremque.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourclasses.map(({ name, desc, image }: IClass, index) => (
              <Class key={index} name={name} desc={desc} image={image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
