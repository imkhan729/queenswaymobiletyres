import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";

export default function StevenageLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Stevenage",
        "description": "Expert mobile tyre fitting in Stevenage. We cover SG1, SG2 and A1(M) corridor. 24/7 service.",
        "areaServed": { "@type": "City", "name": "Stevenage" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyre Fitting Stevenage | A1(M) Tyres" description="Stevenage's trusted mobile tyre service. We come to your home, work, or roadside on the A1(M). Fast response in SG1 & SG2." keywords="mobile tyre fitting stevenage, tyres stevenage, emergency tyre repair stevenage ai(m)" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Stevenage" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">MOBILE TYRE FITTING <br /><span className="text-primary">STEVENAGE</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Rapid response tyre fitting in Stevenage and along the A1(M).</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Stevenage</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Whether you are near <strong>Gunnels Wood Road</strong> or living in <strong>Chells</strong>, our mobile vans are equipped to handle any tyre emergency. We specialize in A1(M) roadside assistance.</p>
                        <ul className="space-y-4">
                            {["A1(M) Emergency Response", "Stevenage Town Coverage", "Home & Work Visits", "Puncture Repairs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Old Town", "Broadwater", "Shephall", "Chells", "Bedwell", "Symonds Green", "Knebworth"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
