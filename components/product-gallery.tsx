"use client";

import Image from "next/image";

interface GalleryItem {
  imageSrc: string;
  imageAlt: string;
}

interface ProductGalleryProps {
  gallery: GalleryItem[];
}

export function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16 px-6 md:px-8">
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        <div
          className="grid grid-cols-1 gap-6 md:gap-8"
          style={{ gridTemplateColumns: "1fr 1.5fr" }}>
          {/* Left column - 2 images stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* First image */}
            {gallery[0] && (
              <div className="rounded-lg overflow-hidden">
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={gallery[0].imageSrc}
                    alt={gallery[0].imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Second image */}
            {gallery[1] && (
              <div className="rounded-lg overflow-hidden">
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={gallery[1].imageSrc}
                    alt={gallery[1].imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right column - 1 large image */}
          {gallery[2] && (
            <div className="rounded-lg overflow-hidden">
              <div className="relative w-full h-full min-h-96 md:min-h-full">
                <Image
                  src={gallery[2].imageSrc}
                  alt={gallery[2].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
