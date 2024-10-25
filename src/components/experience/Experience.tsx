import { VerticalTimeline } from "react-vertical-timeline-component";
import pkg from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";

import BriefCase from "../../icons/BriefCase";
import { EXPERIENCE } from "../../constants/experience.astro";

export const Experience = () => {
  const { VerticalTimelineElement } = pkg;

  return (
    <VerticalTimeline layout="1-column" lineColor="rgb(209,213,219,1)" animate={false} className="no-margin">
      {EXPERIENCE.map((experience, i) => (
        <VerticalTimelineElement
          key={i}
          className="font-medium text-gray-300"
          contentStyle={{
            background: "none",
            boxShadow: "none",
            textAlign: "left",
          }}
          contentArrowStyle={{ borderRight: "0.5rem solid  #9ca3af", marginTop: "6px" }}
          date={experience.date}
          dateClassName="text-white"
          icon={<BriefCase />}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "2.5rem",
            height: "2.5rem",
            top: "0.5rem",
          }}
        >
          <h3 className="text-xl font-bold text-yellow-400">{experience.position}</h3>
          <h4 className="font-semibold text-xl text-white">
            {`Cliente: ${experience.client} - Proyecto ${experience.project}`}
          </h4>
          {experience.description.map((desc, i) => (
            <p key={i} className="text-gray-300 text-pretty">
              {desc}
            </p>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
