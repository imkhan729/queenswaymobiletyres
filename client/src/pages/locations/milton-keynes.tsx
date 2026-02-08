import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";

export default function MiltonKeynesLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Milton Keynes",
        "description": "Professional mobile tyre fitting in Milton Keynes (MK). 24/7 emergency coverage across the grid system and M1 Junctions 13-14.",
        "areaServed": { "@type": "City", "name": "Milton Keynes" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyre Fitting Milton Keynes | 24/7 MK Tyres" description="Expert mobile tyre fitting in Milton Keynes. We cover all MK postcodes, Bletchley, and Wolverton. Fast response to M1 J13-14." keywords="mobile tyre fitting milton keynes, tyres mk, emergency tyre repair milton keynes, mobile tyres bletchley" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Milton Keynes" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">MOBILE TYRE FITTING <br /><span className="text-primary">MILTON KEYNES</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Serving Milton Keynes and surrounding Buckinghamshire areas with rapid mobile tyre services.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in MK</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Whether you are shopping at <strong>The Centre:MK</strong> or working in <strong>Bletchley</strong>, a flat tyre shouldn't ruin your day. Our mobile technicians navigate the Milton Keynes grid roads efficiently to reach you fast.</p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">We provide complete coverage for all MK postcodes, offering everything from puncture repairs to full set replacements on your driveway.</p>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">MK Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Central Milton Keynes", "Bletchley", "Wolverton", "Newport Pagnell", "Stony Stratford", "Kingston", "Shenley", "Woburn Sands"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Tyres in Milton Keynes?</h2>
                    <a href="tel:07427515915"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">Call 07427 515915</Button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
