import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function Locations() {
  const locations = [
    "Watford", "St Albans", "Hemel Hempstead", "Luton", "Harpenden",
    "Berkhamsted", "Tring", "Kings Langley", "Abbots Langley", "Bushey",
    "Rickmansworth", "Chorleywood", "Radlett", "Borehamwood", "Potters Bar",
    "Barnet", "Edgware", "Stanmore", "Harrow", "Uxbridge",
    "Ruislip", "Northwood", "Pinner", "London Colney", "Hatfield"
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Queensway Mobile Tyres",
    "areaServed": locations.map(loc => ({
      "@type": "City",
      "name": loc
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
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          We provide comprehensive mobile tyre services across Hertfordshire, Bedfordshire, Buckinghamshire, and North London.
        </p>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {locations.map((loc) => (
            <div key={loc} className="bg-white/5 border border-white/10 p-4 rounded flex items-center hover:border-primary/50 transition-colors">
              <MapPin className="w-4 h-4 text-primary mr-3" />
              <span className="text-gray-200 font-medium">{loc}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">DON'T SEE YOUR LOCATION?</h2>
          <p className="text-gray-300 mb-6">
            We cover many surrounding villages and areas along the M1 and M25 motorways. Give us a call to check if we can reach you.
          </p>
          <Button size="lg" className="bg-primary text-black font-bold uppercase">
            <Phone className="mr-2 w-5 h-5" /> Call to Check: 07988 018865
          </Button>
        </div>
      </div>
    </div>
  );
}