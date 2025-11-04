export function ZX9Showcase() {
  return (
    <section className="w-full flex justify-center py-6 md:py-8 lg:py-1 px-4 md:px-6 lg:px-8 bg-white">
      <div className="w-full rounded-lg overflow-hidden relative" style={{ maxWidth: "1510px" }}>
        <div
          className="w-full relative px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-stretch gap-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%207-7sbIPef3IH3xHdQXeqiT3D0rFR2uGa.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
          }}
        >
          <div className="w-full md:w-1/2 relative" style={{ position: "relative" }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%2838%29-QugXJ9RGM27fMguw6dxQq5U6ITVA8I.png"
              alt="ZX9 Speaker"
              style={{
                width: "410.23px",
                height: "493px",
                objectFit: "contain",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left py-12 md:py-16 lg:py-20">
            <h1
              className="font-manrope font-bold uppercase text-white"
              style={{
                fontSize: "56px",
                lineHeight: "58px",
                letterSpacing: "2px",
              }}
            >
              ZX9 SPEAKER
            </h1>

            <p
              className="font-manrope font-normal text-white"
              style={{
                fontSize: "15px",
                lineHeight: "25px",
                letterSpacing: "0px",
              }}
            >
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>

            <button className="bg-black text-white px-8 py-3 font-manrope font-bold text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
