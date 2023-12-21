import "./home.css";
import TypeWriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../components/context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home_container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home_content">
          <Fade right>
            <h2>Hey, I am a</h2>
            <h1>
              <TypeWriter
                options={{
                  strings: [
                    "FULL STACK DEVELOPER !",
                    "MERN STACK !",
                    "FRONTEND DEVELOPER !",
                    "BACKEND DEVELOPER !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade buttom>
            <div className="home_buttons">
              <a
                className="btn btn_hire"
                href="https://api.whatsapp.com/send?phone=09166458962"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn_cv" href="resume" download="your_name.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
