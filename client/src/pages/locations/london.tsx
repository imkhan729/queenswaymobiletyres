import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_london.webp";

export default function LondonLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres North London",
        "description": "Premium mobile tyre fitting in North & North West London. We serve Barnet, Edgware, Harrow, Wembley, Enfield and surrounding areas. 24/7 service.",
        "areaServed": {
            "@type": "City",
            "name": "London"
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
                title="Mobile Tyre Fitting North London | 24/7 Emergency Service"
                description="Expert mobile tyre fitting in North London. We cover Barnet, Harrow, Edgware, Brent Cross and more. Fast response, home or work service."
                keywords="mobile tyre fitting north london, tyres barnet, tyres harrow, tyre replacement edgware, mobile mechanic london"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting North London" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        MOBILE TYRE FITTING <br /><span className="text-primary">NORTH LONDON</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        The #1 choice for mobile tyre fitting in North & North West London. We bring the tyre shop to you.
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">London's Convenient Tyre Service</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Driving in London is stressful enough without the hassle of a flat tyre. Queensway Mobile Tyres provides a rapid, professional solution for drivers in North and North West London coverage areas.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-secondary/50 p-4 rounded border border-white/5">
                                <Zap className="text-yellow-500 w-6 h-6 mb-2" />
                                <h4 className="font-bold text-white">Emergency Response</h4>
                                <p className="text-sm text-gray-400">Fast call-out for blowouts and punctures.</p>
                            </div>
                            <div className="bg-secondary/50 p-4 rounded border border-white/5">
                                <Truck className="text-primary w-6 h-6 mb-2" />
                                <h4 className="font-bold text-white">Home & Work</h4>
                                <p className="text-sm text-gray-400">We fit tyres on your driveway or office car park.</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We handle everything from a single puncture repair to a full set of new tyres. All work is carried out to the highest safety standards by experienced technicians.
                        </p>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Key London Areas Served</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "North London", "North West London", "Barnet", "Harrow",
                                "Edgware", "Stanmore", "Wembley", "Brent Cross",
                                "Golders Green", "Finchley", "Mill Hill", "Ruislip"
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
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Why Londoners Trust Queensway</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Avoid Traffic</h3>
                            <p className="text-gray-400">Don't sit in traffic trying to find a garage. We come to you, saving you hours of wasted time.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">ULEZ Compliant Vans</h3>
                            <p className="text-gray-400">Our modern fleet operates throughout the ULEZ zone, serving you wherever you are.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">All Makes & Models</h3>
                            <p className="text-gray-400">From city cars to SUVs and high-performance vehicles, we have the stock and expertise to help.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
