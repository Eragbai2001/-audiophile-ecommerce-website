import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden h-screen flex flex-col md:bg-black">
      {/* Desktop Background - only on lg screens */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image-hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}></div>

      {/* Dark overlay for tablet only - not on desktop */}
      <div className="hidden md:block lg:hidden absolute inset-0 bg-black/40"></div>

      {/* Mobile Background Image - only visible on md:hidden */}
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Bitmap (3).png')",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}></div>

      {/* Mobile Centered Image - only visible on md:hidden */}
      <div className="md:hidden absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src="/Bitmap (3).png"
          alt="XX99 Mark II Headphones"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 w-full flex-1 flex items-center justify-center md:justify-center lg:justify-start px-6 md:px-12 lg:px-24">
        {/* Content Container - Centered on mobile/tablet, left-aligned on desktop */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left max-w-2xl">
          <p className="text-white/60 text-xs md:text-sm font-normal tracking-widest uppercase">
            New Product
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            XX99 Mark II
            <br />
            Headphones
          </h1>

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="flex justify-center lg:justify-start pt-4">
            <Button className="bg-[#D87D4E] hover:bg-[#E0945F] text-white text-xs md:text-sm font-bold tracking-widest uppercase h-12 md:h-14 px-6 md:px-8 rounded-none">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
