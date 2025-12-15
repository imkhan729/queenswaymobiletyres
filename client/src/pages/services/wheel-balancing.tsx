import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Settings, RotateCw, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/digital_wheel_balancer_screen.png";

export default function WheelBalancing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Wheel Balancing London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Professional mobile wheel balancing service at your home or work. Eliminate vibration and uneven tyre wear."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Wheel Balancing Service London"
        description="Experiencing steering vibration? Our mobile wheel balancing service comes to you. Precision digital balancing at home or work. Call 07988 018865."
        keywords="mobile wheel balancing, car vibration fix, wheel balancing london, tyre balancing at home"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Wheel Balancing" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">WHEEL BALANCING</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Eliminate steering vibration and extend your tyre life. We bring precision digital balancing equipment to your doorstep.
            </p>
            <div className="flex gap-4">
               <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
                <Phone className="mr-2 w-5 h-5" /> Book Now: 07988 018865
               </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">SIGNS YOU NEED BALANCING</h2>
            <p className="text-gray-400 mb-6">
              Incorrectly balanced wheels can cause uncomfortable vibrations and premature wear on your tyres and suspension components.
            </p>
            <ul className="space-y-4">
              {[
                "Vibration in the steering wheel at motorway speeds",
                "Vibration in the seat or floorboard",
                "Uneven or patchy tyre wear",
                "Increased fuel consumption"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <RotateCw className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary/50 p-8 rounded border border-white/5">
            <Settings className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">PRECISION TECHNOLOGY</h3>
            <p className="text-gray-400">
              Our mobile vans are equipped with the latest computerized wheel balancers. We can balance steel and alloy wheels for all types of cars and vans right on your driveway, ensuring a smooth vibration-free ride.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
