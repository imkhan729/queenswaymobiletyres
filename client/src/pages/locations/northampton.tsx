import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";

export default function NorthamptonLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Northampton",
        "description": "Expert mobile tyre fitting in Northampton. We come to you at home or work. 24/7 service in NN1, NN2, NN3, NN4, NN5.",
        "areaServed": { "@type": "City", "name": "Northampton" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07988 018865" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyre Fitting Northampton | 24/7 Tyres" description="Northampton's leading mobile tyre fitting service. We replace tyres at your location across all NN postcodes and M1 J15-16." keywords="mobile tyre fitting northampton, tyres northampton, emergency tyre repair nn1, mobile tyres duston" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Northampton" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">MOBILE TYRE FITTING <br /><span className="text-primary">NORTHAMPTON</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Professional mobile tyre services across Northamptonshire and the M1.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07988018865"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07988 018865</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Northampton</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">From <strong>Duston</strong> to <strong>Kingsthorpe</strong>, or even <strong>Moulton Park</strong>, our mobile tyre fitters are ready to assist. We save you the trip to the garage.</p>
                        <ul className="space-y-4">
                            {["M1 Junction 15 & 16 Support", "Town Centre Coverage", "Home & Work Visits", "Emergency Fitting"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">NN Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Abington", "Duston", "Kingsthorpe", "Far Cotton", "Delapre", "Dallington", "Wootton", "Hardingstone"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Problems in Northampton?</h2>
                    <a href="tel:07988018865"><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">Call 07988 018865</Button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
