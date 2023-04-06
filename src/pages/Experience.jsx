import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#272727">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug. 2022"
          iconStyle={{ background: "#272727", color: "#fff" }}
          icon={<SubscriptionsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Started watching Youtube tutorials
          </h3>
          <p>My journey started by watching various YouTube videos and exploring the world of software development, where I began to learn about the different possibilities within it.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Oct. 2022"
          iconStyle={{ background: "#272727", color: "#fff" }}
          icon={<WorkspacePremiumIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FreeCodeCamp Responsive Web Design Certification
          </h3>
          <p>Developer Certification, representing approximately 300 hours of coursework</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Nov. - Dec. 2022"
          iconStyle={{ background: "#272727", color: "#fff" }}
          icon={<WorkspacePremiumIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Python for Everybody - University of Michigan Course
          </h3>
          <p>Learned basics of programming with Python</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep. - Dec. 2022"
          iconStyle={{ background: "#272727", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SmartNinja Web Development Bootcamp
          </h3>
          <p>A 12-week Full-Stack Web Development Bootcamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan. 2023 - present"
          iconStyle={{ background: "#272727", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The Odin Project Curriculum
          </h3>
          <p>Open source online curriculum for learning web development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
