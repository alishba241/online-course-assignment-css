import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="main-container">
            <div className="footer-heading">About Developers</div>
            <p className="footer-text">
              Developers offers comprehensive web development courses designed
              to help you master front-end, back-end, and full-stack
              development. Whether you&#39;re a beginner or advanced learner,
              we&#39;ve got a course for you.
            </p>
          </div>

          {/* footer grid 2 */}
          <div className="footer-grid-two">
            <ul className="courses">
              <h2 className="course-heading">Courses</h2>
              <li className="course-list">Python</li>
              <li className="course-list">Frontend</li>
              <li className="course-list">JavaScript</li>
              <li className="course-list">GraphQL</li>
              <li className="course-list">Django</li>
              <li className="course-list">Backend</li>
            </ul>

            {/* footer grid 3 */}
            <div className="grid-div">
              <h2 className="footer-grid-three">Follow Us</h2>
              <div className="">
                <Link
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  className="footer-links"
                >
                  <FaFacebook className="footer-icons" />
                  <span className="footer-span">Facebook</span>
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  className="footer-links"
                >
                  <FaInstagram className="footer-icons" />
                  <span className="footer-span ">Instagram</span>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/alishba-naveed-a9ab38251/"}
                  target="_blank"
                  className="footer-links"
                >
                  <FaLinkedin className="footer-icons" />
                  <span className="footer-span">Linkkedin</span>
                </Link>
                <Link
                  href={"https://www.twitter.com/"}
                  target="_blank"
                  className="footer-links"
                >
                  <FaTwitter className="footer-icons" />
                  <span className="footer-span">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rights-div">
          <p className="rights-para">
            &copy; 2024 Developers. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
