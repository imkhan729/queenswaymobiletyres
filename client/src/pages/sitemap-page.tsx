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
            <h3 className="text-xl font-bold text-primary mb-4">Blog</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/decoding-tyre-markings"><a className="text-gray-300 hover:text-white">Decoding Tyre Markings</a></Link></li>
              <li><Link href="/blog/handling-tyre-blowout"><a className="text-gray-300 hover:text-white">Handling Tyre Blowouts</a></Link></li>
              <li><Link href="/blog/mobile-tyre-fitting-london"><a className="text-gray-300 hover:text-white">Mobile Tyre Fitting London</a></Link></li>
              <li><Link href="/blog/tyre-safety-tips"><a className="text-gray-300 hover:text-white">Tyre Safety Tips</a></Link></li>
              <li><Link href="/blog/when-to-replace-tyres"><a className="text-gray-300 hover:text-white">When to Replace Tyres</a></Link></li>
              <li><Link href="/blog/winter-tyres-guide"><a className="text-gray-300 hover:text-white">Winter Tyres Guide</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Locations</h3>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <li><Link href="/locations/watford"><a className="text-gray-300 hover:text-white">Watford</a></Link></li>
              <li><Link href="/locations/st-albans"><a className="text-gray-300 hover:text-white">St Albans</a></Link></li>
              <li><Link href="/locations/hemel-hempstead"><a className="text-gray-300 hover:text-white">Hemel Hempstead</a></Link></li>
              <li><Link href="/locations/luton"><a className="text-gray-300 hover:text-white">Luton</a></Link></li>
              <li><Link href="/locations/milton-keynes"><a className="text-gray-300 hover:text-white">Milton Keynes</a></Link></li>
              <li><Link href="/locations/stevenage"><a className="text-gray-300 hover:text-white">Stevenage</a></Link></li>
              <li><Link href="/locations/harrow"><a className="text-gray-300 hover:text-white">Harrow</a></Link></li>
              <li><Link href="/locations/slough"><a className="text-gray-300 hover:text-white">Slough</a></Link></li>
              <li><Link href="/locations/northampton"><a className="text-gray-300 hover:text-white">Northampton</a></Link></li>
              <li><Link href="/locations/london"><a className="text-gray-300 hover:text-white">North London</a></Link></li>
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