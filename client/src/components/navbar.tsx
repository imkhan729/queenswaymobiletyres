import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center transform -skew-x-12">
              <span className="font-heading font-bold text-2xl text-black transform skew-x-12">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-white tracking-wider">QUEENSWAY</span>
              <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">Mobile Tyres</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Home</a>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider outline-none py-2"
            >
              Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <div className="bg-secondary/95 backdrop-blur-md border border-white/10 rounded-md shadow-xl overflow-hidden p-1">
                <Link href="/mobile-tyre-fitting">
                  <a className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">
                    Mobile Tyre Fitting
                  </a>
                </Link>
                <Link href="/emergency-call-out">
                  <a className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">
                    Emergency Call Out
                  </a>
                </Link>
                <Link href="/puncture-repair">
                  <a className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">
                    Puncture Repair
                  </a>
                </Link>
                <Link href="/battery-replacement">
                  <a className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">
                    Battery Replacement
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
          >
            <button
              className="flex items-center text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider outline-none py-2"
            >
              Locations <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 origin-top ${isLocationsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <div className="bg-secondary/95 backdrop-blur-md border border-white/10 rounded-md shadow-xl overflow-hidden p-1 max-h-[80vh] overflow-y-auto">
                <Link href="/locations/watford">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Watford</a>
                </Link>
                <Link href="/locations/st-albans">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">St Albans</a>
                </Link>
                <Link href="/locations/hemel-hempstead">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Hemel Hempstead</a>
                </Link>
                <Link href="/locations/luton">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Luton</a>
                </Link>
                <Link href="/locations/milton-keynes">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Milton Keynes</a>
                </Link>
                <Link href="/locations/stevenage">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Stevenage</a>
                </Link>
                <Link href="/locations/slough">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Slough</a>
                </Link>
                <Link href="/locations/harrow">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Harrow</a>
                </Link>
                <Link href="/locations/northampton">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">Northampton</a>
                </Link>
                <Link href="/locations/london">
                  <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-primary transition-colors rounded-sm uppercase tracking-wide">North London</a>
                </Link>
                <div className="border-t border-white/10 mt-1 pt-1">
                  <Link href="/locations">
                    <a className="block px-4 py-2 text-sm text-primary font-bold hover:bg-white/10 transition-colors rounded-sm uppercase tracking-wide">View All Locations</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/blog">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Contact</a>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:07427515915" className="group">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wide px-6 py-6 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300">
              <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              07427 515 915
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background border-l border-white/10 overflow-y-auto">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/"><a className="text-xl font-heading font-bold text-white hover:text-primary">Home</a></Link>
                <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Services</span>
                  <Link href="/mobile-tyre-fitting"><a className="text-lg text-gray-300 hover:text-primary">Mobile Tyre Fitting</a></Link>
                  <Link href="/emergency-call-out"><a className="text-lg text-gray-300 hover:text-primary">Emergency Call Out</a></Link>
                  <Link href="/puncture-repair"><a className="text-lg text-gray-300 hover:text-primary">Puncture Repair</a></Link>
                  <Link href="/battery-replacement"><a className="text-lg text-gray-300 hover:text-primary">Battery Replacement</a></Link>
                </div>
                <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                  <Link href="/locations"><a className="text-xl font-heading font-bold text-white hover:text-primary">Locations</a></Link>
                  <Link href="/locations/watford"><a className="text-gray-300 hover:text-primary text-sm">Watford</a></Link>
                  <Link href="/locations/st-albans"><a className="text-gray-300 hover:text-primary text-sm">St Albans</a></Link>
                  <Link href="/locations/luton"><a className="text-gray-300 hover:text-primary text-sm">Luton</a></Link>
                  <Link href="/locations/milton-keynes"><a className="text-gray-300 hover:text-primary text-sm">Milton Keynes</a></Link>
                </div>
                <Link href="/blog"><a className="text-xl font-heading font-bold text-white hover:text-primary">Blog</a></Link>
                <Link href="/contact"><a className="text-xl font-heading font-bold text-white hover:text-primary">Contact</a></Link>
                <div className="flex flex-col gap-3 mt-4">
                  <a href="tel:07427515915" className="w-full">
                    <Button className="w-full bg-primary text-black font-bold uppercase py-6 text-lg">
                      <Phone className="w-5 h-5 mr-3" />
                      07427 515 915
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}