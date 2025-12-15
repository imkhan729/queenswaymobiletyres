import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, BatteryCharging, CheckCircle, AlertTriangle, Zap, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/car_battery_replacement_at_home.png";
import batteryImage from "@assets/generated_images/car_battery_installation_close_up.png";
import { Link } from "wouter";

export default function BatteryReplacement() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Car Battery Replacement London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Dead battery? We supply and fit new car batteries at your home or work. Fast, reliable mobile battery replacement service in London."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Car Battery Replacement London | We Come To You"
        description="Car won't start? Expert mobile car battery replacement at your home or work. We supply & fit heavy-duty batteries for all makes/models. Call 07988 018865."
        keywords="car battery replacement, mobile battery fitting, jump start london, new car battery, battery dead, alternator test, mobile mechanic battery"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile Car Battery Replacement" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">BATTERY REPLACEMENT</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Car won't start? Don't get towed to a garage. We bring a new, high-quality battery directly to you. 
              Our expert technicians supply and fit batteries for all vehicle makes and models at your home, work, or roadside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                <Phone className="mr-2 w-5 h-5" /> Call for Battery: 07988 018865
               </Button>
               <Link href="/contact">
                 <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase w-full sm:w-auto">
                   Get a Quote
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Expert Battery Fitting At Your Doorstep</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A flat battery is one of the most common causes of breakdowns. Modern vehicles are heavily reliant on complex electrical systems, meaning the correct battery specification is crucial.
                Queensway Mobile Tyres takes the guesswork out of battery replacement.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We stock a wide range of premium batteries, including <strong>AGM and EFB batteries for Start-Stop vehicles</strong>. All our batteries come with a manufacturer's warranty (typically 3-5 years) for your peace of mind.
              </p>
            </section>

            {/* Diagnostic Process */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-primary/10 rounded-full text-primary">
                   <BatteryCharging className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white">We Test Before We Replace</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We don't just swap parts blindly. Sometimes a "dead battery" is actually a symptom of a faulty alternator or a parasitic drain. Our process includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Battery Health Check (CCA testing)",
                  "Alternator Charging Rate Test",
                  "Starter Motor Draw Test",
                  "Code Clearing (BMS Reset for modern cars)",
                  "Safe Disposal of Old Battery"
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Symptoms */}
            <section>
               <h3 className="text-2xl font-heading font-bold text-white mb-6">Signs Your Battery Is Failing</h3>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                 <div className="bg-secondary/20 p-4 rounded border border-white/5">
                   <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                   <h4 className="font-bold text-white mb-2">Slow Cranking</h4>
                   <p className="text-sm text-gray-400">Engine turns over slowly or struggles to start on cold mornings.</p>
                 </div>
                 <div className="bg-secondary/20 p-4 rounded border border-white/5">
                   <AlertTriangle className="w-8 h-8 text-red-500 mb-3" />
                   <h4 className="font-bold text-white mb-2">Warning Light</h4>
                   <p className="text-sm text-gray-400">Red battery symbol on dashboard usually indicates charging issues.</p>
                 </div>
                 <div className="bg-secondary/20 p-4 rounded border border-white/5">
                   <BatteryCharging className="w-8 h-8 text-primary mb-3" />
                   <h4 className="font-bold text-white mb-2">Old Age</h4>
                   <p className="text-sm text-gray-400">Most batteries last 3-5 years. If yours is older, it may be time to change.</p>
                 </div>
               </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg overflow-hidden border border-white/10">
               <img src={batteryImage} alt="Professional Battery Installation" className="w-full h-48 object-cover" />
               <div className="p-6">
                 <h4 className="text-lg font-bold text-white mb-2">Professional Installation</h4>
                 <p className="text-sm text-gray-400 mb-4">
                   Modern cars often require 'coding' new batteries to the ECU. Our technicians have the diagnostic tools to perform this essential step.
                 </p>
                 <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                   <Truck className="w-4 h-4" /> We Come To You
                 </div>
               </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need A Jump Start?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                If your battery is just flat from leaving lights on, we offer a cheaper jump-start service to get you moving again.
              </p>
              <a href="tel:07988018865">
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12 uppercase">
                  Call for Assistance
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
