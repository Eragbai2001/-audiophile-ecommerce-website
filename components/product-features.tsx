"use client";

interface FeatureItem {
  text: string;
}

interface InTheBoxItem {
  quantity: number;
  item: string;
}

interface ProductFeaturesProps {
  features: FeatureItem[];
  inTheBox: InTheBoxItem[];
}

export function ProductFeatures({ features, inTheBox }: ProductFeaturesProps) {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16 px-6 md:px-8">
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Features Section */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-black font-bold uppercase mb-8"
              style={{
                fontSize: "32px",
                lineHeight: "1.1",
                letterSpacing: "1.14px",
              }}>
              Features
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <p
                  key={index}
                  className="text-black/60"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.67",
                    letterSpacing: "0px",
                  }}>
                  {feature.text}
                </p>
              ))}
            </div>
          </div>

          {/* In The Box Section */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-black font-bold uppercase mb-8"
              style={{
                fontSize: "32px",
                lineHeight: "1.1",
                letterSpacing: "1.14px",
              }}>
              In The Box
            </h2>

            <div className="space-y-4">
              {inTheBox.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span
                    className="text-[#D87D4E] font-bold shrink-0"
                    style={{
                      fontSize: "15px",
                      letterSpacing: "0.86px",
                    }}>
                    {item.quantity}x
                  </span>
                  <p
                    className="text-black/60"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.67",
                      letterSpacing: "0px",
                    }}>
                    {item.item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
