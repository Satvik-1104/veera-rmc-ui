import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-bg" />

      <div className="container contact-cta-inner">
        {/* HEADER */}
        <div className="contact-cta-header reveal">
          <span className="contact-cta-pill">Get in Touch</span>

          <h2>
            Have a Project in Mind?
          </h2>

          <h4>Let’s get to work.</h4>

          <p>
            Partner with Veera Concrete for your next construction project.
            Our team is ready to deliver quality, efficiency, and exceptional service.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="contact-cta-actions reveal delay-1">
          <button className="cta-primary">
            Get a Quote →
          </button>

          <Link to="/apply" className="cta-secondary">
            Fill Application →
          </Link>

        </div>

        {/* INFO CARDS */}
        <div className="contact-cards reveal delay-2">
          <a href="tel:+919876543210" className="contact-card">
            <span>📞</span>
            <h5>Call Us</h5>
            <p>+91 98765 43210</p>
          </a>

          <a href="mailto:info@veeraconcrete.com" className="contact-card">
            <span>✉️</span>
            <h5>Email Us</h5>
            <p>info@veeraconcrete.com</p>
          </a>

          <a
            href="https://maps.google.com/?q=Hyderabad,Telangana"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>📍</span>
            <h5>Visit Us</h5>
            <p>Hyderabad, Telangana</p>
          </a>
        </div>
      </div>
    </section>
  );
}
