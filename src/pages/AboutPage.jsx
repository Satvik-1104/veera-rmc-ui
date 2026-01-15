import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./AboutPage.css";

/* ================= SERVICE CARD COMPONENT ================= */

function ServiceCard({ icon, color, title, children, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`about-service-card ${open ? "open" : ""}`}>
      <div className={`service-icon-aboutpage ${color}`}>{icon}</div>

      <h3>{title}</h3>

      <div className="service-text-wrapper">
        <p>{children}</p>
      </div>

      <button
        className={`read-more-btn ${color}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "Read Less ←" : "Read More →"}
      </button>
    </div>
  );
}

/* ================= ABOUT PAGE ================= */

export default function AboutPage() {

  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    const items = document.querySelectorAll(".timeline-item");

    if (!timeline) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          timeline.classList.add("animate");

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("active");
            }, index * 500);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(timeline);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="aboutpage-hero section">
        <div className="container aboutpage-hero-layout">
          {/* LEFT */}
          <div className="aboutpage-hero-content">
            <span className="about-pill reveal">About Veera Concrete</span>

            <h1 className="aboutpage-title reveal delay-1">
              We do not manufacture, <span>We CREATE!</span>
            </h1>

            <p className="aboutpage-text reveal delay-2">
              VEERA Concrete is a company marked by apparent features, firm
              character, winning philosophy, market confidence, and endeavors
              toward perfection in all segments of its operations. We are a
              start-up Growth-oriented company with modern production facilities
              for ready-mix concrete and specialized concrete in construction.
            </p>

            <p className="aboutpage-text reveal delay-3">
              We have risen above the averages accepted in our field through
              innovative policies, constant investments, and a good sense of
              finding opportunities. Our company is now recognized and renowned
              in our native market.
            </p>
          </div>

          {/* RIGHT */}
          <div className="aboutpage-hero-image reveal delay-2">
            <img src="/about-image.png" alt="Veera Concrete Facility" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="aboutpage-services section">
        <div className="container">
          <div className="services-header-aboutpage reveal">
            <h2 className="aboutpage-services-title">Our Services</h2>
          </div>

          <div className="about-services-grid">
            <ServiceCard
              icon="📈"
              color="orange"
              title="Fostering Growth and providing guidance"
              delay={1}
            >
              The path to genuine success involves collaborating with top
              professionals across all construction fields. Our team of experts
              is dedicated to continuously upgrading our knowledge by embracing
              new developments, opinions, and findings. Our mission's core is the
              unwavering commitment to enhancing user experience. We strive to
              provide our customers with the finest products while offering
              personalized counselling and sales activities tailored to
              construction needs. Our dedication to staying ahead in
              construction technology ensures we always deliver the best
              solutions to our valued customers. We prioritize our counselling
              service and technical support as they allow us to understand the
              needs of our users and implement their insights to develop improved
              solutions.
            </ServiceCard>

            <ServiceCard
              icon="🚀"
              color="green"
              title="Embracing Growth, advancement, and leadership"
              delay={2}
            >
              We have a strong history of accomplishments and Growth in the
              construction industry, but we continually strive to improve.
              Progress is crucial, and we eagerly embrace new challenges. We are
              continuously advancing in all aspects of our work, making ongoing
              investments in our team's development and new technologies. We
              also focus on building a solid brand presence in our local
              community. Our journey began in 2018 with the establishment of
              dedicated facilities. Since then, we have been dedicated to
              upgrading all our production capacities, expanding our trading
              capabilities, and creating a new company and brand identity.
            </ServiceCard>

            <ServiceCard
              icon="🧱"
              color="orange"
              title="Cornerstone of progress and quality"
              delay={3}
            >
              Our operations are firmly anchored in our environment, deriving
              inspiration, strength, and the essence of our productivity. Our
              company's foundation extends beyond ordinary manufacturing,
              drawing on decades of tradition, experience, and unwavering
              dedication to seize business opportunities. We confidently oversee
              the entire production process, ensuring unwavering quality by
              sourcing top-notch raw materials and closely monitoring every
              stage at our facilities.
            </ServiceCard>

            <ServiceCard
              icon="📚"
              color="green"
              title="To grow, we must seek knowledge"
              delay={4}
            >
              Our in-house research and development team is dedicated to
              improving our products and creating innovative solutions for the
              construction industry. Innovation drives our progress and
              competitive advantage, while scientific research ensures we meet
              high construction standards. We also focus on developing our
              personnel to facilitate knowledge transfer across all operational
              areas.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="aboutpage-timeline section">
        <div className="container">
          <h2 className="aboutpage-services-title reveal">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-line">
              <span className="timeline-progress" />
            </div>

            <div className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card"> 

                <h4>2018 — Establishment and Initial Growth</h4>

                <ul>
                  <li>
                    <strong>Description:</strong> Veera Concrete was founded by a team of
                    passionate, experienced entrepreneurs with a shared vision of providing
                    superior concrete solutions to the industry.
                  </li>
                  <li>
                    <strong>Key Milestones:</strong> Launch of the first and second captive
                    plants, marking the beginning of Veera's journey in the concrete
                    industry.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card"> 
                <h4>2019 — Expansion Phase</h4>
                <ul>
                  <li>
                    <strong>Description:</strong> Veera Concrete expanded its operations, launching the third and fourth captive plants. The company continued to serve diverse clients, including corporates, developers, builders, contractors, and infrastructure projects.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card"> 
                <h4>2020-2021 — Transition to Commercial Operations</h4>
                <ul>
                  <li>
                    <strong>Description:</strong> Post-COVID lockdown, Veera Concrete transitioned from captive plants to commercial plants, marking a significant shift in its business model. The first and second commercial plants were launched in June and August 2020, respectively, followed by the third commercial plant in February 2021.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card"> 
                <h4>2022-2023 — Rapid Commercial Expansion</h4>
                <ul>
                  <li>
                    <strong>Description:</strong> Veera Concrete continued its rapid expansion, launching the fourth (Bachupally), fifth (Rajendra Nagar), and sixth (Kokapet) commercial plants in 2022. In 2023, Veera added two more captive plants to its portfolio.
                  </li>
                  <li>
                    <strong>Current Status:</strong> Veera now operates five commercial plants (Gandi Maisamma, Bachupally, Rajendra Nagar, Kokapet, and Patancheru) and two captive plants, reinforcing its position as a leading and preferred supplier of concrete.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card"> 
                <h4>Ongoing — Customer Engagement and Continuous Improvement</h4>
                <ul>
                  <li>
                    <strong>Description:</strong> Veera Concrete values customer feedback and engagement to improve its services and offerings continuously.
                  </li>
                  <li>
                    <strong>Interactive Features:</strong> Regular feedback collection, responsive customer service, and interactive platforms for customers to stay updated on company news, products, and industry trends.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}