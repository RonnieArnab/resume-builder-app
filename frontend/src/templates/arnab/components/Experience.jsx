import { AnimatePresence, motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.period}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='/src/templates/arnab/assets/company/meta.png'
            alt={""}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.role}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyname}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {/* {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))} */}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({data}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>
      <AnimatePresence>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {data.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />;
            })}
          </VerticalTimeline>
        </div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Experience, "work");
