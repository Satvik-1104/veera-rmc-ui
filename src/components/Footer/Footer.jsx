import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>
            <span>VEERA</span> RMC
          </h3>
          <p>
            Leading supplier of ready-mix concrete solutions in Hyderabad.
            We are committed to delivering quality, efficiency, and
            exceptional service in the concrete industry.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z"/>
              </svg>
            </a>

            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.3 1.9-2.3-.8.5-1.8.9-2.7 1.1A4.2 4.2 0 0 0 12 9.1c0 .3 0 .6.1.8A12 12 0 0 1 3 5.2a4.2 4.2 0 0 0 1.3 5.6c-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.8 3.3 4.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.7 2.2 2.9 4.2 3A8.5 8.5 0 0 1 2 19.5 12 12 0 0 0 8.5 21c7.8 0 12-6.5 12-12v-.6c.8-.6 1.5-1.4 2-2.2Z"/>
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/>
              </svg>
            </a>

            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => goToSection("home")}>Home</li>
            <li onClick={() => goToSection("projects")}>Projects</li>
            <li onClick={() => goToSection("clients")}>Clients</li>
            <li onClick={() => goToSection("testimonials")}>Testimonials</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>Ready Mix Concrete</li>
            <li>Technical Capabilities</li>
            <li>Transport & Pumping</li>
            <li>Quality Assurance</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Veera Concrete. All rights reserved. |
        <span> Strength, Quality and Trust</span>
      </div>
    </footer>
  );
}
