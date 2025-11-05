import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden h-[640px] md:h-[720px] lg:min-h-screen flex flex-col bg-[#191919]">
      {/* Desktop Background - covers full section including navigation */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image-hero.jpg')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}></div>

      {/* Tablet Background - black bg with image on top */}
      <div className="hidden md:block lg:hidden absolute inset-0 bg-black"></div>
      <div
        className="hidden md:block lg:hidden absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Bitmap (20).png')",
          backgroundPosition: "center 60%",
          backgroundSize: "auto 90%",
        }}></div>

      {/* Mobile Background - black bg with image on top */}
      <div className="md:hidden absolute inset-0 bg-black"></div>
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Bitmap (21).png')",
          backgroundPosition: "center 60%",
          backgroundSize: "contain",
        }}></div>

      {/* Navigation - part of hero section, no separate background */}
      <div className="relative z-50">
        <Navigation />
      </div>

      <div className="relative z-10 w-full flex-1 flex items-center justify-center md:justify-center lg:justify-start px-6 md:px-12 lg:px-24">
        {/* Content Container - Centered on mobile/tablet, left-aligned on desktop */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left max-w-2xl">
          {/* NEW PRODUCT */}
          <p
            className="text-white/60 uppercase"
            style={{
              fontFamily: "Manrope",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "10px",
            }}>
            New Product
          </p>

          {/* XX99 MARK II HEADPHONES */}
          <h1
            className="text-white uppercase"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "56px",
              lineHeight: "58px",
              letterSpacing: "2px",
            }}>
            XX99 Mark II
            <br />
            Headphones
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-white/75 max-w-md mx-auto lg:mx-0"
            style={{
              fontFamily: "Manrope",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "25px",
              letterSpacing: "0px",
            }}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* SEE PRODUCT BUTTON */}
          <div className="flex justify-center lg:justify-start pt-4">
            <Link href="/headphones/xx99-mark-two-headphones">
              <Button
                className="bg-[#D87D4E] hover:bg-[#E0945F] text-white uppercase h-12 md:h-14 px-6 md:px-8 rounded-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: "13px",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                }}>
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
