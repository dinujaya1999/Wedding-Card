"use client";

import { FormEvent, useState } from "react";
import styles from "./RSVP.module.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
   <section className={styles.section}id="rsvp">
    <ScrollReveal>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className="section-eyebrow">RSVP</p>

          <h2>
            Will you
            <br />
            join us?
          </h2>

          <p className={styles.intro}>
            Please let us know if you will be celebrating
            with us.
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>

            <h3>Thank you</h3>

            <p>
              Your response has been received.
              <br />
              We look forward to celebrating with you.
            </p>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.field}>
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Will you be attending?</label>

              <div className={styles.options}>
                <label className={styles.option}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    required
                  />
                  <span>Joyfully accepts</span>
                </label>

                <label className={styles.option}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                  />
                  <span>Regretfully declines</span>
                </label>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="guests">
                Number of Guests
              </label>

              <select id="guests" name="guests" defaultValue="1">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                Message <span>(Optional)</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave a message for the couple..."
              />
            </div>

            <button
              type="submit"
              className={styles.button}
            >
              Send RSVP
            </button>
          </form>
        )}
      </div>
      </ScrollReveal>
    </section>
  );
}