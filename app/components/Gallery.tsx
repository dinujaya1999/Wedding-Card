import GalleryLightbox from "./Gallerylightbox";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
const photos = [
  {
    src: "/images/gallery/photo-01.jpg",
    alt: "Wedding moment",
  },
  {
    src: "/images/gallery/photo-02.jpg",
    alt: "Wedding moment",
  },
  {
    src: "/images/gallery/photo-03.jpg",
    alt: "Wedding moment",
  },
  {
    src: "/images/gallery/photo-04.jpg",
    alt: "Wedding moment",
  },
];

export default function Gallery() {
  return (
    <section
  className="gallery-section"id="gallery">
      <ScrollReveal>
      <div className="gallery-header">
        <p className="section-eyebrow">Our Moments</p>

        <h2>
          A few moments
          <br />
          from our journey
        </h2>
      </div>

      <GalleryLightbox photos={photos} />
      </ScrollReveal>
    </section>
  );
}