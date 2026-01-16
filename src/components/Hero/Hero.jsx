import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge reveal delay-1">
            Welcome to Veera RMC
          </div>

          <h1 className="hero-title reveal delay-2">
            Where <span className="text-quality">Quality</span> <br />
            <span className="text-meets">Meets</span>{" "}
            <span className="text-durability">Durability</span>
          </h1>

          <p className="hero-subtitle reveal delay-3">
            Veera Concrete:{" "}
            <span className="text-strength">Strength</span>,{" "}
            <span className="text-quality">Quality</span> and{" "}
            <span className="text-trust">Trust</span>
          </p>

          <div className="hero-actions reveal delay-4">
            <a href="#services" className="btn-primary">
              Our Services <span className="btn-arrow">→</span>
            </a>

            <a href="#contact" className="btn-outline">
              Get Started <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="hero-stats reveal delay-5">
            <div className="stat-card-hero">
              <strong>1700+</strong>
              <span> Projects</span>
            </div>
            <div className="stat-card-hero">
              <strong>2500+</strong>
              <span> Clients</span>
            </div>
            <div className="stat-card-hero">
              <strong>#1</strong>
              <span> In Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
