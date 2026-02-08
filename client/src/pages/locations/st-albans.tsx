import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.webp";

export default function StAlbansLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres St Albans",
        "description": "Mobile tyre fitting experts in St Albans. We come to you at home or work. 24/7 emergency puncture repair and tyre replacement in AL1, AL2, AL3, AL4.",
        "areaServed": {
            "@type": "City",
            "name": "St Albans"
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
                title="Mobile Tyre Fitting St Albans | 24/7 Home & Work Service"
                description="Fast, reliable mobile tyre fitting in St Albans. We supply and fit car, van and 4x4 tyres at your location. 24/7 call-out for emergencies in St Albans."
                keywords="mobile tyre fitting st albans, tyre replacement st albans, puncture repair st albans, mobile mechanic al1, 24h tyres st albans"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting St Albans" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        MOBILE TYRE FITTING <br /><span className="text-primary">ST ALBANS</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        St Albans' premier mobile tyre service. Expert fitting at your home, workplace, or roadside 24/7.
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Expert Tyre Fitting in St Albans</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Looking for a trusted mobile tyre fitter in St Albans (AL1 - AL4)? Queensway Mobile Tyres offers a premium, hassle-free service that brings the tyre depot to your doorstep.
                        </p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are stuck on the <strong>A414</strong>, working in the city centre, or relaxing at home in <strong>Marshalswick</strong> or <strong>Chiswell Green</strong>, our technicians are ready to help.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "24/7 Emergency Roadside Assistance",
                                "Convenient Home Tyre Fitting",
                                "Puncture Repairs & Balancing",
                                "Wide Range of Premium & Budget Tyres",
                                "Locking Wheel Nut Removal"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Areas Covered in St Albans</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "St Albans City Centre", "London Colney", "Park Street", "Bricket Wood",
                                "Chiswell Green", "Marshalswick", "Redbourn", "Wheathampstead",
                                "Sandridge", "Jersey Farm", "Fleetville", "Smallford"
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
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                            <p className="text-gray-400">We prioritize emergency calls in St Albans and can often be with you in under 60 minutes.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Mobile Workshop</h3>
                            <p className="text-gray-400">Our vans are equipped with the latest tyre changing machines to handle low profiles and run-flats.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
                            <p className="text-gray-400">We pride ourselves on our 5-star reputation in Hertfordshire. Professional, polite, and efficient.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-secondary to-background border-t border-b border-white/10 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Trouble in St Albans?</h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Don't let a flat tyre ruin your day. Contact Queensway Mobile Tyres for immediate assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07988018865">
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto">
                                Call 07988 018865
                            </Button>
                        </a>
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
