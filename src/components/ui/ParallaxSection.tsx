import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Quote, Star } from "lucide-react";
import heroBg3 from "@/assets/hero-bg-3.jpg";

export const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-terracotta-400 rounded-full opacity-60 animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-sage-300 rounded-full opacity-40 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            animationDelay: '2s' 
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-ocean-400 rounded-full opacity-80 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: '4s' 
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-8">
            Why Choose Uzbekistan?
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-earth-100 to-sage-100 bg-clip-text text-transparent">
              A Journey Through Time
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
            Uzbekistan combines breathtaking architecture, rich history, and warm hospitality, 
            making it a must-visit destination for travelers seeking authentic cultural experiences.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-white/80">Years of History</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-white/80">UNESCO Sites</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Traveler Satisfaction</div>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-12 max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-terracotta-300 mx-auto mb-6" />
            <p className="text-xl italic mb-6 leading-relaxed">
              "Uzbekistan exceeded every expectation. The architecture is breathtaking, 
              the people are incredibly welcoming, and the food is absolutely divine. 
              This country is a hidden gem that deserves to be on every traveler's bucket list."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white/80">
                - Maria Rodriguez, Travel Blogger
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-xl animate-pulse-glow"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg"
              variant="ghost"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30 rounded-2xl px-8 py-4 font-semibold text-lg group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Our Film
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
