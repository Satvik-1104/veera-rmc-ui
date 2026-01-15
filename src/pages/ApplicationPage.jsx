import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ApplicationPage.css";

export default function ApplicationPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="application-hero section">
        <div className="application-hero-overlay">
          <h1 className="reveal">Contact Us</h1>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="application-form section">
        <div className="container application-layout">
          {/* LEFT FORM */}
          <form className="application-form-box reveal">
            <label>Your name</label>
            <input type="text" />

            <label>Your email</label>
            <input type="email" />

            <label>Subject</label>
            <input type="text" />

            <label>Your message (optional)</label>
            <textarea rows="5" />

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>

          {/* RIGHT CONTENT */}
          <div className="application-info reveal delay-1">
            <p>
              VEERA Concrete is a company marked by apparent features, firm character, winning philosophy, market confidence, and endeavors toward perfection in all segments of its operations. We are a start-up Growth-oriented company with modern production facilities for ready-mix concrete and specialized concrete in construction. We have risen above the averages accepted in our field through innovative policies, constant investments, and a good sense of finding opportunities. Our company is now recognized and renowned in our native market.
            </p>

            <h4>Location</h4>
            <p className="location">Hyderabad</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
