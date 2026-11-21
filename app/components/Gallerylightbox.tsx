"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  photos: Photo[];
};

export default function GalleryLightbox({
  photos,
}: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const close = () => {
    setSelectedIndex(null);
  };

  const next = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % photos.length
    );
  };

  const previous = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`gallery-item ${index === 0 ? "gallery-item-large" : ""} ${
              index === 3 ? "gallery-item-wide" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className="gallery-image"
            />
          </button>
        ))}
      </div>

      {isOpen && selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="lightbox-image-wrapper"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              fill
              sizes="90vw"
              className="lightbox-image"
            />
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}