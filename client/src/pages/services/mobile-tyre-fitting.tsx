import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";

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
            <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
              <Phone className="mr-2 w-5 h-5" /> Book Now: 07988 018865
            </Button>
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">WHY CHOOSE MOBILE FITTING?</h2>
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
          <div className="bg-secondary/50 p-8 rounded border border-white/5">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">HOW IT WORKS</h3>
            <ol className="relative border-l border-primary/30 ml-3 space-y-8">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background text-black font-bold">1</span>
                <h4 className="flex items-center mb-1 text-lg font-bold text-white">Contact Us</h4>
                <p className="mb-4 text-base font-normal text-gray-400">Call us or book online. Tell us your tyre size and location.</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background text-black font-bold">2</span>
                <h4 className="flex items-center mb-1 text-lg font-bold text-white">We Arrive</h4>
                <p className="mb-4 text-base font-normal text-gray-400">Our technician arrives at your chosen location with your new tyres.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background text-black font-bold">3</span>
                <h4 className="flex items-center mb-1 text-lg font-bold text-white">Job Done</h4>
                <p className="mb-4 text-base font-normal text-gray-400">We fit, balance, and check your tyres. You pay and drive away safely.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}