import { useState, useEffect } from "react";
import "./Clients.css";

import c1 from "../../assets/clients/c1.png";
import c2 from "../../assets/clients/c2.png";
import c3 from "../../assets/clients/c3.png";
import c4 from "../../assets/clients/c4.png";
import c5 from "../../assets/clients/c5.png";
import c6 from "../../assets/clients/c6.png";
import c7 from "../../assets/clients/c7.png";
import c8 from "../../assets/clients/c8.png";
import c9 from "../../assets/clients/c9.png";
import c10 from "../../assets/clients/c10.png";
import c11 from "../../assets/clients/c11.png";
import c12 from "../../assets/clients/c12.png";
import c13 from "../../assets/clients/c13.png";
import c14 from "../../assets/clients/c14.png";
import c15 from "../../assets/clients/c15.png";
import c16 from "../../assets/clients/c16.png";
import c17 from "../../assets/clients/c17.png";
import c18 from "../../assets/clients/c18.png";
import c19 from "../../assets/clients/c19.png";
import c20 from "../../assets/clients/c20.png";
import c21 from "../../assets/clients/c21.png";
import c22 from "../../assets/clients/c22.png";
import c23 from "../../assets/clients/c23.png";
import c24 from "../../assets/clients/c24.png";
import c25 from "../../assets/clients/c25.png";
import c26 from "../../assets/clients/c26.png";
import c27 from "../../assets/clients/c27.png";
import c28 from "../../assets/clients/c28.png";
import c29 from "../../assets/clients/c29.png";
import c30 from "../../assets/clients/c30.png";
import c31 from "../../assets/clients/c31.png";
import c32 from "../../assets/clients/c32.png";
import c33 from "../../assets/clients/c33.png";
import c34 from "../../assets/clients/c34.png";
import c35 from "../../assets/clients/c35.png";
import c36 from "../../assets/clients/c36.png";

const CLIENTS = [
  c1, c2, c3, c4, c5, c6,
  c7, c8, c9, c10, c11, c12,
  c13, c14, c15, c16, c17, c18,
  c19, c20, c21, c22, c23, c24,
  c25, c26, c27, c28, c29, c30,
  c31, c32, c33, c34, c35, c36
];

export default function Clients() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
  }, [showAll]); // Re-run when showAll changes to animate new logos

  const visibleClients =
    isMobile && !showAll ? CLIENTS.slice(0, 6) : CLIENTS;

  return (
    <section className="clients section" id="clients">
      <div className="container">
        {/* HEADER */}
        <div className="clients-header reveal">
          <span className="clients-pill">Trusted Partners</span>
          <h2>Our Clients</h2>
          <p>
            We are trusted by leading developers, institutions, and
            infrastructure partners.
          </p>
        </div>

        {/* DESKTOP SLIDER */}
        {!isMobile && !showAll && (
          <div className="clients-slider reveal">
            <div className="clients-track">
              {[...CLIENTS, ...CLIENTS].map((logo, index) => (
                <div className="client-logo" key={index}>
                  <img src={logo} alt="Client logo" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GRID (mobile always, desktop after view all) */}
        {(isMobile || showAll) && (
          <div className="clients-grid">
            {visibleClients.map((logo, index) => (
              <div className="client-logo reveal" key={index}>
                <img src={logo} alt="Client logo" />
              </div>
            ))}
          </div>
        )}

        {/* VIEW ALL BUTTON */}
        {!showAll && (
          <div className="clients-more reveal">
            <button onClick={() => setShowAll(true)}>
              View All Clients
            </button>
          </div>
        )}
      </div>
    </section>
  );
}