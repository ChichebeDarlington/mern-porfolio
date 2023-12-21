import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
// import About from "./pages/about/About";
import { Suspense, lazy } from "react";
const About = lazy(() => import("./pages/about/About"));
import TechStack from "./pages/techstack/TechStack";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import WorksExperince from "./pages/worksexperince/WorksExperince";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { MobileNav } from "./components/mobilenav/MobileNav";
import { useTheme } from "./components/context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <Suspense fallback={<h1>LOADING ...</h1>}>
            <About />
          </Suspense>
          <TechStack />
          <Education />
          <Projects />
          <WorksExperince />
          <Contact />
        </div>
        <Footer />
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ background: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
