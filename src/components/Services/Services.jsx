import "./Services.css";
import readyMix from "../../assets/services/ready-mix.jpg";
import technical from "../../assets/services/technical.jpg";
import transport from "../../assets/services/transport.jpg";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        {/* HEADER */}
        <div className="services-header reveal">
          <span className="services-pill">What We Offer</span>

          <h2 className="services-title">Our Services</h2>

          <p className="services-subtitle">Products and Services</p>
        </div>

        {/* CARDS */}
        <div className="services-grid">
          {/* CARD 1 */}
          <div className="service-card reveal delay-1">
            <div className="service-image">
              <img src={readyMix} alt="Ready Mix Concrete" />
              <span className="service-icon red">📦</span>
            </div>

            <div className="service-content">
              <h3>Ready Mix Concrete</h3>
              <p>
                High-quality ready-mix concrete solutions designed to meet
                residential, commercial, and infrastructure project needs.
              </p>

              <a className="learn-more red" href="#">
                Learn More →
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="service-card reveal delay-2">
            <div className="service-image">
              <img src={technical} alt="Technical Capabilities" />
              <span className="service-icon purple">🛠️</span>
            </div>

            <div className="service-content">
              <h3>Technical Capabilities</h3>
              <p>
                Advanced batching plants and expert teams ensuring precision,
                consistency, and quality in every batch we produce.
              </p>

              <a className="learn-more purple" href="#">
                Learn More →
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="service-card reveal delay-3">
            <div className="service-image">
              <img src={transport} alt="Transport and Pumping" />
              <span className="service-icon orange">🚚</span>
            </div>

            <div className="service-content">
              <h3>Transport & Pumping</h3>
              <p>
                Efficient transportation and pumping services ensuring timely
                delivery and uncompromised concrete quality on site.
              </p>

              <a className="learn-more orange" href="#">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
