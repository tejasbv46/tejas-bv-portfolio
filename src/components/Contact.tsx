import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Information */}
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/tejas-bv-7b06b1310"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — tejas-bv
              </a>
            </p>

            <h4>Education</h4>

            <p>
              B.Tech, Computer Science Engineering, Sri Venkateshwara College
              of Engineering, Bengaluru — 2022–2026
            </p>

            <p>
              Pre-University, Sri Chaitanya PU College, Bengaluru — 2020–2022
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/tejasbv46"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-bv-7b06b1310"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="mailto:tejasbv46@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br />
              by <span>Tejas BV</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;