import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock, ShieldAlert, MapPin, CheckCircle, Wrench, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.webp";
import { Link } from "wouter";

export default function EmergencyCallOut() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Mobile Tyre Fitting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07427 515915",
      "faxNumber": "07988 018865",
      "openingHours": "Mo-Su 00:00-23:59"
    },
    "areaServed": "London",
    "description": "24/7 Emergency mobile tyre fitting and roadside assistance."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="24/7 Emergency Mobile Tyre Fitting London | 60 Min Response"
        description="Stranded with a flat tyre? Our emergency mobile tyre fitting team reaches you in 30-60 mins. 24/7 roadside assistance across London & M25. Call 07427 515915."
        keywords="emergency tyre fitting, 24 hour mobile tyres, roadside tyre change, blown tyre help, emergency puncture repair, mobile tyre service night"
        image={heroImage}
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-red-950/30 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency Roadside Assistance London" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500 text-red-500 mb-8 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider">24/7 Emergency Response Team Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              EMERGENCY <span className="text-red-500">ROADSIDE ASSISTANCE</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stranded with a flat tyre or blowout? Don't panic. Our emergency response team is on standby 24 hours a day to get you back on the road safely and quickly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:07427515915">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase h-16 px-10 text-xl shadow-[0_0_30px_rgba(220,38,38,0.4)] w-full sm:w-auto">
                  <Phone className="mr-3 w-6 h-6 animate-bounce" /> CALL NOW: 07427 515915
                </Button>
              </a>
              <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-16 px-8 uppercase w-full sm:w-auto">
                  WhatsApp Location
                </Button>
              </a>
            </div>

            <p className="mt-6 text-gray-400 font-medium flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-red-500" /> Average Response Time: <span className="text-white">30-60 Minutes</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Don't Stay Stranded - We Come To You</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A tyre blowout or flat tyre can happen at the worst possible times - late at night, on a busy motorway, or when you're rushing to an important meeting.
                Queensway Mobile Tyres offers a dedicated <strong>24/7 emergency tyre fitting service</strong> across London and the Home Counties.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Unlike standard breakdown services that might just tow you to a garage (which might be closed), we bring the solution to you. We carry a massive stock of tyres
                and have the equipment to fit them at the roadside, getting you mobile again immediately.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                <ShieldAlert className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Roadside Safety First</h3>
                <p className="text-gray-400 text-sm">
                  Our technicians are trained in roadside safety protocols. We use high-visibility vehicles and safety lighting to ensure a secure working environment while we change your tyre on the roadside or hard shoulder.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Locking Wheel Nut Removal</h3>
                <p className="text-gray-400 text-sm">
                  Lost your locking wheel nut key? Don't worry. Our emergency vans carry specialist removal tools to safely remove locking nuts without damaging your alloy wheels.
                </p>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">What To Do If You Have A Blowout</h3>
              <div className="bg-secondary/20 rounded-lg p-6 border-l-4 border-red-500 space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  <li><strong className="text-white">Stop Safely:</strong> Pull over to a safe place immediately. Do not drive on a flat tyre as it destroys the wheel rim.</li>
                  <li><strong className="text-white">Make Yourself Visible:</strong> Turn on hazard lights. If on a motorway, exit the vehicle from the passenger side and stand behind the barrier.</li>
                  <li><strong className="text-white">Call Us:</strong> Dial <a href="tel:07427515915" className="text-primary hover:underline">07427 515915</a> (or alt: <a href="tel:07988018865" className="text-primary hover:underline">07988 018865</a>). Give us your location (WhatsApp location drop is best) and tyre size.</li>
                  <li><strong className="text-white">Wait Safely:</strong> We will dispatch the nearest van immediately and give you an ETA.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Emergency Coverage Areas — 24/7</h3>
              <p className="text-gray-400 mb-4">
                Our emergency fleet is strategically positioned around the M25, M1, and major London routes. We respond to breakdowns along motorways, A-roads, and residential streets. Current priority coverage includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { name: "Hemel Hempstead", href: "/locations/hemel-hempstead" },
                  { name: "Watford", href: "/locations/watford" },
                  { name: "St Albans", href: "/locations/st-albans" },
                  { name: "Luton Airport Area", href: "/locations/luton" },
                  { name: "Harrow", href: "/locations/harrow" },
                  { name: "Slough & M4", href: "/locations/slough" },
                  { name: "Milton Keynes", href: "/locations/milton-keynes" },
                  { name: "North London", href: "/locations/london" },
                  { name: "Northampton", href: "/locations/northampton" },
                ].map((area) => (
                  <Link key={area.name} href={area.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> {area.name}
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                We also cover the <strong className="text-white">M1 (Junctions 4–11)</strong>, <strong className="text-white">M25 (Junctions 17–25)</strong>, <strong className="text-white">A41</strong>, and <strong className="text-white">A1(M)</strong> corridors. <Link href="/locations" className="text-primary hover:underline">View all coverage areas →</Link>
              </p>
            </section>

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Scheduled same-day tyre supply & fit", href: "/mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "BS AU 159 compliant on-site repairs", href: "/puncture-repair" },
                  { label: "Wheel Balancing", sub: "Digital balancing — eliminates vibration", href: "/wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "Dead battery? We come to you", href: "/battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel delivered 24/7", href: "/emergency-fuel" },
                  { label: "Locking Wheel Nut Removal", sub: "Specialist tools, no alloy damage", href: "/locking-nut-removal" },
                ].map(s => (
                  <Link key={s.href} href={s.href}>
                    <div className="flex items-center justify-between p-3 bg-background/40 border border-white/5 hover:border-primary/30 rounded group transition-all cursor-pointer">
                      <div>
                        <p className="text-white text-sm font-bold group-hover:text-primary transition-colors">{s.label}</p>
                        <p className="text-gray-500 text-xs">{s.sub}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Pricing & Contact */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Transparent Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Call-Out Fee (Day)</span>
                  <span className="text-white font-bold">From £40</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Call-Out Fee (Night)</span>
                  <span className="text-white font-bold">From £80</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Tyre Fitting</span>
                  <span className="text-white font-bold">Included</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">New Valve & Balance</span>
                  <span className="text-white font-bold">Included</span>
                </div>
              </div>

              <div className="bg-red-900/20 p-4 rounded text-center mb-6 border border-red-500/30">
                <p className="text-red-400 text-sm font-bold uppercase">No Hidden Costs</p>
                <p className="text-gray-400 text-xs mt-1">We quote the full price before dispatching a van.</p>
              </div>

              <a href="tel:07427515915">
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold h-12 uppercase">
                  Get Immediate Quote
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
