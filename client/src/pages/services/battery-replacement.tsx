import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, BatteryCharging } from "lucide-react";
import heroImage from "@assets/generated_images/car_battery_replacement_at_home.png";

export default function BatteryReplacement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Car Battery Replacement London"
        description="Dead battery? We supply and fit new car batteries at your home or work. Fast, reliable mobile battery replacement service in London."
        keywords="car battery replacement, mobile battery fitting, jump start london, new car battery"
        image={heroImage}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">BATTERY REPLACEMENT</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Car won't start? We bring power to you. Our technicians supply and fit high-quality batteries for all vehicle makes and models at your location.
            </p>
            <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
              <Phone className="mr-2 w-5 h-5" /> Call for Battery: 07988 018865
            </Button>
          </div>
          <div>
             <img src={heroImage} alt="Battery Replacement" className="rounded-lg shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>
      
      <div className="py-16 container mx-auto px-4 text-center">
        <BatteryCharging className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">WE TEST BEFORE WE REPLACE</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We don't just swap parts. We test your existing battery and charging system to ensure a replacement is actually needed, saving you money on unnecessary repairs.
        </p>
      </div>
      <Footer />
    </div>
  );
}