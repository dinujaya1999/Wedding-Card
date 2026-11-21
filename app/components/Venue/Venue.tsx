import { wedding } from "../../data/wedding";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Venue.module.css";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  wedding.mapQuery
)}`;

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  wedding.mapQuery
)}&output=embed`;

export default function Venue() {
  return (
   <section className={styles.section}   id="venue">
      <ScrollReveal>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className="section-eyebrow">The Venue</p>

          <h2>
            Cinnamon Life
            <br />
            at City of Dreams
          </h2>

          <div className={styles.divider} />

          <p className={styles.address}>
            No. 01 Justice Akbar Mawatha
            <br />
            Colombo 00200, Sri Lanka
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Get Directions
          </a>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.map}
          aria-label="Open Cinnamon Life in Google Maps"
        >
          <iframe
            src={mapEmbedUrl}
            loading="lazy"
            title="Cinnamon Life location"
            className={styles.mapFrame}
          />

          <div className={styles.mapOverlay}>
            <span>Open Map</span>
          </div>
        </a>
      </div>
      </ScrollReveal>
    </section>
  );
}