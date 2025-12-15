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
  Quote
} from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";
import mechanicImage from "@assets/generated_images/mechanic_checking_tyre_pressure.png";
import tyreImage from "@assets/generated_images/close_up_of_car_tyre_tread.png";
import vanInterior from "@assets/generated_images/mobile_tyre_fitting_van_interior.png";
import mechanicCustomer from "@assets/stock_images/mechanic_shaking_han_9a974962.jpg";
import tyreTread from "@assets/stock_images/modern_tyre_tread_cl_04a1f108.jpg";
import wheelBalancing from "@assets/generated_images/digital_wheel_balancer_screen.png";
import fuelImage from "@assets/generated_images/emergency_fuel_canister_pour.png";
import batteryImage from "@assets/generated_images/car_battery_installation_close_up.png";

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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Mobile Tyre Fitting Van London" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              24/7 Emergency Response
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6 text-white">
              MOBILE TYRES <br />
              <span className="text-primary">FITTED AT HOME</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
              Expert mobile tyre fitting in London & Hertfordshire. We bring the garage to your home, workplace, or roadside. Fast, reliable, and open 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07988018865">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg h-14 px-8 uppercase tracking-wide w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07988 018865
                </Button>
              </a>
              <a href="https://wa.me/447988018865" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg h-14 px-8 uppercase tracking-wide border-none w-full sm:w-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Us
                </Button>
              </a>
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
                  description="We come to your home or workplace to fit new tyres. No waiting in garages, we work around your schedule."
                  icon={Truck}
                  image={vanInterior}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/emergency-call-out" className="block h-full cursor-pointer">
                <ServiceCard 
                  title="Emergency Call-Out"
                  description="Stranded? Our 24/7 emergency team aims to reach you within 30-60 minutes to get you back on the road."
                  icon={Clock}
                  image={tyreTread}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/puncture-repair" className="block h-full cursor-pointer">
                <ServiceCard 
                  title="Puncture Repair"
                  description="Professional puncture repairs carried out on-site to British Standards (BS AU 159). Save money on new tyres."
                  icon={Wrench}
                  image={tyreImage}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/wheel-balancing" className="block h-full cursor-pointer">
                <ServiceCard 
                  title="Wheel Balancing"
                  description="State-of-the-art mobile balancing equipment to ensure smooth driving and prevent premature tyre wear."
                  icon={Settings}
                  image={wheelBalancing}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/battery-replacement" className="block h-full cursor-pointer">
                <ServiceCard 
                  title="Battery Replacement"
                  description="Car won't start? We can supply and fit a new battery at your location for all vehicle makes and models."
                  icon={Battery}
                  image={batteryImage}
                />
              </Link>
            </motion.div>
            <motion.div variants={item} className="h-full">
              <Link href="/emergency-fuel" className="block h-full cursor-pointer">
                <ServiceCard 
                  title="Emergency Fuel"
                  description="Run out of fuel? We can deliver petrol or diesel to get you to the nearest station."
                  icon={Fuel}
                  image={fuelImage}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content for SEO - Why Choose Us 1 */}
      <section className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6">
               <h3 className="text-3xl font-heading font-bold text-white">Why Choose Queensway Mobile Tyres?</h3>
               <p className="text-gray-400 text-lg leading-relaxed">
                 Queensway Mobile Tyres is London's leading mobile tyre fitting service. We understand that your time is valuable, which is why we bring the tyre depot to you. Whether you need a <strong>same-day tyre replacement at home</strong>, a quick <strong>puncture repair at work</strong>, or urgent <strong>24/7 emergency roadside assistance</strong>, our expert technicians are just a phone call away.
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
                   <MapPin className="text-primary w-5 h-5" /> Greater London Coverage
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
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-white font-bold">4.9/5</span>
              <div className="flex gap-0.5">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                  ))}
              </div>
              <span className="text-gray-400 text-sm">Average Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Service Area</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12">WHERE WE OPERATE</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Watford", "Hemel Hempstead", "St Albans", "Luton",
              "Milton Keynes", "Uxbridge", "Harrow", "Barnet",
              "M1 Corridor", "M25 Corridor", "Slough", "High Wycombe"
            ].map((area) => (
              <div key={area} className="flex items-center justify-center p-4 border border-white/10 rounded hover:border-primary/50 transition-colors bg-white/5">
                <MapPin className="w-4 h-4 text-primary mr-2" />
                <span className="text-gray-300 font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-500">
            Covering Hertfordshire, Bedfordshire, Buckinghamshire and Greater London.
          </p>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
}