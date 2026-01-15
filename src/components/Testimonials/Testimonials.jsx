import "./Testimonials.css";

const TESTIMONIALS = [
  {
    text: `We hereby affirm our sincere appreciation to Veera Concrete's cooperation to excellent service in supplying quality concrete to our Ascendas Project, in timely, safe and professional manner and in accordance with strict compliance of client's rules and regulations. With this regard, we are looking forward to a continuous working relationship with Veera Concrete presently and in the future.`,
    name: "Vivek Kumar",
    role: "Project Incharge",
    company: "Shapoorji Pallonji and Co. Pvt Ltd",
    project: "ASCENDAS-V PARK-BLOCK-A PHASE-1",
  },
  {
    text: `Kalpataru Projects International Limited is pleased to acknowledge that M/s Veera Concrete has successfully operational in supplying ready mix concrete at Prestige Tranquil Site in professional manners. We take this opportunity to express our great appreciation to all your workforce who were actively involved in the job for their dedication and commitment.`,
    name: "E. Naganna",
    role: "DGM",
    company: "Kalpataru Projects International Ltd",
    project: "Prestige Tranquil Site – Kokapet",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        {/* HEADER */}
        <div className="testimonials-header reveal">
          <span className="testimonials-pill">
            Client Testimonials
          </span>
          <h2>What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Happy families and successful partnerships
          </p>
          <span className="testimonials-underline" />
        </div>

        {/* CARDS */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="testimonial-card reveal"
              style={{ animationDelay: `${i * 0.12}s` }}
              key={i}
            >
              {/* quote icon */}
              <div className="quote-icon">❝</div>

              {/* stars */}
              <div className="stars">
                ★★★★★
              </div>

              {/* text */}
              <p className="testimonial-text">
                “{t.text}”
              </p>

              <div className="divider" />

              {/* footer */}
              <div className="testimonial-footer">
                <strong>{t.name}</strong>
                <span>
                  {t.role} – {t.company}
                </span>
                <span className="testimonial-project">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
