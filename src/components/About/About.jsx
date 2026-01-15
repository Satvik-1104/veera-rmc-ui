import { useEffect, useState } from "react";
import "./About.css";
import useCountUp from "../../hooks/useCountUp";

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false);

  // Start counting ONLY when stats are visible
  useEffect(() => {
    const statsSection = document.querySelector(".about-cards");

    if (!statsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  // Count-up hooks (now controlled)
  const projects = useCountUp(1725, statsVisible);
  const clients = useCountUp(2500, statsVisible);

  return (
    <section className="about section" id="about">
      <div className="container about-layout">
        {/* LEFT CONTENT */}
        <div className="about-content reveal">
          <span className="about-pill">About Veera Concrete</span>

          <h2 className="about-heading">
            The Premier Choice for <br />
            <span>Ready-Mix Concrete</span> Solutions
          </h2>

          <h4 className="about-subheading">
            Delivering Quality, Efficiency, and Exceptional Service
          </h4>

          <p className="about-text">
            Veera Concrete is a trusted name in the ready-mix concrete industry
            in Hyderabad. With extensive experience, we have established
            ourselves as a leading supplier by consistently delivering
            high-quality concrete solutions.
          </p>

          <p className="about-text">
            Our advanced facilities and technology ensure consistent quality
            and timely delivery. We don’t just supply concrete — we partner in
            your construction journey.
          </p>

          <ul className="about-list">
            <li>Advanced facilities and technology</li>
            <li>Consistent product quality</li>
            <li>Timely delivery guaranteed</li>
            <li>Customized solutions for every project</li>
          </ul>
        </div>

        {/* RIGHT STATS */}
        <div className="about-cards">
          <div className="stat-card-about reveal delay-1">
            <span className="stat-icon">🏗️</span>
            <strong>{projects}+</strong>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card-about reveal delay-2">
            <span className="stat-icon">👥</span>
            <strong>{clients}+</strong>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card-about highlight reveal delay-3">
            <span className="stat-icon">🏅</span>
            <strong>Leading Supplier</strong>
            <p>in Hyderabad’s RMC Industry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
