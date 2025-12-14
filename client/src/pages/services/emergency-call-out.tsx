import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock, ShieldAlert } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.png";

export default function EmergencyCallOut() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Mobile Tyre Fitting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "openingHours": "Mo-Su 00:00-23:59"
    },
    "areaServed": "London",
    "description": "24/7 Emergency mobile tyre fitting and roadside assistance."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="24/7 Emergency Mobile Tyre Fitting London"
        description="Stranded? Fast response emergency tyre fitting in London & Hertfordshire. 24/7 roadside assistance. Call 07988 018865 now."
        keywords="emergency tyre fitting, 24 hour mobile tyres, roadside tyre change, blown tyre help"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-red-900/20 relative overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency Roadside Assistance" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block p-3 rounded-full bg-red-600/20 border border-red-500 text-red-500 mb-6 animate-pulse">
            <AlertTriangle className="w-8 h-8 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            EMERGENCY <span className="text-primary">ROADSIDE ASSISTANCE</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stranded with a flat? Don't panic. Our 24/7 emergency team is on standby to get you back on the road safely and quickly.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase h-16 px-10 text-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-pulse">
            <Phone className="mr-3 w-6 h-6" /> CALL EMERGENCY: 07988 018865
          </Button>
          <p className="mt-4 text-sm text-gray-400 font-bold uppercase tracking-widest">Average Response Time: 30-60 Minutes</p>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded border border-white/5 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">24/7 AVAILABILITY</h3>
            <p className="text-gray-400">Day or night, rain or shine. We operate 24 hours a day, 7 days a week, 365 days a year.</p>
          </div>
          <div className="bg-secondary p-8 rounded border border-white/5 text-center">
            <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">RAPID RESPONSE</h3>
            <p className="text-gray-400">We prioritize emergency calls. Our strategic locations allow us to reach most London/M25 areas within an hour.</p>
          </div>
          <div className="bg-secondary p-8 rounded border border-white/5 text-center">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">INSTANT QUOTES</h3>
            <p className="text-gray-400">Upfront pricing with no hidden costs. Know exactly what you pay before we dispatch a van.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}