"use client";

import { useState, type CSSProperties } from "react";
import styles from "./InvitationOpening.module.css";

export default function InvitationOpening() {
  const [stage, setStage] = useState<
    "closed" | "sealLift" | "sealCrack" | "ignition" | "opening" | "transitioning" | "finished"
  >("closed");

const handleOpen = () => {
  if (stage !== "closed") return;

  setStage("sealLift");

  setTimeout(() => {
    setStage("sealCrack");
  }, 320);

  setTimeout(() => {
    setStage("ignition");
  }, 1320);

  setTimeout(() => {
    setStage("opening");
  }, 1520);

  setTimeout(() => {
    setStage("transitioning");
  }, 2480);

  setTimeout(() => {
    setStage("finished");
  }, 5880);
};

  return (
    <section
      className={`${styles.opening} ${
        stage === "opening" || stage === "transitioning" || stage === "finished"
          ? styles.openingActive
          : ""
      } ${stage === "ignition" ? styles.ignition : ""} ${
        stage === "transitioning" ? styles.transitioning : ""
      } ${stage === "finished" ? styles.finished : ""}`}
    >
      {/* Background image */}
      <div className={styles.backgroundImage} />
      <div className={`${styles.heavenDoor} ${stage === "transitioning" ? styles.heavenDoorOpen : ""}`} aria-hidden="true" />
      <div className={`${styles.firelight} ${stage === "ignition" || stage === "opening" || stage === "transitioning" ? styles.firelightActive : ""}`} aria-hidden="true">
        <svg className={styles.phoenix} viewBox="0 0 480 520" role="presentation">
          <defs>
            <linearGradient id="phoenixFire" x1="0" y1="1" x2="0.7" y2="0"><stop stopColor="#ff3b12"/><stop offset=".48" stopColor="#ff9b25"/><stop offset="1" stopColor="#fff3a6"/></linearGradient>
            <filter id="phoenixGlow" x="-60%" y="-50%" width="220%" height="220%"><feGaussianBlur stdDeviation="9" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <g fill="url(#phoenixFire)" filter="url(#phoenixGlow)">
            <path d="M240 268c-30-42-24-92 1-132 3 34 22 48 20 75 24-30 27-61 12-99 52 52 53 111 19 157 24-15 38-37 44-65 20 55-5 101-43 124l-9 72-30-37-20 40-20-40-30 37-8-72c-40-23-65-69-45-124 6 28 20 50 44 65-34-46-33-105 19-157-15 38-12 69 12 99-2-27 17-41 20-75 25 40 31 90 1 132z"/>
            <path d="M215 244C151 211 94 155 42 79c79 22 133 61 172 126-22-77-16-137 17-185 28 77 28 146 9 205l-22 50zm50-19c39-65 93-103 173-126-51 76-109 132-173 165l-22-21c-19-59-19-128 9-205 33 48 39 108 17 185z"/>
            <path d="M219 346c-47 40-72 84-81 135 48-26 83-57 105-95zm42 0c47 40 72 84 81 135-48-26-83-57-105-95z"/>
          </g>
          <path d="M240 195c-15 28-17 53 0 75 17-22 15-47 0-75z" fill="#fff8c7"/>
        </svg>
        {Array.from({ length: 30 }, (_, index) => <span key={index} />)}
      </div>
      <div className={styles.sideArch} aria-hidden="true">
        <span className={styles.archFrame} />
        <span className={styles.floralSprig} />
      </div>
      <div className={`${styles.sideArch} ${styles.sideArchRight}`} aria-hidden="true">
        <span className={styles.archFrame} />
        <span className={styles.floralSprig} />
      </div>

      <div className={styles.content}>
        {/* <p className={styles.eyebrow}>
          You are cordially invited
        </p>

        <h1>
          To celebrate
          <br />
          a beautiful beginning
        </h1> */}

        <div
          className={styles.envelopeWrapper}
          onClick={handleOpen}
        >
          <div className={styles.envelope}>
            <img src="/images/invitation/envelope-body.png" alt="" className={styles.envelopeBody} />
            <img src="/images/invitation/invitation-card.png" alt="Wedding invitation" className={styles.invitationCard} />
            <img src="/images/invitation/Flap.png" alt="" className={styles.envelopeFlap} />
            <div className={`${styles.waxSeal} ${stage === "sealLift" ? styles.sealLift : ""} ${stage === "sealCrack" ? styles.sealCrack : ""} ${stage === "ignition" || stage === "opening" || stage === "transitioning" || stage === "finished" ? styles.sealBreak : ""}`} aria-hidden="true">
              <img src="/images/invitation/wax-seal2.png" alt="" />
              <span className={styles.sealPieceLeft} />
              <span className={styles.sealPieceRight} />
              <span className={styles.sealCrackLine} />
            </div>
            <div className={`${styles.sealSparks} ${stage === "ignition" || stage === "opening" || stage === "transitioning" ? styles.sealSparksActive : ""}`} aria-hidden="true">
              {Array.from({ length: 32 }, (_, index) => {
                const angle = (index / 32) * Math.PI * 2;
                const distance = 12 + ((index * 7) % 19);
                const sparkStyle = {
                  "--spark-x": `${Number((Math.cos(angle) * distance).toFixed(2))}%`,
                  "--spark-y": `${Number((Math.sin(angle) * distance * 0.65).toFixed(2))}%`,
                  "--spark-delay": `${(index % 8) * 35}ms`,
                  "--spark-size": `${2 + (index % 3)}px`,
                } as CSSProperties;
                return <span key={index} style={sparkStyle} />;
              })}
            </div>
          </div>
        </div>

        <p className={styles.openText}>
          Open invitation
        </p>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./InvitationOpening.module.css";

// type OpeningPhase = "ready" | "playing" | "finished";

// const ANIMATION_DURATION_MS = 4000;

// export default function InvitationOpening() {
//   const [phase, setPhase] = useState<OpeningPhase>("ready");
//   const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const handleOpen = () => {
//     if (phase !== "ready") return;
//     setPhase("playing");
//   };

//   const handleAnimationLoaded = () => {
//     if (finishTimer.current) clearTimeout(finishTimer.current);
//     finishTimer.current = setTimeout(() => {
//       setPhase("finished");
//     }, ANIMATION_DURATION_MS);
//   };

//   const handleAnimationError = () => {
//     if (finishTimer.current) clearTimeout(finishTimer.current);
//     setPhase("ready");
//   };

//   useEffect(() => {
//     return () => {
//       if (finishTimer.current) clearTimeout(finishTimer.current);
//     };
//   }, []);

//   return (
//     <section
//       className={`${styles.opening} ${phase === "finished" ? styles.finished : ""}`}
//       aria-label="Wedding invitation opening"
//     >
//       <div className={styles.backgroundImage} aria-hidden="true" />

//       <div className={styles.sideArch} aria-hidden="true">
//         <span className={styles.archFrame} />
//         <span className={styles.floralSprig} />
//       </div>
//       <div className={`${styles.sideArch} ${styles.sideArchRight}`} aria-hidden="true">
//         <span className={styles.archFrame} />
//         <span className={styles.floralSprig} />
//       </div>

//       <div className={styles.content}>
//         {phase === "ready" && (
//           <>
//             <button
//               type="button"
//               className={styles.envelopeButton}
//               onClick={handleOpen}
//               aria-label="Open wedding invitation"
//             >
//               <img
//                 className={styles.envelopePreview}
//                 src="/images/invitation/envelope-preview.png"
//                 alt="A closed ivory wedding envelope with a gold wax seal"
//                 draggable={false}
//               />
//             </button>
//             <p className={styles.openText}>Open invitation</p>
//           </>
//         )}
//       </div>

//       {phase === "playing" && (
//         <div className={styles.animationStage} aria-live="polite">
//           <img
//             className={styles.openingAnimation}
//             src="/images/invitation/golden-envelope-opening.gif"
//             alt="The gold-sealed wedding envelope opens and reveals the invitation card"
//             onLoad={handleAnimationLoaded}
//             onError={handleAnimationError}
//             draggable={false}
//           />
//         </div>
//       )}
//     </section>
//   );
// }
