import { type CSSProperties } from "react";
import { wedding } from "../data/wedding";

const swayingFlowers = [
  { image: "champagne-rose.webp", left: "4%", top: "15%", size: 112, delay: "-1s" },
  { image: "midnight-hydrangea.webp", left: "9%", top: "61%", size: 104, delay: "-4s" },
  { image: "ivory-peony.webp", right: "1%", top: "8%", size: 112, delay: "-2s" },
  { image: "champagne-rose.webp", right: "2%", top: "41%", size: 98, delay: "-5s" },
  { image: "ivory-peony.webp", left: "3%", top: "77%", size: 94, delay: "-3s" },
  { image: "midnight-hydrangea.webp", right: "1%", top: "72%", size: 108, delay: "-6s" },
];

const fallingFlowers = [
  { image: "ivory-peony.webp", left: "4%", size: 60, duration: 24, delay: "-8s", driftA: "3vw", driftB: "-2vw", driftC: "6vw", drift: "8vw", rotate: "350deg" },
  { image: "champagne-rose.webp", left: "19%", size: 48, duration: 20, delay: "-15s", driftA: "-2vw", driftB: "4vw", driftC: "1vw", drift: "-5vw", rotate: "310deg" },
  { image: "midnight-hydrangea.webp", left: "34%", size: 68, duration: 27, delay: "-3s", driftA: "4vw", driftB: "-3vw", driftC: "5vw", drift: "8vw", rotate: "370deg" },
  { image: "ivory-peony.webp", left: "49%", size: 54, duration: 22, delay: "-12s", driftA: "-3vw", driftB: "-6vw", driftC: "2vw", drift: "-7vw", rotate: "330deg" },
  { image: "champagne-rose.webp", left: "64%", size: 62, duration: 25, delay: "-6s", driftA: "3vw", driftB: "6vw", driftC: "-2vw", drift: "6vw", rotate: "355deg" },
  { image: "midnight-hydrangea.webp", left: "78%", size: 56, duration: 21, delay: "-17s", driftA: "-3vw", driftB: "2vw", driftC: "-5vw", drift: "-8vw", rotate: "320deg" },
  { image: "ivory-peony.webp", left: "12%", size: 44, duration: 28, delay: "-10s", driftA: "2vw", driftB: "-4vw", driftC: "3vw", drift: "-3vw", rotate: "365deg" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-flower-sway" aria-hidden="true">
        {swayingFlowers.map(({ image, left, right, top, size, delay }, index) => {
          const flowerStyle = {
            "--bloom-left": left ?? "auto",
            "--bloom-right": right ?? "auto",
            "--bloom-top": top,
            "--bloom-size": `${size}px`,
            "--bloom-delay": delay,
            "--bloom-image": `url("/images/flowers/${image}")`,
          } as CSSProperties;

          return (
            <span key={index} style={flowerStyle}>
              {index === 0 && (
                <span className="hero-butterfly">
                  <span className="hero-butterfly-wing hero-butterfly-wing-left" />
                  <span className="hero-butterfly-wing hero-butterfly-wing-right" />
                  <span className="hero-butterfly-body" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <div className="hero-flower-fall" aria-hidden="true">
        {fallingFlowers.map(({ image, left, size, duration, delay, driftA, driftB, driftC, drift, rotate }, index) => {
          const flowerStyle = {
            "--fall-image": `url("/images/flowers/${image}")`,
            "--fall-left": left,
            "--fall-size": `${size}px`,
            "--fall-duration": `${duration}s`,
            "--fall-delay": delay,
            "--fall-drift-a": driftA,
            "--fall-drift-b": driftB,
            "--fall-drift-c": driftC,
            "--fall-drift": drift,
            "--fall-rotate": rotate,
          } as CSSProperties;

          return <span key={index} style={flowerStyle} />;
        })}
      </div>
      <div className="hero-content">

        <p className="hero-eyebrow hero-reveal hero-delay-1">
          Together with their families
        </p>

        <h1 className="hero-title hero-reveal hero-delay-2">
          <span>{wedding.groom}</span>
          <span className="hero-ampersand">&</span>
          <span>{wedding.bride}</span>
        </h1>

        <p className="hero-subtitle hero-reveal hero-delay-3">
          {wedding.subtitle}
        </p>

        <div className="hero-date hero-reveal hero-delay-4">
          <span>{wedding.day}</span>
          <span>•</span>
          <span>{wedding.date}</span>
        </div>

        <div className="hero-divider hero-reveal hero-delay-4" />

        <p className="hero-invitation hero-reveal hero-delay-5">
          {wedding.invitation}
        </p>

      <a href="#our-story" className="hero-button hero-reveal hero-delay-6" >
        Explore Invitation
    </a>

        <div className="hero-scroll hero-reveal hero-delay-6">
          <span>Scroll to explore</span>
          <span className="hero-scroll-line" />
        </div>

      </div>
    </section>
  );
}
