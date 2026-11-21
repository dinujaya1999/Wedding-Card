import { wedding } from "../data/wedding";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
export default function WeddingDetails() {
  return (
   <section className="details-section"id="details">
      <ScrollReveal>
      <div className="details-content">
        <p className="section-eyebrow">The Wedding Day</p>

        <h2>Join us as we celebrate</h2>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">
              {wedding.day}
            </span>
            <span className="detail-value">
              {wedding.date}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Venue</span>
            <span className="detail-value">
              {wedding.venue}
            </span>
            <span className="detail-value">
              {wedding.location}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Time</span>
            <span className="detail-value">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}