import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";

export default function HemelHempsteadLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Hemel Hempstead",
        "description": "Professional mobile tyre fitting in Hemel Hempstead. 24/7 emergency service in HP1, HP2, HP3. We come to you at home, work or M1 roadside.",
        "areaServed": {
            "@type": "City",
            "name": "Hemel Hempstead"
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "Queensway Mobile Tyres",
            "telephone": "07988 018865"
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyre Fitting Hemel Hempstead | 24/7 Service"
                description="Hemel Hempstead's trusted mobile tyre fitters. We replace tyres at your home, workplace, or roadside. 24/7 Emergency call-out for HP postcodes."
                keywords="mobile tyre fitting hemel hampstead, tyres hemel hempstead, emergency puncture repair hemel, mobile mechanic hp1, tyre replacement hemel"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting Hemel Hempstead" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        MOBILE TYRE FITTING <br /><span className="text-primary">HEMEL HEMPSTEAD</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        Fast, reliable tyre replacement in Hemel Hempstead. We bring the garage to you, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07988018865">
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">
                                <Phone className="mr-2 w-5 h-5" /> Call 07988 018865
                            </Button>
                        </a>
                        <Link href="/booking">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">
                                Book Online
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Hemel Hempstead</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Based in Hertfordshire, Queensway Mobile Tyres offers rapid response mobile tyre fitting throughout Hemel Hempstead (HP1, HP2, HP3). Why wait at a garage when we can come to you?
                        </p>
                        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                            <p className="text-white font-bold">M1 & A41 Breakdown Support</p>
                            <p className="text-sm text-gray-400">If you have a blowout on the M1 near Hemel or the A41 bypass, our emergency team can reach you quickly to get you back on the road safely.</p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Emergency Tyre Replacement",
                                "Mobile Puncture Repair",
                                "Wheel Balancing",
                                "Battery Replacement",
                                "Commercial Van Tyres"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Local Coverage</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Hemel Hempstead Town", "Boxmoor", "Apsley", "Bennetts End",
                                "Adeyfield", "Chaulden", "Warner's End", "Gadebridge",
                                "Leverstock Green", "Nash Mills", "Felden", "Bourne End"
                            ].map((area) => (
                                <div key={area} className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">The Smart Choice for Hemel Drivers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Save Time</h3>
                            <p className="text-gray-400">No more lunch breaks wasted at the tyre shop. We work while you work, or relax at home.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Urgent Call-Outs</h3>
                            <p className="text-gray-400">Stranded with a flat? Our emergency hotline is open 24/7/365.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
                            <p className="text-gray-400">Competitive rates for premium service. No hidden fees. What we quote is what you pay.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
