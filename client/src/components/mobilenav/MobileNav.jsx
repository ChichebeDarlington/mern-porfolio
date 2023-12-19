import "./mobilenav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {openMenu ? (
            <AiOutlineMenuUnfold
              size={30}
              color="white"
              className="mobile-nav-icon"
              onClick={handleOpenMenu}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              color="white"
              className="mobile-nav-icon"
              onClick={handleOpenMenu}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {openMenu && (
          <div className="mobile-nav-menu">
            <div className="nav_items">
              <div className="nav_item">
                <div className="nav_link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcHome />
                    home
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcVoicePresentation />
                    Testimonial
                  </Link>
                </div>
                <div className="nav_link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleCloseMenu}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
