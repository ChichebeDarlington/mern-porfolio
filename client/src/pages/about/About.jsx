import "./about.css";
import Jump from "react-reveal/Jump";
// import { Jump, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-l col-xs-12 about_image">
              <img src="resume1.jpg" alt="About Image" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-l col-xs-12 about_content">
              <h1>About Me</h1>
              <p>
                Chichebe Madu Darlington is a proficient full-stack developer
                specializing in MERN (MongoDB, Express.js, React, Node.js) and
                React Native technologies. Hailing from Nigeria, Chichebe brings
                a wealth of expertise and a passion for crafting innovative
                solutions in the realm of web and mobile development. With a
                keen eye for detail and a knack for problem-solving, Chichebe
                excels in creating dynamic and robust applications. His
                expertise spans across the entire software development
                lifecycle, from conceptualization and design to implementation
                and deployment. He thrives in leveraging the capabilities of
                modern technologies to build seamless user experiences. Chichebe
                Madu's journey as a developer is marked by a commitment to
                continuous learning and staying updated with the latest trends
                and advancements in the ever-evolving tech landscape. His
                dedication to mastering MERN stack and React Native positions
                him as a versatile professional capable of creating scalable and
                high-performance applications for various industries. Beyond his
                technical skills, Chichebe embodies a collaborative spirit,
                valuing teamwork and communication in project development. His
                Nigerian heritage brings a rich cultural perspective,
                contributing to a diverse and inclusive approach to
                problem-solving. In addition to his professional pursuits,
                Chichebe Madu is passionate about sharing knowledge and
                mentoring aspiring developers, contributing to the growth and
                development of the tech community in Nigeria and beyond.
                Chichebe's commitment to excellence, coupled with a deep-seated
                passion for technology, continues to drive his success as a
                forward-thinking full-stack developer, contributing
                significantly to the ever-expanding digital landscape.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
