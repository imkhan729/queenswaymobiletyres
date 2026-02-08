import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Lock, Unlock, ShieldCheck, AlertTriangle, CheckCircle, Wrench, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp"; // Reusing tread image as it fits generic tyre work
import { Link } from "wouter";

export default function LockingNutRemoval() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Locking Wheel Nut Removal London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07427 515915",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Lost your locking wheel nut key? Professional mobile locking wheel nut removal service. Safe removal without damaging alloys."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Locking Wheel Nut Removal London | Mobile Service"
        description="Lost your locking wheel nut key? We offer professional mobile locking nut removal. Safe removal with no damage to alloys. London & Hertfordshire. Call now!"
        keywords="locking wheel nut removal, lost locking nut key, remove stuck wheel nut, mobile locking nut removal london, damaged locking nut"
        image={heroImage}
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Locking Wheel Nut Removal" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              LOCKING WHEEL NUT <span className="text-primary">REMOVAL</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Lost your locking wheel nut key? Nut damaged or overtightened? Don't panic.
              Our mobile specialists use advanced tools to safely remove locking nuts without damaging your expensive alloy wheels.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Safe & Professional Removal</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Modern cars come with locking wheel nuts (or bolts) to prevent wheel theft. However, if you lose the unique key or the nut becomes damaged, removing the wheel can become a nightmare.
                Many garages will turn you away or suggest drilling which risks damaging the wheel.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Queensway Mobile Tyres has a <strong>99% success rate</strong> in removing locking wheel nuts. We use specialist Dynomec tools that grip the nut securely or mould to its shape, allowing us to remove it without resorting to welding or destructive drilling.
              </p>
            </section>

            {/* Why Choose Us */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Our Removal Service?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">No Wheel Damage</h4>
                    <p className="text-sm text-gray-400">Our techniques are non-destructive to the alloy wheel. We guarantee no damage to your rims.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Truck className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">We Come To You</h4>
                    <p className="text-sm text-gray-400">Can't move the car because of a flat tyre and lost key? We solve the problem on your driveway.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Wrench className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">All Makes & Models</h4>
                    <p className="text-sm text-gray-400">We can remove nuts from Ford, BMW, Audi, Mercedes, McGard, and more.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Replacement Nuts</h4>
                    <p className="text-sm text-gray-400">We can often supply standard wheel nuts to replace the removed locking ones so you can drive safely.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Scenarios */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">When Do You Need This Service?</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Lost Key</h4>
                  <p className="text-sm text-gray-400">The most common reason. The unique removal key is missing from the car.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Damaged Key</h4>
                  <p className="text-sm text-gray-400">The pins in the key have sheared off or the pattern is worn.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Overtightened</h4>
                  <p className="text-sm text-gray-400">Previous tyre fitter used an impact gun and the nut is seized.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24 text-center">
              <Unlock className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Fixed Price Removal</h3>
              <p className="text-sm text-gray-400 mb-6">
                We charge a fixed fee for removing locking wheel nuts. The price depends on the number of nuts (usually 4) and the complexity.
              </p>
              <div className="bg-white/5 p-4 rounded mb-6">
                <p className="text-white font-bold text-lg">From £80</p>
                <p className="text-xs text-gray-500">For all 4 wheels</p>
              </div>
              <a href="tel:07427515915">
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase">
                  Get A Quote
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
