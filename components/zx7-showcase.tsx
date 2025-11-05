import Link from "next/link";

export function ZX7Showcase() {
  return (
    <section className="w-full flex justify-center py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 bg-white">
      <div className="w-full overflow-hidden" style={{ maxWidth: "1510px" }}>
        <div
          className="w-full relative py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8"
          style={{
            backgroundImage: "url('/image-speaker-zx7.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h2
              className="font-manrope font-bold uppercase text-black"
              style={{
                fontSize: "28px",
                lineHeight: "100%",
                letterSpacing: "2px",
              }}>
              ZX7 SPEAKER
            </h2>

            <Link href="/speakers/zx7-speaker">
              <button
                className="border-2 border-black text-black px-6 py-3 font-manrope font-bold uppercase hover:bg-black hover:text-white transition-all"
                style={{
                  fontSize: "13px",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                }}>
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
