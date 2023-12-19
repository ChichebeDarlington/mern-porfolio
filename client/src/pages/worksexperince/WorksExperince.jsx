import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./worksexperience.css";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const WorksExperince = () => {
  return (
    <>
      <div className="container work" id="workexp">
        <div className="work_exp">
          <h2 className="col-12 mt-3 text-center text-uppercase">
            Work Experince
          </h2>
          <hr />
        </div>
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiMongodb />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelancer Works
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiExpress />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelancer Works
            </h4>
            <p>
              <li>
                Developed responsive and user-friendly web applications using
                React.js, HTML5, CSS3, and JavaScript.
              </li>
              <li>
                {" "}
                Collaborated closely with design and UX teams to implement
                intuitive and visually appealing interfaces.
              </li>
              <li>
                Translated UI/UX design wireframes into high-quality code.
              </li>{" "}
              <li>
                ensuring cross-browser compatibility, Integrated third-party
                APIs and services to enhance application functionality and user
                experience.
              </li>{" "}
              <li>
                Implemented state management using Redux or Context API,
                optimizing application performance.
              </li>{" "}
              <li>
                Conducted performance optimization and front-end testing for
                improved speed and reliability.
              </li>{" "}
              <li>
                Participated in code reviews, identifying areas for improvement
                and ensuring codebase consistency.
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelancer Works
            </h4>
            <p>
              <li>
                {" "}
                Designing and implementing RESTful APIs using Node.js and
                Express.js for seamless communication between front-end and
                database.
              </li>
              <li>
                Collaborating closely with the front-end team to integrate
                user-facing elements with server-side logic.
              </li>
              <li>CI/CD</li>
              <li> Team Leading</li>
              <li> Developing scalable and efficient server-side logic.</li>
              <li>
                {" "}
                ensuring high performance and reliability, Optimizing database
                queries and data structures for enhanced performance.
              </li>
              <li> leveraging MongoDB or SQL,</li>
              <li>
                {" "}
                Implementing authentication and authorization systems, ensuring
                data security and user privacy, Participating in code reviews,
                debugging, and troubleshooting to maintain code quality and
                resolve issues promptly.
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiNodedotjs />}
          >
            <h3 className="vertical-timeline-element-title">
              Cross Platform Mobile App Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelancer Works
            </h4>
            <p>
              <li>
                Developed cross-platform mobile applications using React Native,
                ensuring high performance and a native-like user experience.
              </li>
              <li>
                Collaborated closely with designers and backend developers to
                integrate mobile app interfaces with server-side logic.
              </li>
              <li>
                Implemented and maintained mobile app features, ensuring
                compatibility across various devices and OS versions.
              </li>
              <li>
                Utilized Redux or other state management libraries to handle app
                state and data flow efficiently.
              </li>
              <li>
                Conducted mobile app testing, debugging, and performance
                optimization for seamless user experiences.
              </li>
              <li>
                Worked on implementing UI/UX designs, ensuring pixel-perfect
                rendering on mobile devices.
              </li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorksExperince;
