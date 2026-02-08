import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-heading font-bold text-2xl text-white tracking-wider">QUEENSWAY</span>
              <span className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Mobile Tyres</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              London's premier mobile tyre fitting service. We bring the garage to your door, 24/7. Expert technicians, competitive prices, and rapid response times.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-gray-400 hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/mobile-tyre-fitting"><a className="text-gray-400 hover:text-primary transition-colors">Mobile Tyre Fitting</a></Link></li>
              <li><Link href="/emergency-call-out"><a className="text-gray-400 hover:text-primary transition-colors">Emergency Call Out</a></Link></li>
              <li><Link href="/puncture-repair"><a className="text-gray-400 hover:text-primary transition-colors">Puncture Repair</a></Link></li>
              <li><Link href="/locations"><a className="text-gray-400 hover:text-primary transition-colors">Locations</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></Link></li>
              <li><Link href="/booking"><a className="text-gray-400 hover:text-primary transition-colors">Book Online</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/mobile-tyre-fitting"><a className="text-gray-400 hover:text-primary transition-colors">Tyre Replacement</a></Link></li>
              <li><Link href="/puncture-repair"><a className="text-gray-400 hover:text-primary transition-colors">Puncture Repairs</a></Link></li>
              <li><Link href="/emergency-call-out"><a className="text-gray-400 hover:text-primary transition-colors">Roadside Assistance</a></Link></li>
              <li><Link href="/battery-replacement"><a className="text-gray-400 hover:text-primary transition-colors">Battery Replacement</a></Link></li>
              <li><Link href="/wheel-balancing"><a className="text-gray-400 hover:text-primary transition-colors">Wheel Balancing</a></Link></li>
              <li><Link href="/locking-nut-removal"><a className="text-gray-400 hover:text-primary transition-colors">Locking Nut Removal</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-gray-400">101 Queensway, Queensway Service Station, Hemel Hempstead HP2 5HD</span>
              </li>
              <li>
                <a href="tel:07427515915" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  <span className="font-bold text-white text-lg">07427 515915</span>
                </a>
              </li>
              <li>
                <a href="tel:07988018865" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group opacity-60">
                  <span className="text-xs uppercase tracking-widest bg-white/5 px-2 py-1 rounded shrink-0">Secondary</span>
                  <span className="text-sm font-medium">07988 018865</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/447427515915" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  <span className="text-white">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@queenswaymobiletyres.co.uk" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@queenswaymobiletyres.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Popular Locations</h3>
            <ul className="space-y-3 two-column-list">
              <li><Link href="/locations/watford"><a className="text-gray-400 hover:text-primary transition-colors">Watford</a></Link></li>
              <li><Link href="/locations/st-albans"><a className="text-gray-400 hover:text-primary transition-colors">St Albans</a></Link></li>
              <li><Link href="/locations/luton"><a className="text-gray-400 hover:text-primary transition-colors">Luton</a></Link></li>
              <li><Link href="/locations/milton-keynes"><a className="text-gray-400 hover:text-primary transition-colors">Milton Keynes</a></Link></li>
              <li><Link href="/locations/harrow"><a className="text-gray-400 hover:text-primary transition-colors">Harrow</a></Link></li>
              <li><Link href="/locations/slough"><a className="text-gray-400 hover:text-primary transition-colors">Slough</a></Link></li>
              <li><Link href="/locations/london"><a className="text-gray-400 hover:text-primary transition-colors">North London</a></Link></li>
              <li><Link href="/locations/hemel-hempstead"><a className="text-gray-400 hover:text-primary transition-colors">Hemel Hempstead</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Queensway Mobile Tyres. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link>
            <Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link>
            <Link href="/sitemap"><a className="hover:text-primary transition-colors">Sitemap</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}