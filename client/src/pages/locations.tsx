import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Locations() {
  // De-duplicated and structured locations list
  // De-duplicated and structured locations list
  const locations = [
    // Major Hubs with Pages
    { name: "Watford", slug: "/locations/watford" },
    { name: "St Albans", slug: "/locations/st-albans" },
    { name: "Hemel Hempstead", slug: "/locations/hemel-hempstead" },
    { name: "Luton", slug: "/locations/luton" },
    { name: "Milton Keynes", slug: "/locations/milton-keynes" },
    { name: "Harrow", slug: "/locations/harrow" },
    { name: "Slough", slug: "/locations/slough" },
    { name: "Northampton", slug: "/locations/northampton" },
    { name: "North London", slug: "/locations/london" },

    // Hertfordshire
    { name: "Harpenden", slug: "/locations/st-albans" }, // Grouping
    { name: "Berkhamsted", slug: "/locations/hemel-hempstead" }, // Grouping
    { name: "Kings Langley", slug: "/locations/watford" }, // Grouping
    { name: "Abbots Langley", slug: "/locations/watford" },
    { name: "Rickmansworth" },
    { name: "Borehamwood" },
    { name: "Potters Bar" },
    { name: "Hatfield" },
    { name: "Stevenage", slug: "/locations/stevenage" },
    { name: "Hitchin" },
    { name: "Letchworth" },
    { name: "Welwyn Garden City" },
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
    { name: "Great Gaddesden" },
    { name: "Little Gaddesden" },
    { name: "Chipperfield" },
    { name: "Maple Cross" },
    { name: "Apsley" },

    // Bedfordshire
    { name: "Dunstable", slug: "/locations/luton" }, // Nearby
    { name: "Leighton Buzzard" },
    { name: "Bedford" },
    { name: "Flitwick" },
    { name: "Toddington" },
    { name: "Cranfield" },
    { name: "Luton Airport", slug: "/locations/luton" },

    // Buckinghamshire
    { name: "High Wycombe" },
    { name: "Aylesbury" },
    { name: "Amersham" },
    { name: "Chesham" },
    { name: "Beaconsfield" },
    { name: "Gerrards Cross" },
    { name: "Marlow" },
    { name: "Newport Pagnell", slug: "/locations/milton-keynes" },

    // London & Greater London
    { name: "Barnet", slug: "/locations/london" },
    { name: "Edgware", slug: "/locations/london" },
    { name: "Stanmore", slug: "/locations/london" },
    { name: "Enfield", slug: "/locations/london" },
    { name: "Uxbridge" },
    { name: "Ruislip" },
    { name: "Northwood" },
    { name: "Pinner" },
    { name: "Ealing" },
    { name: "Hayes" },
    { name: "Hillingdon" },
    { name: "Feltham" },
    { name: "Heathrow" },
    { name: "Mayfair" },
    { name: "Greater London" },

    // Berkshire & Others
    { name: "Maidenhead" },
    { name: "Reading" },
    { name: "Basingstoke" },
    { name: "Cambridge" },
    { name: "Harlow" },
    { name: "Kettering" },
    { name: "Wylvn Garden City" }, // Typo from user, corrected in main list but keeping for safety if needed, or mapping to Welwyn
    { name: "M1 Corridor" },
    { name: "M25 Corridor" }
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
        title="Mobile Tyre Fitting Coverage Area | London & Hertfordshire"
        description="We cover a wide area including Watford, St Albans, Hemel Hempstead, Luton, and the M1/M25 corridors. Check if we cover your area."
        keywords="mobile tyre fitting areas, tyres watford, tyres st albans, tyres luton"
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

      <div className="py-16 container mx-auto px-4">
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

        <div className="mt-16 bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">DON'T SEE YOUR LOCATION?</h2>
          <p className="text-gray-300 mb-6">
            We cover many surrounding villages and areas along the M1 and M25 motorways. Give us a call to check if we can reach you.
          </p>
          <a href="tel:07427515915">
            <Button size="lg" className="bg-primary text-black font-bold uppercase">
              <Phone className="mr-2 w-5 h-5" /> Call to Check: 07427 515915
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}