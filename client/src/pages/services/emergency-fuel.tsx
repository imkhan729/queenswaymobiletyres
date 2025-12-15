import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Fuel, AlertTriangle, Droplets } from "lucide-react";
import heroImage from "@assets/generated_images/emergency_fuel_canister_pour.png";

export default function EmergencyFuel() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Fuel Delivery London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Run out of fuel? We deliver petrol and diesel to stranded drivers in London and Hertfordshire."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Emergency Fuel Delivery London"
        description="Run out of petrol or diesel? Our emergency fuel delivery service gets you back on the road fast. Covering London & Hertfordshire 24/7."
        keywords="emergency fuel delivery, run out of petrol, diesel delivery london, roadside fuel"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency Fuel" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-wider mb-6">
               <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Service
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              EMERGENCY <span className="text-primary">FUEL DELIVERY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empty tank? Don't walk to the petrol station. We deliver Petrol and Diesel directly to your location to get you moving again.
            </p>
            <div className="flex gap-4">
               <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
                <Phone className="mr-2 w-5 h-5" /> Call Now: 07988 018865
               </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded border border-white/5 text-center group hover:border-primary/50 transition-colors">
            <Fuel className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">PETROL & DIESEL</h3>
            <p className="text-gray-400">We carry both unleaded petrol and diesel fuel to suit all vehicle types.</p>
          </div>
          <div className="bg-secondary p-8 rounded border border-white/5 text-center group hover:border-primary/50 transition-colors">
            <Droplets className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">WRONG FUEL?</h3>
            <p className="text-gray-400">Put the wrong fuel in? We also offer fuel draining services to save your engine.</p>
          </div>
          <div className="bg-secondary p-8 rounded border border-white/5 text-center group hover:border-primary/50 transition-colors">
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">ROADSIDE SAFETY</h3>
            <p className="text-gray-400">Stay safe in your vehicle. Our technician will handle the refueling process safely on the roadside.</p>
          </div>
        </div>
        
        <div className="mt-16 bg-primary/10 p-8 rounded-lg border border-primary/20 text-center">
             <h2 className="text-2xl font-bold text-white mb-4">NEED MORE THAN FUEL?</h2>
             <p className="text-gray-300 mb-6">
                 If your car has other issues preventing it from starting, our technicians can also perform battery jump starts and basic diagnostics.
             </p>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                 View All Services
             </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
