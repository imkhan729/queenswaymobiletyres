import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Ruler, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function WhenToReplaceTyres() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "When Should You Replace Your Tyres?",
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "Queensway Mobile Tyres"
    },
    "datePublished": "2023-11-02",
    "description": "Knowing when to replace your tyres is crucial for safety. We explain the legal limits, warning signs, and age recommendations."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="When To Replace Tyres | Queensway Mobile Tyres Blog"
        description="Not sure if you need new tyres? Learn the signs of wear, legal tread depth limits, and age recommendations for tyre replacement."
        keywords="when to change tyres, tyre replacement signs, tyre age limit, minimum tread depth"
        image="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop"
        schema={schema}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="link" className="text-gray-400 hover:text-primary pl-0 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Maintenance Guide</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              When Should You Replace Your Tyres?
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> November 2, 2023</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Senior Technician</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Worn tyre tread" 
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-12"
          />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tyres don't last forever. Even if you don't drive many miles, rubber degrades over time. Driving on old or worn tyres is a significant safety risk and can invalidate your insurance. Here is how to know when it's time for a change.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Tread Depth is Low</h2>
            <p className="text-gray-400 mb-4">
              This is the most common reason for replacement. As you drive, the rubber wears down.
            </p>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex gap-2"><Ruler className="w-5 h-5 text-primary shrink-0" /> <strong>Legal Limit:</strong> 1.6mm. Below this, you face a fine of up to £2,500 and 3 penalty points <em>per tyre</em>.</li>
              <li className="flex gap-2"><AlertCircle className="w-5 h-5 text-yellow-500 shrink-0" /> <strong>Recommended Limit:</strong> 3mm. Wet grip performance drops off sharply below 3mm.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Visible Damage</h2>
            <p className="text-gray-400 mb-4">
              If you inspect your tyres and see any of the following, they need immediate professional attention and likely replacement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400 mb-6">
              <li><strong>Bulges or 'eggs' on the sidewall:</strong> Impact damage weakening the internal structure.</li>
              <li><strong>Cuts or gashes:</strong> Especially if you can see the cords inside.</li>
              <li><strong>Cracks:</strong> Small cracks in the sidewall indicate the rubber is drying out (perishing).</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Age of the Tyre</h2>
            <p className="text-gray-400 mb-4">
              Tyres degrade naturally due to UV exposure and oxidation. Most manufacturers recommend replacing tyres <strong>every 5-6 years</strong>, regardless of tread depth.
            </p>
            <p className="text-gray-400 mb-6">
              You can check the age of your tyre by looking for the DOT code on the sidewall. The last 4 digits represent the week and year of manufacture (e.g., "2321" means the 23rd week of 2021).
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Uneven Wear</h2>
            <p className="text-gray-400 mb-6">
              If your tyres are wearing more on one side than the other, it often indicates a wheel alignment (tracking) issue. While you will need to replace the unevenly worn tyre, you should also get your alignment checked to prevent the new tyre from suffering the same fate.
            </p>

            <div className="bg-secondary/50 rounded-lg p-8 border-l-4 border-primary mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Time for New Tyres?</h3>
              <p className="text-gray-300 mb-6">
                Don't wait until it's too late. We can come to you and fit new tyres today. Search your tyre size on our homepage or call us for a quote.
              </p>
              <Link href="/mobile-tyre-fitting">
                <Button className="bg-white text-black font-bold uppercase hover:bg-gray-200">
                  Get a Tyre Quote
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
