import { stackList } from "../../utils/techStackList";
import "./techstack.css";
import RubberBand from "react-awesome-reveal";
import Fade from "react-awesome-reveal";

const TechStack = () => {
  return (
    <>
      <div className="container tech_stack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
          <hr />
          <p className="pb-3 text-center">
            Including Programming Languages, Frameworks,Frontend and Backend
            tools, Databases, and APIs
          </p>
        </RubberBand>
        <div className="row">
          {stackList.map((stack) => {
            return (
              <article className="col-md-3" key={stack.id}>
                <Fade right>
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="align-self-center">
                            <stack.icon className="tech_icon" />
                          </div>
                          <div className="media-body">
                            <h5>{stack.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
