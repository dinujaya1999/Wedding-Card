"use client";

import { useEffect, useState } from "react";
import styles from "./SectionNavigator.module.css";

const sections = [
  "hero",
  "our-story",
  "details",
//   "gallery",
  "venue",
  "rsvp",
];

export default function SectionNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCurrentSection = () => {
      const scrollY = window.scrollY;
      const viewportMiddle =
        scrollY + window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((id, index) => {
        const element = document.getElementById(id);

        if (!element) return;

        const top =
          element.getBoundingClientRect().top + scrollY;

        const bottom = top + element.offsetHeight;

        // Is the middle of the viewport inside this section?
        if (
          viewportMiddle >= top &&
          viewportMiddle <= bottom
        ) {
          closestIndex = index;
          closestDistance = 0;
          return;
        }

        // Otherwise find the closest section
        const distance =
          viewportMiddle < top
            ? top - viewportMiddle
            : viewportMiddle - bottom;

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    updateCurrentSection();

    window.addEventListener("scroll", updateCurrentSection, {
      passive: true,
    });

    window.addEventListener("resize", updateCurrentSection);

    return () => {
      window.removeEventListener(
        "scroll",
        updateCurrentSection
      );

      window.removeEventListener(
        "resize",
        updateCurrentSection
      );
    };
  }, []);

 const scrollToSection = (index: number) => {
  if (index < 0 || index >= sections.length) return;

  const element = document.getElementById(sections[index]);
  if (!element) return;

  const start = window.scrollY;
  const target =
    element.getBoundingClientRect().top + window.scrollY;

  const distance = target - start;
  const duration = 200;

  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const eased = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(
      0,
      start + distance * eased
    );

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

  const goPrevious = () => {
    scrollToSection(currentIndex - 1);
  };

  const goNext = () => {
    scrollToSection(currentIndex + 1);
  };

  // Don't show navigation while we're on Hero
  if (currentIndex === 0) {
    return null;
  }

  return (
    <div className={styles.navigator}>
      <button
        type="button"
        className={styles.arrow}
        onClick={goPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous section"
      >
        ↑
      </button>

      <div className={styles.line} />

      <button
        type="button"
        className={styles.arrow}
        onClick={goNext}
        disabled={currentIndex === sections.length - 1}
        aria-label="Next section"
      >
        ↓
      </button>
    </div>
  );
}