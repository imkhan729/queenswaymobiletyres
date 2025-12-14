import { Navbar } from "@/components/navbar";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
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
  ChevronRight
} from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";
import mechanicImage from "@assets/generated_images/mechanic_checking_tyre_pressure.png";
import tyreImage from "@assets/generated_images/close_up_of_car_tyre_tread.png";

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
            alt="Mobile Tyre Fitting Van" 
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
              WE BRING THE <br />
              <span className="text-primary">GARAGE TO YOU</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
              Expert mobile tyre fitting and emergency breakdown assistance. 
              Home, work, or roadside - we keep you moving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg h-14 px-8 uppercase tracking-wide">
                <Phone className="mr-2 h-5 w-5" />
                Call 07988 018865
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold text-lg h-14 px-8 uppercase tracking-wide">
                Book Online
              </Button>
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
            <Button variant="link" className="text-white hover:text-primary mt-4 md:mt-0 group">
              View All Services <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={item}>
              <ServiceCard 
                title="Mobile Tyre Fitting"
                description="We come to your home or workplace to fit new tyres. No waiting in garages, we work around your schedule."
                icon={Truck}
                image={tyreImage}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Emergency Call-Out"
                description="Stranded? Our 24/7 emergency team aims to reach you within 30-60 minutes to get you back on the road."
                icon={Clock}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Puncture Repair"
                description="Professional puncture repairs carried out on-site to British Standards (BS AU 159)."
                icon={Wrench}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Wheel Balancing"
                description="State-of-the-art mobile balancing equipment to ensure smooth driving and prevent premature tyre wear."
                icon={Settings}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Battery Replacement"
                description="Car won't start? We can supply and fit a new battery at your location."
                icon={Battery}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Emergency Fuel"
                description="Run out of fuel? We can deliver petrol or diesel to get you to the nearest station."
                icon={Fuel}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Experience Section */}
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
              <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Why Choose Us</h2>
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
              
              <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wide">
                Read More About Us
              </Button>
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

      {/* CTA / Footer */}
      <footer id="contact" className="bg-secondary pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">READY TO GET MOVING?</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Don't let a flat tyre ruin your day. Call our emergency line for immediate assistance or book a slot for a time that suits you.
              </p>
              <div className="flex flex-col gap-4">
                <a href="tel:07988018865" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase tracking-wider">Emergency 24/7</span>
                    <span className="text-2xl font-bold">07988 018865</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg border border-white/10">
              <h4 className="text-xl font-heading font-bold text-white mb-6">QUICK CONTACT</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-secondary border-none p-3 rounded text-white focus:ring-1 focus:ring-primary w-full" />
                  <input type="tel" placeholder="Phone" className="bg-secondary border-none p-3 rounded text-white focus:ring-1 focus:ring-primary w-full" />
                </div>
                <input type="text" placeholder="Vehicle Registration" className="bg-secondary border-none p-3 rounded text-white focus:ring-1 focus:ring-primary w-full" />
                <select className="bg-secondary border-none p-3 rounded text-white focus:ring-1 focus:ring-primary w-full text-gray-400">
                  <option>Select Service</option>
                  <option>Emergency Call-out</option>
                  <option>Tyre Replacement</option>
                  <option>Puncture Repair</option>
                </select>
                <Button className="w-full bg-primary text-black font-bold uppercase hover:bg-primary/90">Request Callback</Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Queensway Mobile Tyres. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}