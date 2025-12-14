import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Link } from "wouter";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Sitemap | Queensway Mobile Tyres"
        description="Site map for Queensway Mobile Tyres."
      />
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Sitemap</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-300 hover:text-white">Home</a></Link></li>
              <li><Link href="/locations"><a className="text-gray-300 hover:text-white">Locations</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-300 hover:text-white">Contact Us</a></Link></li>
              <li><Link href="/about"><a className="text-gray-300 hover:text-white">About Us</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/mobile-tyre-fitting"><a className="text-gray-300 hover:text-white">Mobile Tyre Fitting</a></Link></li>
              <li><Link href="/emergency-call-out"><a className="text-gray-300 hover:text-white">Emergency Call Out</a></Link></li>
              <li><Link href="/puncture-repair"><a className="text-gray-300 hover:text-white">Puncture Repair</a></Link></li>
              <li><Link href="/battery-replacement"><a className="text-gray-300 hover:text-white">Battery Replacement</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy"><a className="text-gray-300 hover:text-white">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-gray-300 hover:text-white">Terms of Service</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}