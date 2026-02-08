import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";

export default function HarrowLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Harrow",
        "description": "Expert mobile tyre fitting in Harrow & North West London. We come to you 24/7. Emergency tyre replacement in HA1, HA2, HA3.",
        "areaServed": { "@type": "City", "name": "Harrow" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyre Fitting Harrow | Same Day Tyres HA1" description="Rapid mobile tyre fitting in Harrow, Wealdstone, and Pinner. We offer puncture repairs and new tyres at your home or work." keywords="mobile tyre fitting harrow, tyres ha1, emergency tyre repair harrow, mobile tyres wealdstone" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Harrow" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">MOBILE TYRE FITTING <br /><span className="text-primary">HARROW</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Professional tyre services delivered to your door in Harrow and North West London.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Harrow</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Living in Harrow (HA1) or surrounding areas like Pinner and Stanmore? Avoid the traffic and long waits at garages. Queensway Mobile Tyres brings the entire fitting center to your location.</p>
                        <ul className="space-y-4">
                            {["Same Day Appointments", "All HA Postcodes Covered", "Puncture Repairs", "SUV & Van Tyres"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Harrow Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Harrow on the Hill", "Wealdstone", "South Harrow", "North Harrow", "Pinner", "Rayners Lane", "Stanmore", "Kenton"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in Harrow?</h2>
                    <a href="tel:07427515915"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">Call 07427 515915</Button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
