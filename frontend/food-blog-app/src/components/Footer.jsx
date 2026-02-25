
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <h3 className="footer-logo">ApniRasoi</h3>

        <p className="footer-text">
          Cook • Share • Smile 😋 <br/>
          Made with ❤️ by SAURAV KUMAR
        </p>

        <div className="footer-icons">

         
          <a href="https://www.instagram.com/imsauraav/?hl=en" target="_blank">
            <FaInstagram />
          </a>

          
          <a href="https://github.com/imsauraav" target="_blank">
            <FaGithub />
          </a>

        
          <a href="https://www.linkedin.com/in/saurav-kumar-ba7a2b338/" target="_blank">
            <FaLinkedin />
          </a>

        </div>

        <p className="copyright">
          © 2026 ApniRasoi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
