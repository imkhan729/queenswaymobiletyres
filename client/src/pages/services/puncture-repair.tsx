import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Wrench, ShieldCheck, HelpCircle, AlertTriangle } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.png";
import tyreImage from "@assets/generated_images/close_up_of_car_tyre_tread.png";
import { Link } from "wouter";

export default function PunctureRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Puncture Repair London",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Queensway Mobile Tyres",
      "telephone": "07988 018865",
      "priceRange": "$"
    },
    "description": "Safe and permanent mobile puncture repair service. BS AU 159 compliant repairs at your location."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Mobile Puncture Repair London | Safe & Permanent Repairs"
        description="Got a flat tyre? We offer BS AU 159 compliant puncture repairs at your home or work. Save money on new tyres. Mobile service across London & Herts."
        keywords="mobile puncture repair, tyre repair london, flat tyre fix, screw in tyre, puncture repair cost, tyre plug, patch repair"
        image={heroImage}
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile Puncture Repair London" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              MOBILE <span className="text-primary">PUNCTURE REPAIR</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't replace it if you can repair it. We offer safe, permanent, and British Standard compliant puncture repairs at your location. 
              Save money and reduce waste with our expert mobile repair service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                <Phone className="mr-2 w-5 h-5" /> Repair My Tyre: 07988 018865
              </Button>
              <Link href="/contact">
                 <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase w-full sm:w-auto">
                   Online Enquiry
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Safe Tyre Repairs To British Standards</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A puncture doesn't always mean you need a new tyre. If the damage is minor and located in the safe zone of the tread, we can repair it permanently. 
                At Queensway Mobile Tyres, we strictly adhere to <strong>BS AU 159g</strong>, the British Standard for tyre repairs.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Unlike temporary "string plugs" used by some roadside services, our repairs involve removing the tyre from the wheel, inspecting the internal structure for damage, 
                and applying a permanent mushroom patch-plug that seals both the puncture channel and the inner liner. This creates a repair that lasts the lifetime of the tyre.
              </p>
            </section>

            {/* Repair Criteria */}
            <section className="bg-secondary/30 rounded-lg p-8 border border-white/5">
               <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Is Your Tyre Repairable?</h3>
               <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-900/10 border border-green-500/30 p-6 rounded">
                  <h4 className="text-xl font-bold text-green-500 mb-4 flex items-center"><CheckCircle className="mr-2" /> YES - We Can Repair If:</h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Damage is within the central 3/4 of the tread (Minor Repair Area).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Puncture diameter is less than 6mm.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Entry angle allows for safe plugging.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Tyre has not been driven on while flat (run-flat damage).</li>
                  </ul>
                </div>
                <div className="bg-red-900/10 border border-red-500/30 p-6 rounded">
                  <h4 className="text-xl font-bold text-red-500 mb-4 flex items-center"><AlertTriangle className="mr-2" /> NO - Replacement Needed If:</h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Damage is on the sidewall or shoulder of the tyre.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Internal sidewall shows signs of overheating (run-flat).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Tyre tread is below legal limit (1.6mm).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Previous bad repairs exist in the same area.</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-6 text-sm italic">
                *We always bring a replacement tyre with us just in case a repair is not safe or possible, ensuring you are never left stranded.
              </p>
            </section>

            {/* Why Repair */}
            <section className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Wrench className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Cost Effective</h4>
                    <p className="text-gray-400">
                      A puncture repair is significantly cheaper than buying a brand new tyre, especially for high-performance or run-flat tyres.
                    </p>
                  </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Environmentally Friendly</h4>
                    <p className="text-gray-400">
                      Repairing extends the life of your tyre, reducing waste and the environmental impact of manufacturing new tyres.
                    </p>
                  </div>
              </div>
            </section>
          </div>

          {/* Right Column: FAQs & Contact */}
          <div className="space-y-8">
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <HelpCircle className="text-primary w-5 h-5" /> Common Questions
               </h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="text-white font-bold text-sm mb-1">Can you repair Run-Flat tyres?</h4>
                   <p className="text-gray-400 text-sm">Most manufacturers do not recommend repairing run-flat tyres as it's difficult to assess internal structure damage. We generally recommend replacement for safety.</p>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-sm mb-1">How long does it take?</h4>
                   <p className="text-gray-400 text-sm">A professional puncture repair usually takes about 20-30 minutes per tyre.</p>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-sm mb-1">Is the repair permanent?</h4>
                   <p className="text-gray-400 text-sm">Yes, our mushroom plug patch repairs are permanent and last the remaining life of the tyre.</p>
                 </div>
               </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Got a Flat?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Send us a photo of the damage on WhatsApp and we can give you an instant assessment.
              </p>
              <a href="https://wa.me/447988018865" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 uppercase">
                  WhatsApp Photo
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
