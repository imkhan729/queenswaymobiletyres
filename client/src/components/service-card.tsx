import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, image, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={cn("h-full border-0 overflow-hidden group relative bg-secondary/50", className)}>
        {image && (
          <div className="absolute inset-0 z-0">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
        )}
        
        <CardHeader className="relative z-10 pt-12">
          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors duration-300" />
          </div>
          <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors uppercase">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors text-base">
            {description}
          </CardDescription>
        </CardContent>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Card>
    </motion.div>
  );
}