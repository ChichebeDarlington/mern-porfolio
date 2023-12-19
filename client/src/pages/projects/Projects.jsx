import "./projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center">
          Top Latest Stack Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          In this portfolio, you'll find a curated collection of projects that
          showcase my skills and expertise across the MERN stack and React
          Native. Each project reflects a unique challenge, demonstrating my
          ability to tackle diverse tasks and deliver exceptional results. I
          invite you to explore these projects to gain insights into my coding
          style, problem-solving approach, and commitment to creating impactful
          software solutions. Thank you for visiting, and I hope these projects
          resonate with you as much as they've inspired me in their creation.
        </p>
        {/* card design */}
        <Spin>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZtj8q_quoOaoKOsr7eVXkQfIgis24lw3OQ&usqp=CAU"
                    alt="projects"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">REACT</span>
                  <span className="card-detail-badge">MONGODB</span>
                  <span className="card-detail-badge">NODE</span>
                  <span className="card-detail-badge">EXPRESS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Banking Wallet</h5>
                  </div>
                  <a
                    href="https://my-wallet-app-tgwm.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FRONTEND</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29e6XafI9sXYsDCYNP_W9FFLi_kquk9eJnA&usqp=CAU"
                    alt="projects"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">REACT</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JS</span>
                  <span className="card-detail-badge">APIs</span>
                  <span className="card-detail-badge">STRIPE</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">E-COMMERCE</h5>
                  </div>
                  <a
                    href="https://mazi-commerce-real.netlify.app/"
                    className="ad-btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqBbSPOTL4Ta8K81lHKkJEiWOx4GWb7ejyg&usqp=CAU"
                    alt="projects"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MONGODB</span>
                  <span className="card-detail-badge">EXPRESS</span>
                  <span className="card-detail-badge">REACT</span>
                  <span className="card-detail-badge">NODEJS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Find Job</h5>
                  </div>
                  <a
                    href="https://jobify-frontend-8jr6.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
};

export default Projects;
