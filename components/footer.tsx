"use client";

export function Footer() {
  return (
    <footer className="w-full bg-black">
      {/* Orange accent bar - small, left-aligned */}
      <div className=" hidden lg:block  ml-60 h-1 w-[101px] bg-[#D87D4A] "></div>

      {/* Footer content */}
      <div className="mx-auto w-full px-6 py-16 lg:px-60">
        {/* Desktop layout */}
        <div className="hidden lg:flex lg:flex-col lg:gap-12">
          {/* Top row: Logo + Navigation */}
          <div className="flex items-center justify-between">
            {/* Logo and nav in one row */}
            <div className="flex items-center gap-16">
              <h2
                className="font-manrope text-2xl font-bold text-white"
                style={{ width: "143px", height: "25px" }}>
                audiophile
              </h2>
            </div>
            {/* Navigation - flex row */}
            <nav className="flex gap-8 font-manrope text-sm font-bold uppercase tracking-wider text-white">
              <a href="/" className="transition-colors hover:text-[#D87D4A]">
                Home
              </a>
              <a
                href="/headphones"
                className="transition-colors hover:text-[#D87D4A]">
                Headphones
              </a>
              <a
                href="/speakers"
                className="transition-colors hover:text-[#D87D4A]">
                Speakers
              </a>
              <a
                href="/earphones"
                className="transition-colors hover:text-[#D87D4A]">
                Earphones
              </a>
            </nav>
          </div>

          {/* Bottom section: Description and Copyright */}
          <div className="flex justify-between items-flex-end gap-8">
            <p className="font-manrope text-sm font-normal leading-relaxed text-gray-400 max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <div className="flex flex-col justify-end gap-6">
              <div className="flex gap-4 ">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-all hover:opacity-80"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                      "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "brightness(0) invert(1)")
                  }>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path%20%281%29-d3Y9Nw3Cs3J2PtrP8zYFJ8f0o5Anos.png"
                    alt="Facebook"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="transition-all hover:opacity-80"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                      "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "brightness(0) invert(1)")
                  }>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shape-G0hPbMxgMKOgZzaC7Ift1GGvfzcRVI.png"
                    alt="Twitter"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-all hover:opacity-80"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                      "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "brightness(0) invert(1)")
                  }>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path-Fp01rchY917qge8oriv9WLMSR6NvGg.png"
                    alt="Instagram"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <p className="font-manrope text-sm font-bold text-gray-400">
            Copyright 2021. All Rights Reserved
          </p>
        </div>

        {/* Tablet layout - same as desktop */}
        <div className="hidden md:flex md:flex-col md:gap-12 lg:hidden">
          {/* Top row: Logo + Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex  flex-col items-start gap-12">
              <h2
                className="font-manrope text-2xl font-bold text-white"
                style={{ width: "143px", height: "25px" }}>
                audiophile
              </h2>

              {/* Navigation - flex row */}
              <nav className="flex gap-8 font-manrope text-sm font-bold uppercase tracking-wider text-white">
                <a href="/" className="transition-colors hover:text-[#D87D4A]">
                  Home
                </a>
                <a
                  href="/headphones"
                  className="transition-colors hover:text-[#D87D4A]">
                  Headphones
                </a>
                <a
                  href="/speakers"
                  className="transition-colors hover:text-[#D87D4A]">
                  Speakers
                </a>
                <a
                  href="/earphones"
                  className="transition-colors hover:text-[#D87D4A]">
                  Earphones
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom section: Description and Copyright */}
          <div className="flex justify-between items-flex-end gap-8">
            <p className="font-manrope text-sm font-normal leading-relaxed text-gray-400">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>
          <div className="flex justify-between items-center">
            {/* Copyright */}
            <p className="font-manrope text-sm font-bold text-gray-400">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex gap-4 ">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-all hover:opacity-80"
                style={{ filter: "brightness(0) invert(1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter =
                    "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(0) invert(1)")
                }>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path%20%281%29-d3Y9Nw3Cs3J2PtrP8zYFJ8f0o5Anos.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-all hover:opacity-80"
                style={{ filter: "brightness(0) invert(1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter =
                    "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(0) invert(1)")
                }>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shape-G0hPbMxgMKOgZzaC7Ift1GGvfzcRVI.png"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-all hover:opacity-80"
                style={{ filter: "brightness(0) invert(1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter =
                    "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(0) invert(1)")
                }>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path-Fp01rchY917qge8oriv9WLMSR6NvGg.png"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {/* Logo */}
          <h2
            className="font-manrope text-2xl font-bold text-white text-center"
            style={{ width: "143px", height: "25px" }}>
            audiophile
          </h2>

          {/* Navigation - vertical */}
          <nav className="flex flex-col items-center gap-4 font-manrope text-sm font-bold uppercase tracking-wider text-white">
            <a href="/" className="transition-colors hover:text-[#D87D4A]">
              Home
            </a>
            <a
              href="/headphones"
              className="transition-colors hover:text-[#D87D4A]">
              Headphones
            </a>
            <a
              href="/speakers"
              className="transition-colors hover:text-[#D87D4A]">
              Speakers
            </a>
            <a
              href="/earphones"
              className="transition-colors hover:text-[#D87D4A]">
              Earphones
            </a>
          </nav>

          {/* Description */}
          <p className="font-manrope text-sm font-normal leading-relaxed text-gray-400 text-center">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>

          {/* Copyright */}
          <p className="font-manrope text-sm font-bold text-gray-400">
            Copyright 2021. All Rights Reserved
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="transition-all hover:opacity-80"
              style={{ filter: "brightness(0) invert(1)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                  "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(0) invert(1)")
              }>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path%20%281%29-d3Y9Nw3Cs3J2PtrP8zYFJ8f0o5Anos.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition-all hover:opacity-80"
              style={{ filter: "brightness(0) invert(1)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                  "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(0) invert(1)")
              }>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shape-G0hPbMxgMKOgZzaC7Ift1GGvfzcRVI.png"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-all hover:opacity-80"
              style={{ filter: "brightness(0) invert(1)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                  "brightness(0) saturate(100%) invert(56%) sepia(70%) saturate(466%) hue-rotate(336deg) brightness(95%) contrast(89%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(0) invert(1)")
              }>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Path-Fp01rchY917qge8oriv9WLMSR6NvGg.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
