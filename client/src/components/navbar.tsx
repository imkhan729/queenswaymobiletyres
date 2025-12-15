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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
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

          <Link href="/locations">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Locations</a>
          </Link>
          <Link href="/blog">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">Contact</a>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:07988018865">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wide">
              <Phone className="w-4 h-4 mr-2" />
              07988 018865
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
                <Link href="/locations"><a className="text-xl font-heading font-bold text-white hover:text-primary">Locations</a></Link>
                <Link href="/blog"><a className="text-xl font-heading font-bold text-white hover:text-primary">Blog</a></Link>
                <Link href="/contact"><a className="text-xl font-heading font-bold text-white hover:text-primary">Contact</a></Link>
                <a href="tel:07988018865">
                  <Button className="w-full bg-primary text-black font-bold uppercase mt-4">
                    Call Now
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}