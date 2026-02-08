import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Settings, RotateCw, ShieldCheck, Zap, Gauge } from "lucide-react";
import heroImage from "@assets/generated_images/digital_wheel_balancer_screen.webp";
import wheelImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp"; // Reusing generic tread/wheel image or similar
import { Link } from "wouter";

export default function WheelBalancing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Wheel Balancing London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07427 515915",
      "priceRange": "$$"
    },
    "areaServed": "London",
    "description": "Professional mobile wheel balancing service at your home or work. Eliminate vibration and uneven tyre wear."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Wheel Balancing Service London | Eliminate Vibration"
        description="Steering wheel shaking? Our mobile wheel balancing service comes to you. Precision digital balancing for smooth driving. London & Hertfordshire."
        keywords="mobile wheel balancing, car vibration fix, wheel balancing london, tyre balancing at home, steering shake fix, wheel weights"
        image={heroImage}
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile Wheel Balancing" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">WHEEL BALANCING</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Eliminate uncomfortable steering vibration and extend the life of your tyres.
              We bring precision digital wheel balancing equipment directly to your driveway or workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                  <Phone className="mr-2 w-5 h-5" /> Book Now: 07427 515915
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Precision Balancing for a Smooth Ride</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Wheel balancing is the process of equalizing the weight of the combined tyre and wheel assembly so that it spins smoothly at high speed.
                Even a tiny weight imbalance can generate significant vibration when spinning at motorway speeds.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Queensway Mobile Tyres uses advanced <strong>computerized digital balancers</strong> inside our mobile vans. We can balance all types of wheels, including standard steel rims, alloy wheels, and specialist fitments for high-performance cars.
              </p>
            </section>

            {/* Signs You Need It */}
            <section className="bg-secondary/30 rounded-lg p-8 border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Signs Your Wheels Need Balancing</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Steering Wheel Vibration",
                    desc: "The most common sign. Shaking in the steering wheel, usually starting at around 50-60mph and getting worse with speed.",
                    icon: Zap
                  },
                  {
                    title: "Seat or Floor Vibration",
                    desc: "If the rear wheels are out of balance, you might feel the vibration through the car seat or floor rather than the steering wheel.",
                    icon: RotateCw
                  },
                  {
                    title: "Uneven Tyre Wear",
                    desc: "Imbalanced wheels can cause 'cupping' or patchy wear on the tyre tread, shortening the life of your expensive tyres.",
                    icon: Gauge
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded bg-background/50 border border-white/5">
                    <div className="mt-1 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Detail */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Balancing Technology</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We use the latest generation of mobile balancers that offer:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Static and Dynamic balancing modes",
                  "Alloy wheel protection modes (hidden weights)",
                  "Laser-guided weight placement accuracy",
                  "Calibration for cars, vans, and 4x4s"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg overflow-hidden border border-white/10 sticky top-24">
              <div className="p-8 text-center">
                <Settings className="w-16 h-16 text-primary mx-auto mb-6 animate-spin-slow" />
                <h3 className="text-xl font-bold text-white mb-4">Balancing vs Alignment</h3>
                <p className="text-sm text-gray-400 mb-6 text-left">
                  <strong>Balancing</strong> fixes vibration/wobble.<br /><br />
                  <strong>Alignment</strong> (Tracking) fixes the car pulling to one side.<br /><br />
                  We focus on balancing to ensure your tyres roll smoothly and last longer.
                </p>
                <a href="tel:07427515915">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase">
                    Book Balancing
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="text-primary w-5 h-5" /> Protect Your Investment
              </h4>
              <p className="text-sm text-gray-400">
                Driving with unbalanced wheels damages suspension components, wheel bearings, and steering racks. A small cost now saves big repair bills later.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
