import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.png";

// Blog Post Data
const blogPosts = [
  {
    id: 1,
    title: "Essential Tyre Safety Tips for Every Driver",
    excerpt: "Tyres are the only contact your vehicle has with the road. Learn how to maintain them properly to ensure your safety and extend their lifespan.",
    date: "October 15, 2023",
    author: "Queensway Team",
    category: "Safety",
    slug: "/blog/tyre-safety-tips",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "When Should You Replace Your Tyres?",
    excerpt: "Knowing when to replace your tyres is crucial for safety. We explain the legal limits, warning signs, and age recommendations.",
    date: "November 2, 2023",
    author: "Senior Technician",
    category: "Maintenance",
    slug: "/blog/when-to-replace-tyres",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Winter Tyres",
    excerpt: "Do you really need winter tyres in the UK? We break down the benefits, costs, and performance differences to help you decide.",
    date: "December 5, 2023",
    author: "Queensway Team",
    category: "Guides",
    slug: "/blog/winter-tyres-guide",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Tyre Advice & News | Queensway Mobile Tyres Blog"
        description="Read the latest news, safety tips, and expert advice on tyre maintenance from London's leading mobile tyre fitting service."
        keywords="tyre blog, car maintenance tips, tyre safety advice, mobile mechanic blog"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            OUR <span className="text-primary">BLOG</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert advice, safety tips, and industry news from our team of professional tyre technicians.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-secondary/30 rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link href={post.slug}>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2 mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA */}
      <div className="py-16 bg-secondary relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl font-heading font-bold text-white mb-6">Need Professional Advice?</h2>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
             If you're unsure about the condition of your tyres or need specific advice for your vehicle, our team is happy to help.
           </p>
           <div className="flex justify-center gap-4">
             <Link href="/contact">
               <Button size="lg" className="bg-primary text-black font-bold uppercase">
                 Contact Us
               </Button>
             </Link>
           </div>
         </div>
      </div>

      <Footer />
    </div>
  );
}
