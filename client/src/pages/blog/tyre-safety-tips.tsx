import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function TyreSafetyTips() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Essential Tyre Safety Tips for Every Driver",
    "image": "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=2071&auto=format&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "Queensway Mobile Tyres"
    },
    "datePublished": "2023-10-15",
    "description": "Learn essential tyre safety tips including checking tread depth, pressure, and general condition to stay safe on the road."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Essential Tyre Safety Tips | Queensway Mobile Tyres Blog"
        description="Learn how to maintain your tyres for maximum safety and performance. Expert advice on pressure, tread depth, and damage inspection."
        keywords="tyre safety, tyre maintenance tips, check tyre pressure, tyre tread depth law uk"
        image="https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=2071&auto=format&fit=crop"
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Safety Guide</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Essential Tyre Safety Tips for Every Driver
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> October 15, 2023</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Team</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=2071&auto=format&fit=crop" 
            alt="Mechanic checking tyre safety" 
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-12"
          />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Your tyres are the only point of contact between your vehicle and the road. The contact patch of each tyre is roughly the size of a postcard. This small area has to handle acceleration, braking, and steering forces, often in difficult weather conditions. That's why tyre safety is absolutely critical.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Check Tyre Pressure Monthly</h2>
            <p className="text-gray-400 mb-4">
              Incorrect tyre pressure is one of the leading causes of premature tyre wear and handling issues.
            </p>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li className="flex gap-2"><AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" /> <strong>Under-inflation:</strong> Increases fuel consumption, causes the tyre to overheat, and wears the outer edges.</li>
              <li className="flex gap-2"><AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" /> <strong>Over-inflation:</strong> Reduces grip, makes the ride uncomfortable, and wears the centre of the tread.</li>
            </ul>
            <p className="text-gray-400 mb-6">
              Check your vehicle handbook or the sticker inside the driver's door jamb for the correct pressures. Remember to check them when the tyres are cold.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Inspect Tread Depth</h2>
            <p className="text-gray-400 mb-4">
              The legal minimum tread depth in the UK is <strong>1.6mm</strong> across the central three-quarters of the tread. However, most experts recommend replacing tyres at 3mm, as braking distances increase significantly below this level.
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 mb-6">
              <h3 className="font-bold text-white mb-2">The 20p Test</h3>
              <p className="text-sm text-gray-400">
                A quick way to check your tread is the "20p test". Insert a 20p coin into the main tread grooves. If the outer band of the coin is obscured, your tread is likely above the legal limit. If you can see the outer band, your tyres may be illegal and need replacing immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Look for Damage</h2>
            <p className="text-gray-400 mb-4">
              Regularly inspect your tyres for cuts, cracks, or bulges (lumps) on the sidewall. These can be caused by pothole impacts or kerbing.
            </p>
            <p className="text-gray-400 mb-6">
              <strong>Warning:</strong> A bulge in the sidewall indicates internal structural damage. This is extremely dangerous as it can lead to a sudden blowout at speed. If you see a bulge, do not drive the vehicle – call our <Link href="/emergency-call-out" className="text-primary hover:underline">emergency team</Link> immediately.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Don't Forget the Spare</h2>
            <p className="text-gray-400 mb-8">
              If your car has a spare wheel, remember to check its pressure and condition occasionally. You don't want to find yourself with a flat tyre only to discover your spare is flat too!
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Need a Safety Check?</h3>
              <p className="text-gray-300 mb-6">
                If you're worried about the condition of your tyres, don't take risks. Our mobile technicians can inspect and replace your tyres at your home.
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-black font-bold uppercase">
                  Book an Inspection
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
