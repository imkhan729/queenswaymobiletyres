import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, MapPin, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";
import vanInterior from "@assets/generated_images/mobile_tyre_fitting_van_interior.png";

export default function MobileTyreFitting() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Tyre Fitting London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "description": "Expert mobile tyre fitting service at your home or work. We cover London, Hertfordshire, and surrounding areas.",
    "offer": {
      "@type": "Offer",
      "price": "30.00",
      "priceCurrency": "GBP",
      "description": "Starting price for fitting"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Tyre Fitting London & Hertfordshire"
        description="Same day mobile tyre fitting at home or work. We bring the garage to you. Covering London, Watford, St Albans, and M25 corridor. Book now!"
        keywords="mobile tyre fitting london, mobile tyres watford, home tyre fitting, tyre replacement at work"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile Tyre Fitting" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE TYRE FITTING <br /><span className="text-primary">AT YOUR DOORSTEP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Don't waste time at a garage. Our expert fitters come to your home, office, or roadside location to fit your new tyres while you wait.
            </p>
            <div className="flex gap-4">
               <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
                <Phone className="mr-2 w-5 h-5" /> Book Now: 07988 018865
               </Button>
               <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase">
                 Get a Quote
               </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
             <img src={vanInterior} alt="Inside mobile tyre fitting van" className="rounded-lg shadow-2xl border border-white/10" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">WHY CHOOSE MOBILE FITTING?</h2>
            <p className="text-gray-400 mb-6">
              Our mobile tyre fitting service is designed around your convenience. We have transformed the traditional tyre changing experience by bringing a state-of-the-art workshop directly to your location.
            </p>
            <div className="space-y-6">
              {[
                "Convenience: We come to you, saving you travel time and waiting room boredom.",
                "Cost-Effective: Competitive pricing often cheaper than physical garages.",
                "Expert Service: Fully trained technicians with state-of-the-art mobile equipment.",
                "Comprehensive: Balancing, new valves, and old tyre disposal included.",
                "Safety: Contactless service available for your peace of mind."
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 p-8 rounded border border-white/5">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">HOW IT WORKS</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">1. Contact Us</h4>
                    <p className="text-gray-400">Call us or book online. Tell us your tyre size and location.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">2. We Arrive</h4>
                    <p className="text-gray-400">Our technician arrives at your chosen location with your new tyres.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">3. Job Done</h4>
                    <p className="text-gray-400">We fit, balance, and check your tyres. You pay and drive away safely.</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}