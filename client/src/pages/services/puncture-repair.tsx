import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Wrench } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.png";

export default function PunctureRepair() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Puncture Repair London"
        description="Safe and permanent mobile puncture repair service. BS AU 159 compliant repairs at your location. Save money on new tyres."
        keywords="mobile puncture repair, tyre repair london, flat tyre fix, screw in tyre"
        image={heroImage}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">PUNCTURE REPAIR</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Got a flat tyre? You might not need a new one. We offer safe, British Standard compliant puncture repairs at your location, saving you money.
            </p>
            <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8">
              <Phone className="mr-2 w-5 h-5" /> Get a Quote: 07988 018865
            </Button>
          </div>
          <div>
             <img src={heroImage} alt="Puncture Repair" className="rounded-lg shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">CAN MY TYRE BE REPAIRED?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-green-900/10 border border-green-500/30 p-6 rounded">
            <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center"><CheckCircle className="mr-2" /> REPAIRABLE</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Damage is within the central 3/4 of the tread</li>
              <li>• Damage is less than 6mm in diameter</li>
              <li>• Tyre has not been driven on whilst flat</li>
              <li>• No previous repairs in the same area</li>
            </ul>
          </div>
          <div className="bg-red-900/10 border border-red-500/30 p-6 rounded">
            <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center"><Wrench className="mr-2" /> REPLACE REQUIRED</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Damage is on the sidewall or shoulder</li>
              <li>• Damage is larger than 6mm</li>
              <li>• Run-flat tyres (often cannot be repaired safely)</li>
              <li>• Internal structure damage from driving flat</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8 italic">
          *Our technicians will always inspect the tyre first. If it cannot be repaired safely, we carry replacement tyres to get you moving.
        </p>
      </div>
      <Footer />
    </div>
  );
}