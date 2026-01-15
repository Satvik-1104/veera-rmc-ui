import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const SECTIONS = ["home", "projects", "clients", "testimonials"];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  /* ================= SCROLL SPY (HOME ONLY) ================= */
  useEffect(() => {
    if (!isHomePage) {
      setActive(null);
      setShowIndicator(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          if (id === "contact") {
            setActive("contact");
            setShowIndicator(false);
          } else if (SECTIONS.includes(id)) {
            setActive(id);
            setShowIndicator(true);
          }
        });
      },
      { threshold: 0.6 }
    );

    [...SECTIONS, "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  /* ================= UNDERLINE POSITION ================= */
  useEffect(() => {
    if (!showIndicator || !indicatorRef.current) return;

    const el = linkRefs.current[active];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    indicatorRef.current.style.width = `${rect.width}px`;
    indicatorRef.current.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  }, [active, showIndicator]);

  /* ================= NAV HELPERS ================= */
  const goToSection = (id) => {
    setOpen(false);

    setActive(id);
    setShowIndicator(true);

    if (!isHomePage) {
      navigate("/#" + id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* LOGO */}
        <div
          className="navbar-logo"
          onClick={() => {
            setOpen(false);
            navigate("/");
          }}
        >
          <img src={logo} alt="Veera Concrete" />
        </div>

        {/* DESKTOP LINKS */}
        <nav className="navbar-links">
          {SECTIONS.map((id) => (
            <a
              key={id}
              ref={(el) => (linkRefs.current[id] = el)}
              className={active === id ? "active" : ""}
              onClick={() => goToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {showIndicator && (
            <span className="nav-indicator" ref={indicatorRef} />
          )}
        </nav>

        {/* ABOUT */}
        <a
          className={`navbar-about-us ${isAboutPage ? "active" : ""}`}
          onClick={() => {
            setOpen(false);
            navigate("/about");
          }}
        >
          About Us
        </a>

        {/* CONTACT CTA */}
        <button
          className={`navbar-cta ${active === "contact" ? "active" : ""}`}
          onClick={() => goToSection("contact")}
        >
          Contact Us
        </button>

        {/* HAMBURGER */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {SECTIONS.map((id) => (
            <a key={id} onClick={() => goToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <a
            className="mobile-about-us"
            onClick={() => {
              setOpen(false);
              navigate("/about");
            }}
          >
            About Us
          </a>

          <a
            className="mobile-cta"
            onClick={() => goToSection("contact")}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
