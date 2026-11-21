
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
export default function OurStory() {
  return (
    <section id="our-story" className="story-section">
      <ScrollReveal>
        <div className="story-content">
          <p className="section-eyebrow">Our Story</p>

          <h2>
            Two lives,
            <br />
            one beautiful journey.
          </h2>

          <div className="story-divider" />

          <p className="story-text">
            Every love story is unique. Ours is filled with moments,
            laughter, memories, and a journey that brought us here.
          </p>

          <p className="story-text">
            Now, we are excited to begin the next chapter together
            and would love to share this special day with the people
            who mean the most to us.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}