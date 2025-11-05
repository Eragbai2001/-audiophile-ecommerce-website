"use client";

export function AboutShowcase() {
  return (
    <section className="w-full py-12 md:py-20 px-6 md:px-8 bg-white">
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full md:flex-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bitmap%20%284%29-36fLmUH1K2CDpfIeybpQ9WelQXlAIh.png"
              alt="Man wearing premium headphones"
              className="w-full rounded-lg"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-8 md:gap-6">
            <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-[44px] md:leading-[58px] tracking-[1.43px] uppercase text-black text-center md:text-left">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>

            <p className="font-manrope font-normal text-base leading-[25px] tracking-0 text-black/50 text-center md:text-left">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
