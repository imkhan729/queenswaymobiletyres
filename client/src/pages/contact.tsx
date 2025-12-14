import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Contact Us | Queensway Mobile Tyres"
        description="Get in touch for mobile tyre fitting or emergency assistance. Call 07988 018865 or email us. 24/7 support available."
        keywords="contact mobile tyres, tyre fitting phone number, emergency tyre contact"
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-6">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Need a quote or emergency assistance? Our team is ready to help 24/7.
        </p>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">CONTACT INFORMATION</h2>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Phone & WhatsApp</h3>
                <p className="text-gray-400 mb-2">Available 24/7 for emergencies</p>
                <a href="tel:07988018865" className="text-2xl font-bold text-primary hover:text-white transition-colors block">07988 018865</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-gray-400 mb-2">For general enquiries and quotes</p>
                <a href="mailto:info@queenswaymobiletyres.com" className="text-lg text-white hover:text-primary transition-colors">info@queenswaymobiletyres.com</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Opening Hours</h3>
                <p className="text-gray-400">Monday - Sunday: 24 Hours</p>
                <p className="text-gray-400">Including Bank Holidays</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Service Area</h3>
                <p className="text-gray-400">We cover Greater London, Hertfordshire, Bedfordshire, and the M25 Corridor.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">SEND US A MESSAGE</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                  <input type="tel" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Vehicle Reg (Optional)</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. AB12 CDE" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors h-32" placeholder="How can we help you?"></textarea>
              </div>
              <Button className="w-full bg-primary text-black font-bold uppercase h-12 text-lg hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}