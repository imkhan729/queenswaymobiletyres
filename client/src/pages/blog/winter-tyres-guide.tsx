import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Snowflake, Sun } from "lucide-react";
import { Link } from "wouter";

export default function WinterTyresGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Ultimate Guide to Winter Tyres",
    "image": "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "Queensway Mobile Tyres"
    },
    "datePublished": "2023-12-05",
    "description": "Do you really need winter tyres in the UK? We break down the benefits, costs, and performance differences."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Guide to Winter Tyres | Queensway Mobile Tyres Blog"
        description="Winter tyres explained: Do you need them in London? Learn about cold weather tyres, all-season options, and driving safety in ice and snow."
        keywords="winter tyres uk, winter tyres vs summer tyres, all season tyres, driving in snow london"
        image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop"
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Seasonal Guide</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              The Ultimate Guide to Winter Tyres
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> December 5, 2023</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Team</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop" 
            alt="Car driving in winter conditions" 
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-12"
          />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Every year as temperatures drop, the debate begins: do we really need winter tyres in the UK? In London, we might not get deep snow often, but winter tyres offer benefits beyond just snow grip. Here is everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">How Winter Tyres Work</h2>
            <p className="text-gray-400 mb-4">
              Winter tyres differ from standard 'summer' tyres in two main ways:
            </p>
            <ul className="space-y-4 text-gray-400 mb-6">
              <li className="flex gap-3">
                <Snowflake className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <strong>Compound:</strong> They use a softer rubber compound with high silica content. Summer tyres harden below 7°C, reducing grip. Winter tyres remain flexible in cold temperatures, maintaining traction.
                </div>
              </li>
              <li className="flex gap-3">
                <Snowflake className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <strong>Tread Pattern:</strong> They have thousands of tiny grooves called 'sipes'. These sipes open up as the tyre rotates, biting into snow, slush, and ice for grip.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">The 7°C Rule</h2>
            <p className="text-gray-400 mb-6">
              The magic number is <strong>7°C</strong>. Once the average temperature drops below this, standard tyres lose significant performance. Braking distances can be much longer on cold, damp roads with summer tyres compared to winter ones.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Are They Worth It in London?</h2>
            <p className="text-gray-400 mb-4">
              If you rely on your car daily for commuting or school runs, winter tyres provide a significant safety buffer during the cold months (typically November to March).
            </p>
            <p className="text-gray-400 mb-6">
              However, swapping tyres twice a year can be hassle and expense. This brings us to a popular alternative: <strong>All-Season Tyres</strong>.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">The All-Season Compromise</h2>
            <p className="text-gray-400 mb-4">
              All-season tyres are a hybrid. They offer decent performance in summer and decent performance in winter. They won't match a dedicated summer tyre on a hot dry day, or a dedicated winter tyre in deep snow, but for the UK's mild, wet climate, they are often the perfect solution for year-round driving.
            </p>

            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold text-white mb-4">We Supply All Types</h3>
              <p className="text-gray-300 mb-6">
                Whether you want to switch to Winter tyres, try All-Seasons, or stick with Summers, we stock a huge range of brands. We can fit them at your home, saving you the trip to a garage.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-primary text-black font-bold uppercase">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
