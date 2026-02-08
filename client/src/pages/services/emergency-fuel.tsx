import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Fuel, AlertTriangle, Droplets, MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/emergency_fuel_canister_pour.webp";
import { Link } from "wouter";

export default function EmergencyFuel() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Fuel Delivery London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07427 515915",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Run out of fuel? We deliver petrol and diesel to stranded drivers in London and Hertfordshire."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Emergency Fuel Delivery London | Petrol & Diesel"
        description="Run out of fuel? Fast emergency fuel delivery service in London & Hertfordshire. We bring petrol or diesel to you 24/7. Call 07427 515915."
        keywords="emergency fuel delivery, run out of petrol, diesel delivery london, roadside fuel, fuel rescue, empty tank help"
        image={heroImage}
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency Fuel Delivery" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Service
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              EMERGENCY <span className="text-primary">FUEL DELIVERY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tank empty? Engine cut out? Don't risk walking down dangerous roads to a petrol station.
              We deliver Petrol and Diesel directly to your vehicle's location to get you moving again safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                  <Phone className="mr-2 w-5 h-5" /> Call Now: 07427 515915
                </Button>
                <p className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest text-center sm:text-left">Secondary: 07988 018865</p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase w-full sm:w-auto">
                  Get Help Online
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Stranded Without Fuel? We Can Help.</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Running out of fuel is stressful and embarrassing, but it happens to the best of us. Faulty gauges, distraction, or unexpected traffic can leave you stranded miles from the nearest forecourt.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Queensway Mobile Tyres provides a rapid response <strong>emergency fuel delivery service</strong>. We will bring enough fuel (typically 5-10 litres) to get you to the nearest petrol station to fill up properly.
                This service is safer and faster than walking or trying to hitch a ride.
              </p>
            </section>

            {/* Services Grid */}
            <section className="grid sm:grid-cols-2 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Fuel className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Unleaded Petrol</h3>
                <p className="text-gray-400 text-sm">
                  We carry standard unleaded petrol suitable for all petrol cars and vans. Delivered in safety-compliant jerry cans.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Truck className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Diesel</h3>
                <p className="text-gray-400 text-sm">
                  We supply white diesel for cars and light commercial vehicles. We can also help prime the fuel system if air has entered the lines.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Droplets className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Wrong Fuel?</h3>
                <p className="text-gray-400 text-sm">
                  Put petrol in a diesel? <span className="text-white font-bold">Do not start the engine!</span> Call us immediately. We can arrange for a fuel drain service.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Roadside Safety</h3>
                <p className="text-gray-400 text-sm">
                  Stay safe inside your car. Our technicians are trained to refuel vehicles safely on the roadside, minimizing risk to you and other drivers.
                </p>
              </div>
            </section>

            {/* Why Call Us */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Our Fuel Service?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>Rapid Response:</strong> We aim to reach you within 60 minutes.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>Wide Coverage:</strong> Covering London, Watford, St Albans, and the M25 corridor.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>System Priming:</strong> Diesel engines often need 'priming' after running dry. Our technicians know how to do this.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Urgent Assistance</h3>
              <p className="text-gray-400 mb-6 text-sm">
                If you are in a dangerous location (live lane of a motorway), please call 999 first. For safe roadside locations, call us:
              </p>
              <a href="tel:07427515915">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 uppercase text-lg animate-pulse">
                  <Phone className="mr-2 w-5 h-5" /> 07427 515915
                </Button>
              </a>
              <p className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest">Alt: 07988 018865</p>
              <p className="mt-4 text-xs text-gray-500">
                Available 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-white/5">
              <h4 className="font-bold text-white mb-2">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mobile-tyre-fitting" className="text-primary hover:underline">Mobile Tyre Fitting</Link></li>
                <li><Link href="/battery-replacement" className="text-primary hover:underline">Battery Jump Start</Link></li>
                <li><Link href="/emergency-call-out" className="text-primary hover:underline">Emergency Breakdown</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
