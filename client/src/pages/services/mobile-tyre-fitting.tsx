import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, MapPin, Truck, ShieldCheck, Wrench, Star } from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import vanInterior from "@assets/generated_images/mobile_tyre_fitting_van_interior.webp";
import { Link } from "wouter";

export default function MobileTyreFitting() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Tyre Fitting London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07427 515915",
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
        title="Mobile Tyre Fitting London & Hertfordshire | Same Day Service"
        description="Expert mobile tyre fitting at your home or work. We bring the garage to you. fast, reliable & affordable tyre replacement in London, Watford & St Albans. Book now!"
        keywords="mobile tyre fitting london, mobile tyres watford, home tyre fitting, tyre replacement at work, mobile tyre fitter near me, emergency tyre fitting"
        image={heroImage}
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile Tyre Fitting Van London" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE TYRE FITTING <br /><span className="text-primary">AT YOUR DOORSTEP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the ultimate convenience with Queensway Mobile Tyres. We bring the tyre depot to your home, workplace, or roadside location.
              No more waiting in cold garages or disrupting your busy schedule. Our expert technicians fit your new tyres while you relax or continue working.
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
                  Get a Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column: Content */}
          <div className="md:col-span-2 space-y-12">

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Why Choose Mobile Tyre Fitting?</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                In today's fast-paced world, finding time to visit a tyre garage can be a hassle. You have to drive there, wait in a queue, and often waste hours of your valuable time.
                <strong>Mobile tyre fitting</strong> changes everything. We bring a fully equipped tyre workshop directly to you.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our state-of-the-art vans are fitted with the latest tyre changing and balancing machinery, capable of handling everything from standard 13-inch wheels to 22-inch high-performance alloys,
                including run-flat tyres and 4x4 specialist fitments. Whether you drive a Ford Fiesta, a Mercedes S-Class, or a Transit van, we have the technology and expertise to handle your vehicle with care.
              </p>
            </section>

            {/* The Process */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Comprehensive Service Includes:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Removal of old tyre and safe disposal",
                  "New tyre installation",
                  "New rubber valve replacement (standard)",
                  "Electronic wheel balancing",
                  "Bead seal application if required",
                  "Wheel nut torque check to manufacturer specs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Benefits of Our Mobile Service</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Save Time & Hassle</h4>
                    <p className="text-gray-400">
                      No need to take time off work or give up your weekend. We come to your office car park or driveway.
                      You simply hand us the keys (or locking wheel nut), and we do the rest while you carry on with your day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Safety First</h4>
                    <p className="text-gray-400">
                      Driving on damaged or illegal tyres to get to a garage is dangerous and risks points on your license.
                      Stay safe at home and let us come to you. All our technicians are fully trained and insured.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Wrench className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Expert Fitting</h4>
                    <p className="text-gray-400">
                      Our technicians are experienced professionals who treat every car like their own. We use protective equipment
                      to ensure your alloy wheels are never damaged during the fitting process.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Areas We Cover */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Areas We Cover</h3>
              <p className="text-gray-400 mb-6">
                We are proud to serve a wide area across Greater London and the Home Counties. Our <Link href="/locations" className="text-primary hover:underline">coverage area</Link> is constantly expanding to meet customer demand.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Mobile Tyre Fitting in Rickmansworth</h4>
                  <p className="text-sm text-gray-400">
                    We offer fast <strong>mobile tyre fitting in Rickmansworth</strong> and the WD3 area. Whether you're near the Aquadrome or in the town centre, our technicians can reach you quickly for emergency repairs or scheduled replacements.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tyre Services in Bushey</h4>
                  <p className="text-sm text-gray-400">
                    Our <strong>mobile tyre professionals in Bushey</strong> are available 24/7. We cover Bushey Heath, North Bushey, and surrounding WD23 locations, bringing the garage directly to your driveway or workplace.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Watford", "St Albans", "Hemel Hempstead", "Harrow", "Uxbridge", "Barnet", "Enfield", "Slough", "High Wycombe", "Luton", "Amersham", "Rickmansworth", "Bushey", "Borehamwood"].map(area => (
                  <span key={area} className="px-3 py-1 bg-background rounded-full text-sm text-gray-300 border border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" /> {area}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              {/* Image Card */}
              <div className="bg-secondary rounded-lg overflow-hidden border border-white/10 mb-8">
                <img src={vanInterior} alt="Mobile Tyre Fitting Van Equipment" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">State-of-the-Art Vans</h4>
                  <p className="text-sm text-gray-400">
                    Our vans are equipped with high-performance tyre changers and digital wheel balancers, powered by on-board generators and compressed air systems.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary p-6 rounded-lg text-black text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 uppercase">Need Tyres Today?</h3>
                <p className="mb-6 font-medium">We often have same-day appointments available!</p>
                <a href="tel:07427515915">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold h-12 uppercase mb-3">
                    Call 07427 515915
                  </Button>
                </a>
                <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black/10 font-bold h-12 uppercase">
                    WhatsApp Us
                  </Button>
                </a>
                <p className="mt-3 text-[10px] text-black/60 uppercase tracking-widest font-bold">Alt: 07988 018865</p>
              </div>

              {/* Trust Signals */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Star className="text-yellow-500 w-5 h-5 fill-current" />
                  <span>5-Star Rated Service</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Truck className="text-primary w-5 h-5" />
                  <span>We Come To You</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span>Fully Insured</span>
                </div>
              </div>

              {/* Pricing Signals */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 space-y-4">
                <h4 className="text-white font-bold mb-2">Transparent Pricing</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Free Instant Quote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Prices from <strong>£30</strong> + Tyre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
