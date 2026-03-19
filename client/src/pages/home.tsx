import { Navbar } from "@/components/navbar";
import { ServiceCard } from "@/components/service-card";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Settings,
  Fuel,
  Battery,
  ChevronRight,
  Star,
  CheckCircle,
  CreditCard,
  CalendarCheck,
  Quote,
  Navigation,
  Car,
  Zap,
  Lock
} from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import mechanicImage from "@assets/generated_images/mechanic_checking_tyre_pressure.webp";
import tyreImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp";
import vanInterior from "@assets/generated_images/mobile_tyre_fitting_van_interior.webp";
import mechanicCustomer from "@assets/stock_images/mechanic_shaking_han_9a974962.jpg";
import tyreTread from "@assets/stock_images/modern_tyre_tread_cl_04a1f108.jpg";
import wheelBalancing from "@assets/generated_images/digital_wheel_balancer_screen.webp";
import fuelImage from "@assets/generated_images/emergency_fuel_canister_pour.webp";
import batteryImage from "@assets/generated_images/car_battery_installation_close_up.webp";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Schema.org LocalBusiness Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Queensway Mobile Tyres",
    "knowsAbout": "Mobile Tyre Fitting, Puncture Repair, Emergency Tyre Replacement",
    "image": "https://queenswaymobiletyres.co.uk" + heroImage,
    "telephone": "07427 515915",
    "faxNumber": "07988 018865",
    "email": "info@queenswaymobiletyres.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hemel Hempstead",
      "addressRegion": "Hertfordshire",
      "addressCountry": "UK"
    },
    "areaServed": [
      { "@type": "City", "name": "Hemel Hempstead" },
      { "@type": "City", "name": "Watford" },
      { "@type": "City", "name": "St Albans" },
      { "@type": "City", "name": "Luton" },
      { "@type": "City", "name": "Aylesbury" },
      { "@type": "City", "name": "High Wycombe" },
      { "@type": "City", "name": "Hatfield" },
      { "@type": "City", "name": "Welwyn Garden City" },
      { "@type": "City", "name": "Stevenage" },
      { "@type": "City", "name": "Harrow" },
      { "@type": "City", "name": "Slough" },
      { "@type": "City", "name": "Milton Keynes" },
      { "@type": "AdministrativeArea", "name": "Hertfordshire" },
      { "@type": "AdministrativeArea", "name": "Bedfordshire" },
      { "@type": "AdministrativeArea", "name": "Buckinghamshire" },
      { "@type": "AdministrativeArea", "name": "Middlesex" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "Expert mobile tyre fitting in Hemel Hempstead & Hertfordshire. We bring the garage to your home, workplace, or roadside. 24/7 Emergency response."
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Inject Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mobile Tyre Fitting Van in Hemel Hempstead"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-wider mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Rated 5★ on Google | 24/7 Emergency Response
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-4 text-white drop-shadow-lg">
              Queensway <span className="text-primary">Mobile Tyre Fitting</span> <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 block mt-2">— Hemel Hempstead & Hertfordshire</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Reliable, fast & affordable 24/7 service. Based in Hemel Hempstead, we bring the garage to your home, work, or roadside within a 40-mile radius—covering Watford, St Albans, Luton & Aylesbury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07427515915" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg h-16 px-10 uppercase tracking-wide w-full shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,0,0.5)] transition-all transform hover:-translate-y-1">
                  <Phone className="mr-2 h-6 w-6" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-lg h-16 px-10 uppercase tracking-wide w-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" className="mr-2 h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>60-Min Response</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Tyres Fitted" },
              { number: "24/7", label: "Availability" },
              { number: "30-60m", label: "Response Time" },
              { number: "25yr", label: "Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tire-pattern opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Our Services</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">Premium Automotive Solutions</h3>
            </div>
            <Link href="/mobile-tyre-fitting">
              <Button variant="link" className="text-white hover:text-primary mt-4 md:mt-0 group cursor-pointer">
                View All Services <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={item} className="h-full">
              <Link href="/mobile-tyre-fitting" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Mobile Tyre Fitting"
                  description="Fast, professional tyre fitting at your home or work. Don't waste time at the garage—we come to you. Book your slot today!"
                  icon={Truck}
                  image={vanInterior}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/emergency-call-out" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Emergency Call-Out"
                  description="Stuck with a flat? Our 24/7 emergency team reaches you in 30-60 mins. rapid roadside assistance to get you moving again."
                  icon={Clock}
                  image={tyreTread}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/puncture-repair" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Puncture Repair"
                  description="Save money with safe, BS-standard puncture repairs. We fix flat tyres on-site so you don't have to buy a new one unless necessary."
                  icon={Wrench}
                  image={tyreImage}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/wheel-balancing" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Wheel Balancing"
                  description="Stop the shakes. Our mobile digital balancing ensures a smooth ride and prevents uneven tyre wear. Included with every fitting."
                  icon={Settings}
                  image={wheelBalancing}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/battery-replacement" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Battery Replacement"
                  description="Dead battery? We deliver and fit high-quality batteries for all vehicle types at your location. Get started again instantly."
                  icon={Battery}
                  image={batteryImage}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/emergency-fuel" className="block h-full cursor-pointer">
                <ServiceCard
                  title="Emergency Fuel"
                  description="Run dry? We'll deliver petrol or diesel to your location immediately. Fast, reliable fuel delivery to get you to the pump."
                  icon={Fuel}
                  image={fuelImage}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tyre Brands Section */}
      <section className="py-16 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Premium Selection</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Tyre Brands We Stock</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              From premium European manufacturers to quality budget brands, we carry an extensive stock for same-day fitting. All tyres are sourced from authorised UK distributors and backed by manufacturer warranties.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {[
              { name: "Michelin", tier: "premium" },
              { name: "Continental", tier: "premium" },
              { name: "Pirelli", tier: "premium" },
              { name: "Bridgestone", tier: "premium" },
              { name: "Goodyear", tier: "premium" },
              { name: "Dunlop", tier: "premium" },
              { name: "Hankook", tier: "mid" },
              { name: "Yokohama", tier: "mid" },
              { name: "Toyo", tier: "mid" },
              { name: "Falken", tier: "mid" },
              { name: "Nexen", tier: "budget" },
              { name: "Avon", tier: "budget" }
            ].map(brand => (
              <div key={brand.name} className="bg-secondary/60 border border-white/10 hover:border-primary/40 p-4 rounded-lg text-center transition-all hover:-translate-y-0.5 group">
                <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{brand.name}</p>
                <p className="text-xs text-gray-500 mt-1 capitalize">{brand.tier}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" />Summer Tyres</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Winter Tyres</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />All-Season Tyres</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400" />Run-Flat Tyres</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-400" />XL / Extra Load</span>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-background border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">All Vehicles Welcome</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">We Fit Tyres for Every Vehicle Type</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our state-of-the-art mobile vans are equipped to handle any vehicle — from standard hatchbacks to high-performance sports cars, SUVs, 4x4s, and commercial vans.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Car, label: "Cars & Hatchbacks", desc: "All makes from Ford to Ferrari. Sizes 13\" to 22\"." },
              { icon: Truck, label: "SUVs & 4x4s", desc: "Land Rover, BMW X5, Audi Q7, Range Rover & more." },
              { icon: Settings, label: "Vans & LCVs", desc: "Transit, Sprinter, Vivaro. Single or double rear wheel." },
              { icon: Zap, label: "High Performance", desc: "Low-profile, run-flat, and ultra-high-performance tyres." }
            ].map((type, i) => (
              <div key={i} className="bg-secondary/30 border border-white/10 hover:border-primary/40 p-6 rounded-xl text-center group transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-white font-bold mb-2">{type.label}</h4>
                <p className="text-gray-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/mobile-tyre-fitting">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-wide">
                View Our Full Mobile Tyre Fitting Service <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content for SEO - Why Choose Us 1 */}
      <section className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-bold text-white">Why Choose Queensway Mobile Tyres?</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Queensway Mobile Tyres is Hemel Hempstead and Hertfordshire's leading mobile tyre fitting service. We understand that your time is valuable, which is why we bring the tyre depot to you within a 40-mile radius. Whether you need a <strong>same-day tyre replacement at home</strong>, a quick <strong>puncture repair at work</strong>, or urgent <strong>24/7 emergency roadside assistance</strong>, our expert technicians are just a phone call away.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our fleet of vans is equipped with the latest tyre changing and balancing machinery, allowing us to handle everything from standard cars to 4x4s, vans, and high-performance vehicles. We stock a huge range of tyres including premium brands like Michelin, Continental, and Pirelli, as well as quality budget options.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 text-white font-medium">
                  <Star className="text-primary w-5 h-5 fill-current" /> 5-Star Rated Service
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <ShieldCheck className="text-primary w-5 h-5" /> Fully Insured
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <Clock className="text-primary w-5 h-5" /> 60-Min Response
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <MapPin className="text-primary w-5 h-5" /> 40-Mile Coverage Radius
                </div>
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    Learn More About Our Company
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img
                src={mechanicCustomer}
                alt="Happy customer with mobile mechanic"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-secondary/50 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Simple Process</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-16">HOW IT WORKS</h3>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20 text-primary">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">1. Contact Us</h4>
              <p className="text-gray-400">Call or WhatsApp us with your tyre size and location.</p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="relative">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20 text-primary">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">2. Book Slot</h4>
              <p className="text-gray-400">Choose a time and location that suits you best.</p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="relative">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20 text-primary">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">3. We Arrive</h4>
              <p className="text-gray-400">Our expert fitter arrives and completes the job on-site.</p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="relative">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20 text-primary">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">4. Job Done</h4>
              <p className="text-gray-400">Pay securely by card or cash once you're happy.</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wide">
                Book Your Fitting Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section - Why Choose Us 2 */}
      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg transform -rotate-2" />
              <img
                src={mechanicImage}
                alt="Mechanic working"
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded shadow-xl hidden md:block">
                <p className="font-heading font-bold text-4xl text-black">100%</p>
                <p className="text-black font-bold uppercase text-sm">Satisfaction</p>
              </div>
            </div>

            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest mb-2">The Queensway Difference</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">EXPERIENCE THE FUTURE OF TYRE CARE</h3>
              <p className="text-gray-400 mb-6 text-lg">
                Gone are the days of wasting hours at a garage. Queensway Mobile Tyres brings the workshop to you.
                Whether you're at home, at work, or stranded on the roadside, our expert technicians are equipped
                to handle all your tyre needs efficiently.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Fast response times (30-60 mins)",
                  "Competitive pricing with no hidden fees",
                  "All major tyre brands available",
                  "Professional, fully insured technicians"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <ShieldCheck className="text-primary w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link href="/about">
                  <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wide">
                    About Us
                  </Button>
                </Link>
                <Link href="/locations">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wide">
                    View Coverage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Customer Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">WHAT OUR CUSTOMERS SAY</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { name: "Yelp", color: "bg-red-600", rating: "5.0" },
              { name: "Yell.com", color: "bg-yellow-500 text-black", rating: "5.0" },
              { name: "Yellow Pages", color: "bg-yellow-400 text-black", rating: "5.0" },
              { name: "Trustpilot", color: "bg-[#00b67a] text-white", rating: "5.0" },
              { name: "Google", color: "bg-blue-600", rating: "4.9" }
            ].map((platform) => (
              <div key={platform.name} className={`flex items-center gap-3 px-6 py-3 rounded-lg border border-white/10 ${platform.name === 'Yelp' || platform.name === 'Google' || platform.name === 'Trustpilot' ? 'bg-white/5' : 'bg-white/5'}`}>
                {/* Visual Badge for the Brand Name */}
                <div className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${platform.color} ${platform.name === 'Yell.com' || platform.name === 'Yellow Pages' ? 'text-black' : 'text-white'}`}>
                  {platform.name}
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white">{platform.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                location: "Watford",
                text: "Absolutely brilliant service. Had a blowout on the M1 and they arrived within 40 minutes. Professional, friendly and got me back on the road quickly. Highly recommended!",
                rating: 5
              },
              {
                name: "David Miller",
                location: "St Albans",
                text: "Used their home fitting service for 4 new tyres. Much cheaper than my local garage and so much more convenient. The fitter was polite and did a great job.",
                rating: 5
              },
              {
                name: "James Thompson",
                location: "Harrow",
                text: "Saved my morning! Car battery died just as I was leaving for work. They came out, tested it, and fitted a new one within the hour. Excellent service.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-background p-8 rounded-lg border border-white/5 relative group hover:border-primary/30 transition-colors">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-primary text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-white font-bold">4.9/5</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">Average Customer Rating</span>
            </div>

            <a href="https://share.google/itMt0xwMRqNiD2gsU" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-wide">
                <Star className="w-4 h-4 mr-2" />
                Read All Reviews on Google
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* NEW Local SEO Optimized Service Area Section */}
      <section id="coverage" className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Service Areas</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">AREAS WE SERVE</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Based in Hemel Hempstead, we provide fast mobile tyre fitting within a 40-mile radius across Hertfordshire, Bedfordshire, and Buckinghamshire. Select your area below for more details.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { name: "Hemel Hempstead", link: "/locations/hemel-hempstead" },
              { name: "Watford", link: "/locations/watford" },
              { name: "St Albans", link: "/locations/st-albans" },
              { name: "Luton", link: "/locations/luton" },
              { name: "Aylesbury", link: "/locations/aylesbury" },
              { name: "Stevenage", link: "/locations/stevenage" },
              { name: "High Wycombe", link: "/locations/high-wycombe" },
              { name: "Milton Keynes", link: "/locations/milton-keynes" }
            ].map((city) => (
              <Link key={city.name} href={city.link}>
                <div className="bg-secondary/30 border border-white/10 hover:border-primary/50 p-6 rounded-lg text-center cursor-pointer group transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{city.name}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center bg-secondary/20 p-8 rounded-2xl border border-white/5">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Coverage You Can Count On</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Operating from our Hemel Hempstead base with a <strong>40-mile working radius</strong>, our strategic location allows us to offer <strong>rapid response times</strong>. 
                Whether you are in Hemel Hempstead, Watford, St Albans, Luton, Aylesbury, or anywhere across Hertfordshire, Bedfordshire, or Buckinghamshire, our mobile tyre fitters are always nearby.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Welwyn Garden City</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Hatfield</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Harpenden</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Amersham</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Chesham</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Borehamwood</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Dunstable</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Tring</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Berkhamsted</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Hitchin</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Uxbridge</span>
                <span className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300">Rickmansworth</span>
              </div>
              <Link href="/locations">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wide">
                  View Full Coverage Map
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158145.75330836512!2d-0.7103178224536236!3d51.75168019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487643f8ddf311eb%3A0xe1047644265cc281!2sHemel%20Hempstead!5e0!3m2!1sen!2suk!4v1703000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Queensway Mobile Tyres Service Area"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Hub - All Services & Locations */}
      <section className="py-20 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Explore Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Everything You Need, Where You Are</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Services Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" /> Our Mobile Services
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Same-day supply & fit at your location", href: "/mobile-tyre-fitting" },
                  { label: "24/7 Emergency Call-Out", sub: "Rapid roadside response in 30–60 mins", href: "/emergency-call-out" },
                  { label: "Puncture Repair", sub: "BS AU 159 compliant permanent repairs", href: "/puncture-repair" },
                  { label: "Wheel Balancing", sub: "Digital precision balancing, no vibration", href: "/wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "Supply & fit AGM, EFB & standard batteries", href: "/battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel delivered to you 24/7", href: "/emergency-fuel" },
                  { label: "Locking Wheel Nut Removal", sub: "Lost your key? We remove without damage", href: "/locking-nut-removal" },
                ].map(service => (
                  <Link key={service.href} href={service.href}>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 border border-white/10 hover:border-primary/40 rounded-lg group transition-all hover:-translate-x-0.5 cursor-pointer">
                      <div>
                        <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{service.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{service.sub}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Key Service Areas
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyres Hemel Hempstead", sub: "Our home base — HP1, HP2, HP3", href: "/locations/hemel-hempstead" },
                  { label: "Mobile Tyres Watford", sub: "WD17, WD18, WD19, WD24, WD25", href: "/locations/watford" },
                  { label: "Mobile Tyres St Albans", sub: "AL1, AL2, AL3, AL4 & surrounding areas", href: "/locations/st-albans" },
                  { label: "Mobile Tyres Luton", sub: "LU1–LU4, Luton Airport & M1 J10–11", href: "/locations/luton" },
                  { label: "Mobile Tyres Aylesbury", sub: "HP17–HP22 & A41 corridor", href: "/locations/aylesbury" },
                  { label: "Mobile Tyres High Wycombe", sub: "HP10–HP15 & M40 J4", href: "/locations/high-wycombe" },
                  { label: "Mobile Tyres Hatfield", sub: "AL9, AL10 & A1(M) J3 — 15mi from base", href: "/locations/hatfield" },
                  { label: "Mobile Tyres Welwyn Garden City", sub: "AL7, AL8 & A1(M) J4 corridor", href: "/locations/welwyn-garden-city" },
                  { label: "Mobile Tyres Harrow", sub: "HA1, HA2, HA3 & North West London", href: "/locations/harrow" },
                  { label: "Mobile Tyres Slough", sub: "SL1, SL2, SL3 & M4 corridor", href: "/locations/slough" },
                  { label: "Mobile Tyres Milton Keynes", sub: "MK postcodes & M1 J13–14", href: "/locations/milton-keynes" },
                  { label: "Mobile Tyres North London", sub: "Barnet, Edgware, Enfield & N postcodes", href: "/locations/london" },
                  { label: "View All Coverage Areas", sub: "Full list of towns & villages within 40 miles", href: "/locations" },
                ].map(loc => (
                  <Link key={loc.href} href={loc.href}>
                    <div className="flex items-center justify-between p-4 bg-secondary/30 border border-white/10 hover:border-primary/40 rounded-lg group transition-all hover:-translate-x-0.5 cursor-pointer">
                      <div>
                        <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{loc.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{loc.sub}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" /> Tyre Guides & Advice
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "How to Handle a Tyre Blowout", href: "/blog/handling-tyre-blowout" },
                { label: "When to Replace Your Tyres", href: "/blog/when-to-replace-tyres" },
                { label: "Decoding Tyre Markings", href: "/blog/decoding-tyre-markings" },
                { label: "Mobile Tyre Fitting in London", href: "/blog/mobile-tyre-fitting-london" },
                { label: "Essential Tyre Safety Tips", href: "/blog/tyre-safety-tips" },
                { label: "Winter Tyres Guide", href: "/blog/winter-tyres-guide" },
              ].map(post => (
                <Link key={post.href} href={post.href}>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:text-primary rounded-full text-sm text-gray-300 transition-colors cursor-pointer">{post.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
}