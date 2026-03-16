import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Truck, Wrench, Clock, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Locations() {
  // All locations within 40-mile radius of Hemel Hempstead base
  const locations = [
    // Major Hubs with Dedicated Pages
    { name: "Hemel Hempstead", slug: "/locations/hemel-hempstead" },
    { name: "Watford", slug: "/locations/watford" },
    { name: "St Albans", slug: "/locations/st-albans" },
    { name: "Luton", slug: "/locations/luton" },
    { name: "Harrow", slug: "/locations/harrow" },
    { name: "Slough", slug: "/locations/slough" },
    { name: "Aylesbury", slug: "/locations/aylesbury" },
    { name: "High Wycombe", slug: "/locations/high-wycombe" },
    { name: "Hatfield", slug: "/locations/hatfield" },
    { name: "Welwyn Garden City", slug: "/locations/welwyn-garden-city" },
    { name: "Milton Keynes", slug: "/locations/milton-keynes" },
    { name: "North London", slug: "/locations/london" },
    { name: "Stevenage", slug: "/locations/stevenage" },

    // Hertfordshire (within 40 miles)
    { name: "Harpenden", slug: "/locations/st-albans" },
    { name: "Berkhamsted", slug: "/locations/hemel-hempstead" },
    { name: "Kings Langley", slug: "/locations/watford" },
    { name: "Abbots Langley", slug: "/locations/watford" },
    { name: "Rickmansworth" },
    { name: "Borehamwood" },
    { name: "Potters Bar" },
    { name: "Hitchin" },
    { name: "Letchworth Garden City" },
    { name: "Hertford" },
    { name: "Hoddesdon" },
    { name: "Ware" },
    { name: "Bushey" },
    { name: "Elstree" },
    { name: "Radlett" },
    { name: "Chorleywood" },
    { name: "Tring" },
    { name: "Bovingdon" },
    { name: "Redbourn" },
    { name: "London Colney" },
    { name: "Chipperfield" },
    { name: "Maple Cross" },
    { name: "Apsley" },
    { name: "Knebworth" },

    // Bedfordshire (within 40 miles)
    { name: "Dunstable", slug: "/locations/luton" },
    { name: "Leighton Buzzard" },
    { name: "Flitwick" },
    { name: "Toddington" },
    { name: "Cranfield" },
    { name: "Luton Airport", slug: "/locations/luton" },

    // Buckinghamshire (within 40 miles)
    { name: "Amersham" },
    { name: "Chesham" },
    { name: "Beaconsfield" },
    { name: "Gerrards Cross" },
    { name: "Marlow" },
    { name: "Princes Risborough", slug: "/locations/aylesbury" },
    { name: "Newport Pagnell", slug: "/locations/milton-keynes" },
    { name: "Buckingham" },

    // London & Greater London (within 40 miles)
    { name: "Barnet", slug: "/locations/london" },
    { name: "Edgware", slug: "/locations/london" },
    { name: "Stanmore", slug: "/locations/london" },
    { name: "Enfield", slug: "/locations/london" },
    { name: "Uxbridge" },
    { name: "Ruislip" },
    { name: "Northwood" },
    { name: "Pinner" },
    { name: "Hayes" },
    { name: "Hillingdon" },
    { name: "Heathrow" },

    // Berkshire (within 40 miles)
    { name: "Maidenhead" },
    { name: "Windsor" },
    { name: "Marlow (SL7)" },

    // Essex (within 40 miles)
    { name: "Harlow" },
    { name: "Epping" },

    // Key Routes
    { name: "M1 Corridor (J1–J14)" },
    { name: "M25 (J18–J25)" },
    { name: "A41 Corridor" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Queensway Mobile Tyres",
    "areaServed": locations.map(loc => ({
      "@type": "City",
      "name": loc.name
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Tyre Fitting Coverage Area | Hertfordshire, Bucks & London"
        description="Queensway Mobile Tyres covers a 40-mile radius from Hemel Hempstead, including Watford, St Albans, Luton, Aylesbury, High Wycombe, Hatfield, Welwyn Garden City and beyond."
        keywords="mobile tyre fitting areas, tyres watford, tyres st albans, tyres luton, tyres aylesbury, mobile tyres high wycombe, mobile tyres hatfield, mobile tyres welwyn garden city"
        schema={schema}
      />
      <Navbar />

      <div className="pt-24 pb-12 bg-secondary text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-6">
          AREAS WE <span className="text-primary">COVER</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
          We provide comprehensive mobile tyre services across Hertfordshire, Bedfordshire, Buckinghamshire, and North London.
        </p>

        {/* Local SEO Content Strategy */}
        {/* Local SEO Content Strategy */}
        <div className="max-w-4xl mx-auto px-4 text-left grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Rapid Response Across Hertfordshire
            </h3>
            <p className="text-gray-400 text-sm">
              We provide <strong>comprehensive mobile tyre fitting</strong> services throughout Hertfordshire and the M1 corridor.
              From emergency roadside assistance on the A41 to scheduled replacements in residential areas,
              our fleet is strategically positioned to reach you within 30-60 minutes.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> North London Coverage
            </h3>
            <p className="text-gray-400 text-sm">
              Our <strong>mobile tyre service</strong> extends into North and North West London.
              We cover key areas including Barnet, Edgware, and Harrow, offering the same 24/7 emergency call-out
              service. Avoid the hassle of London traffic - let the tyre depot come to you.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 md:col-span-2 mt-4">
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Key Service Corridors (M1, M25, A41)
            </h3>
            <p className="text-gray-400 text-sm">
              We offer <strong className="text-white">priority emergency response</strong> along major routes including the <strong>M1 (Junctions 4-9)</strong>, <strong>M25 (Junctions 18-23)</strong>, and the <strong>A41</strong>.
              Whether you are stranded at a service station or on the hard shoulder, our emergency tyre fitting team can reach you quickly to get you back on the road safely.
            </p>
          </div>
        </div>
      </div>

      {/* All Services Available Across Our Coverage Area */}
      <div className="py-16 bg-secondary/20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Complete Service Range</h2>
            <h3 className="text-3xl font-heading font-bold text-white">Services Available Across All Areas</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Wherever you are in our 40-mile coverage radius, our full range of mobile automotive services is available. No need to visit a garage — we bring the workshop to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Truck, label: "Mobile Tyre Fitting", desc: "Same-day supply and fit at your home, workplace, or roadside. All brands, all sizes.", href: "/mobile-tyre-fitting" },
              { icon: Clock, label: "24/7 Emergency Call-Out", desc: "Rapid roadside assistance across the M1, M25, A41 and all major routes. 30–60 min response.", href: "/emergency-call-out" },
              { icon: Wrench, label: "Puncture Repair", desc: "Safe, permanent BS AU 159 compliant repairs. We assess and fix on-site so you don't need a new tyre unnecessarily.", href: "/puncture-repair" },
              { icon: Settings, label: "Wheel Balancing", desc: "Digital computerised balancing eliminates vibration and extends tyre life. Included with every new fitting.", href: "/wheel-balancing" },
              { icon: Battery, label: "Car Battery Replacement", desc: "Supply and fit AGM, EFB, and standard batteries for all makes. Includes alternator and charging test.", href: "/battery-replacement" },
              { icon: Fuel, label: "Emergency Fuel Delivery", desc: "Run out of petrol or diesel? We deliver 5–10 litres to your location to get you to the nearest forecourt.", href: "/emergency-fuel" },
              { icon: Lock, label: "Locking Wheel Nut Removal", desc: "Lost your locking nut key? Our specialist tools remove nuts safely without damaging your alloy wheels.", href: "/locking-nut-removal" },
            ].map(service => (
              <Link key={service.href} href={service.href}>
                <div className="bg-secondary/40 border border-white/10 hover:border-primary/50 p-5 rounded-lg group transition-all hover:-translate-y-0.5 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                        {service.label} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </h4>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        {/* Featured Location Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">Our Key Service Hubs</h2>
          <p className="text-gray-400 mb-8">Click your area for local coverage details, postcodes covered, response times, and a local FAQ.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Hemel Hempstead", slug: "/locations/hemel-hempstead", postcodes: "HP1, HP2, HP3", desc: "Our base — fastest response times" },
              { name: "Watford", slug: "/locations/watford", postcodes: "WD17–25", desc: "M1 & M25 junction coverage" },
              { name: "St Albans", slug: "/locations/st-albans", postcodes: "AL1–AL4", desc: "City & surrounding villages" },
              { name: "Luton", slug: "/locations/luton", postcodes: "LU1–LU4", desc: "Airport & M1 J10–11 service" },
              { name: "Harrow", slug: "/locations/harrow", postcodes: "HA1–HA3", desc: "North West London coverage" },
              { name: "Slough", slug: "/locations/slough", postcodes: "SL1–SL3", desc: "M4 corridor & Trading Estate" },
              { name: "Aylesbury", slug: "/locations/aylesbury", postcodes: "HP17–HP22", desc: "A41 & A418 corridor" },
              { name: "High Wycombe", slug: "/locations/high-wycombe", postcodes: "HP10–HP15", desc: "M40 J4 & South Bucks" },
              { name: "Hatfield", slug: "/locations/hatfield", postcodes: "AL9, AL10", desc: "A1(M) J3 — 15mi from base" },
              { name: "Welwyn Garden City", slug: "/locations/welwyn-garden-city", postcodes: "AL7, AL8", desc: "A1(M) J4 corridor" },
              { name: "Milton Keynes", slug: "/locations/milton-keynes", postcodes: "MK postcodes", desc: "M1 J13–14 & grid roads" },
              { name: "North London", slug: "/locations/london", postcodes: "N, NW postcodes", desc: "Barnet, Edgware, Enfield" },
              { name: "Stevenage", slug: "/locations/stevenage", postcodes: "SG1–SG2", desc: "A1(M) corridor service" },
            ].map(hub => (
              <Link key={hub.name} href={hub.slug}>
                <div className="bg-white/5 border border-primary/30 p-5 rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold group-hover:text-primary transition-colors">{hub.name}</h3>
                      <p className="text-primary text-xs font-mono mt-0.5">{hub.postcodes}</p>
                      <p className="text-gray-400 text-xs mt-1">{hub.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-heading font-bold text-white mb-6">All Locations We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {locations.map((loc) => (
            loc.slug ? (
              <Link key={loc.name} href={loc.slug}>
                <div className="bg-white/5 border border-primary/30 p-4 rounded flex items-center hover:bg-primary/20 hover:border-primary/80 transition-all cursor-pointer group">
                  <MapPin className="w-4 h-4 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">{loc.name}</span>
                </div>
              </Link>
            ) : (
              <div key={loc.name} className="bg-white/5 border border-white/10 p-4 rounded flex items-center hover:border-primary/50 transition-colors">
                <MapPin className="w-4 h-4 text-primary mr-3" />
                <span className="text-gray-200 font-medium">{loc.name}</span>
              </div>
            )
          ))}
        </div>

        {/* Why We Cover Such a Wide Area */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/30 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Hertfordshire & Bedfordshire</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Our <strong>mobile tyre fitting service across Hertfordshire</strong> covers the M1 corridor from Junction 4 to Junction 12, the A41 from Watford to Hemel Hempstead and Aylesbury, and the A414 through <Link href="/locations/hatfield"><span className="text-primary hover:underline">Hatfield</span></Link> and Hertford. We serve towns including <Link href="/locations/hemel-hempstead"><span className="text-primary hover:underline">Hemel Hempstead</span></Link>, <Link href="/locations/watford"><span className="text-primary hover:underline">Watford</span></Link>, <Link href="/locations/st-albans"><span className="text-primary hover:underline">St Albans</span></Link>, Harpenden, <Link href="/locations/welwyn-garden-city"><span className="text-primary hover:underline">Welwyn Garden City</span></Link>, <Link href="/locations/stevenage"><span className="text-primary hover:underline">Stevenage</span></Link>, Hitchin, and Berkhamsted. In Bedfordshire we cover <Link href="/locations/luton"><span className="text-primary hover:underline">Luton</span></Link>, Dunstable, Leighton Buzzard, and Flitwick.
            </p>
            <Link href="/locations/hemel-hempstead">
              <span className="text-primary text-sm hover:underline font-bold">Hemel Hempstead page →</span>
            </Link>
          </div>
          <div className="bg-secondary/30 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">London, Middlesex & Buckinghamshire</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We extend our <strong>mobile tyre service into North and North West London</strong>, covering the M25 corridor between Junctions 18 and 25. We serve <Link href="/locations/harrow"><span className="text-primary hover:underline">Harrow</span></Link> (HA postcodes), Uxbridge, <Link href="/locations/slough"><span className="text-primary hover:underline">Slough</span></Link>, <Link href="/locations/high-wycombe"><span className="text-primary hover:underline">High Wycombe</span></Link>, <Link href="/locations/aylesbury"><span className="text-primary hover:underline">Aylesbury</span></Link>, Amersham, and Gerrards Cross. Our emergency team also responds to breakdowns at Heathrow and along the M40 to <Link href="/locations/milton-keynes"><span className="text-primary hover:underline">Milton Keynes</span></Link>.
            </p>
            <Link href="/locations/london">
              <span className="text-primary text-sm hover:underline font-bold">North London page →</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">DON'T SEE YOUR LOCATION?</h2>
          <p className="text-gray-300 mb-6">
            We cover many surrounding villages and areas along the M1, M25, and A41. Give us a call — if we can reach you, we will.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07427515915">
              <Button size="lg" className="bg-primary text-black font-bold uppercase">
                <Phone className="mr-2 w-5 h-5" /> Call: 07427 515915
              </Button>
            </a>
            <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold uppercase">
                WhatsApp Your Location
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}