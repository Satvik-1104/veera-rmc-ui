import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    /* ================= SCROLL TO TOP ON ROUTE CHANGE ================= */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    /* ================= REVEAL ANIMATIONS ================= */
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // 🔥 route change trigger

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/apply" element={<ApplicationPage />} />
    </Routes>
  );
}

export default App;
