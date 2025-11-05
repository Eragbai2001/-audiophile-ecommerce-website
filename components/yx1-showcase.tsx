import Link from "next/link";

export function YX1Showcase() {
  return (
    <section className="w-full flex justify-center py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 bg-white">
      <div className="w-full overflow-hidden" style={{ maxWidth: "1510px" }}>
        <div className="w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-earphones-yx1-CNReRHzMH9Daxg9AqXlr5P4ZRQb7Kp.jpg"
              alt="YX1 Earphones"
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left px-6 md:px-10 py-10 md:py-0"
            style={{ backgroundColor: "#F1F1F1" }}>
            <h2
              className="font-manrope font-bold uppercase text-black"
              style={{
                fontSize: "28px",
                lineHeight: "100%",
                letterSpacing: "2px",
              }}>
              YX1 EARPHONES
            </h2>

            <Link href="/earphones">
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
