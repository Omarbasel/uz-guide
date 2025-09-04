import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Tag, Play, Volume2, VolumeX } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";
import heroBg from "@/assets/hero-bg-1.jpg";

export const HeroSection = () => {
  const { t } = useLocalization();
  const [isMuted, setIsMuted] = useState(true);
  const heroText = "Discover Uzbekistan";

  const categories = [
    'restaurants', 'hotels', 'shopping', 'healthcare', 
    'education', 'automotive', 'beauty', 'services'
  ];

  const cities = [
    'tashkent', 'samarkand', 'bukhara', 'namangan',
    'andijan', 'fergana', 'nukus', 'urgench'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroBg}
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c1e5&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          {/* Fallback to image if video fails */}
          <img src={heroBg} alt="Uzbekistan landscape" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/20 to-transparent"></div>
      </div>
      
      {/* Video Controls */}
      <div className="absolute top-8 right-8 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full p-3"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </div>
      
      {/* Parallax Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-terracotta-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-sage-300 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-ocean-400 rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <div className="max-w-7xl mx-auto">
          {/* Kinetic Typography */}
          <div className="mb-8 min-h-[200px] md:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-white via-earth-100 to-sage-100 bg-clip-text text-transparent inline-block">
                {heroText}
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-terracotta-500 to-sage-500 mx-auto rounded-full animate-pulse-glow"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 opacity-95 font-serif">
            <span className="bg-gradient-to-r from-earth-200 to-sage-200 bg-clip-text text-transparent">
              Pearl of Central Asia
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed font-sans font-light">
            Embark on an extraordinary journey through ancient cities, vibrant bazaars, and timeless traditions. 
            <span className="text-terracotta-300 font-medium">Your adventure begins here.</span>
          </p>

          {/* Consistent Search Interface */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* Search Input */}
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  <Input
                    placeholder="What are you looking for?"
                    className="pl-12 h-14 bg-white/10 border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base font-medium hover:bg-white/15 transition-all"
                  />
                </div>

                {/* Location Select */}
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10 group-hover:text-white transition-colors" />
                  <Select>
                    <SelectTrigger className="pl-12 h-14 bg-white/10 border-white/30 rounded-xl text-white text-base font-medium hover:bg-white/15 transition-all">
                      <SelectValue placeholder="Choose city" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-gray-700">
                      {cities.map(city => (
                        <SelectItem key={city} value={city} className="text-gray-100 hover:bg-gray-800">
                          {t(`cities.${city}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Select */}
                <div className="relative group">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10 group-hover:text-white transition-colors" />
                  <Select>
                    <SelectTrigger className="pl-12 h-14 bg-white/10 border-white/30 rounded-xl text-white text-base font-medium hover:bg-white/15 transition-all">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-gray-700">
                      {categories.map(category => (
                        <SelectItem key={category} value={category} className="text-gray-100 hover:bg-gray-800">
                          {t(`categories.${category}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <div>
                  <Button 
                    size="lg" 
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating CTA */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <Button
                variant="ghost"
                className="bg-earth-800/80 backdrop-blur-sm text-earth-100 hover:bg-earth-700/80 rounded-full px-8 py-4 font-medium animate-float"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};