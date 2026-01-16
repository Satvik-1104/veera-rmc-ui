import { useState, useEffect } from "react";
import "./Projects.css";

import p1 from "../../assets/projects/p1.jpg";
import p2 from "../../assets/projects/p2.jpg";
import p3 from "../../assets/projects/p3.jpg";
import p4 from "../../assets/projects/p4.jpg";
import p5 from "../../assets/projects/p5.jpg";
import p6 from "../../assets/projects/p6.jpg";
import p7 from "../../assets/projects/p7.jpg";
import p8 from "../../assets/projects/p8.jpg";
import p9 from "../../assets/projects/p9.jpg";
import p10 from "../../assets/projects/p10.jpg";
import p11 from "../../assets/projects/p11.jpg";
import p12 from "../../assets/projects/p12.jpg";
import p13 from "../../assets/projects/p13.jpg";
import p14 from "../../assets/projects/p14.jpg";
import p15 from "../../assets/projects/p15.jpg";
import p16 from "../../assets/projects/p16.jpg";
import p17 from "../../assets/projects/p17.jpg";
import p18 from "../../assets/projects/p18.jpg";

const IMAGES = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18];

const PROJECTS = [
  "Capitaland International Tech Park",
  "IIT Hyderabad",
  "Praneeth Ixora",
  "T-Hub Government",
  "Telangana Secretariat",
  "Telangana Martyrs Memorial",
  "Prestige Clairemont",
  "Prestige Tranquil",
  "The Regent by Auro Realty",
  "Vasavi Ananda Nilayam",
  "Vasavi Atlantis",
  "Risinia The TWINZ",
  "Sattva Knowledge Park",
  "The Prestige City",
  "Cybercity Westbrook",
  "Pranava Greenwich",
  "Gowra",
  "Praneeth Jaitra",
];

export default function Projects() {
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    // Run on mount and scroll
    handleReveal();
    window.addEventListener("scroll", handleReveal);

    return () => window.removeEventListener("scroll", handleReveal);
  }, [visible]); // Re-run when visible changes to animate new cards

  return (
    <section className="projects section" id="projects">
      <div className="container">
        {/* HEADER */}
        <div className="section-header reveal">
          <span className="section-pill">Our Portfolio</span>
          <h2>Our Projects</h2>
          <p className="section-subtitle">Building landmarks across Hyderabad</p>
          <span className="section-underline" />
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {PROJECTS.slice(0, visible).map((title, index) => (
            <div className="project-card reveal" key={index}>
              <img
                src={IMAGES[index % IMAGES.length]}
                alt={title}
              />

              {/* Completed pill */}
              <span className="project-status">Completed</span>

              {/* ALWAYS VISIBLE INFO (LIKE FIGMA) */}
              <div className="project-info">
                <h4>{title}</h4>
                <span className="project-location">
                  📍 Hyderabad
                </span>
              </div>

              {/* HOVER ONLY */}
              <div className="project-hover">
                <button className="project-btn">
                  View Details ↗
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE */}
        {visible < PROJECTS.length && (
          <div className="projects-more reveal">
            <button onClick={() => setVisible(18)}>
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}