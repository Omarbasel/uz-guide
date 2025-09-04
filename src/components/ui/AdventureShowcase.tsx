import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Camera, 
  Compass, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Play,
  MapPin
} from "lucide-react";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

interface Adventure {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  rating: number;
  price: string;
  highlights: string[];
  location: string;
}

export const AdventureShowcase = () => {
  const [activeAdventure, setActiveAdventure] = useState(0);

  const adventures: Adventure[] = [
    {
      id: 'silk-road-expedition',
      title: 'Silk Road Expedition',
      subtitle: 'Journey Through Ancient Trade Routes',
      description: 'Follow the legendary Silk Road through Uzbekistan\'s most magnificent cities. Experience the grandeur of Samarkand\'s Registan, explore Bukhara\'s living history, and discover the secrets of Khiva\'s ancient walls.',
      image: heroBg2,
      duration: '10 days',
      groupSize: '8-12 people',
      difficulty: 'Easy',
      rating: 4.9,
      price: 'From $1,899',
      highlights: ['UNESCO World Heritage Sites', 'Expert Local Guides', 'Traditional Craft Workshops', 'Authentic Cuisine'],
      location: 'Tashkent → Samarkand → Bukhara → Khiva'
    },
    {
      id: 'desert-nomad-adventure',
      title: 'Desert Nomad Adventure',
      subtitle: 'Experience the Kyzylkum Desert',
      description: 'Venture into the vast Kyzylkum Desert for an authentic nomadic experience. Sleep under star-filled skies, ride camels across golden dunes, and learn traditional desert survival skills from local nomads.',
      image: heroBg3,
      duration: '7 days',
      groupSize: '6-10 people',
      difficulty: 'Moderate',
      rating: 4.8,
      price: 'From $1,299',
      highlights: ['Camel Trekking', 'Desert Camping', 'Stargazing Sessions', 'Nomad Culture'],
      location: 'Kyzylkum Desert & Surroundings'
    },
    {
      id: 'cultural-immersion',
      title: 'Cultural Immersion',
      subtitle: 'Live Like a Local',
      description: 'Immerse yourself in authentic Uzbek culture by staying with local families, learning traditional crafts, and participating in age-old customs. This intimate experience offers deep insights into Central Asian heritage.',
      image: '/src/assets/business-1.jpg',
      duration: '12 days',
      groupSize: '4-8 people',
      difficulty: 'Easy',
      rating: 4.9,
      price: 'From $2,199',
      highlights: ['Homestay Experience', 'Cooking Classes', 'Artisan Workshops', 'Festival Participation'],
      location: 'Rural Villages & Historic Cities'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-terracotta-100 text-terracotta-800 mb-4">
            Adventures of a Lifetime
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-sage-900 mb-6">
            Discover the True Beauty
            <br />
            <span className="bg-gradient-to-r from-terracotta-600 to-sage-600 bg-clip-text text-transparent">
              of Uzbekistan
            </span>
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            From ancient cities to vast deserts, each adventure is carefully crafted to reveal 
            the hidden gems and authentic experiences that make Uzbekistan extraordinary.
          </p>
        </div>

        {/* Main Adventure Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Adventure Image & Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={adventures[activeAdventure].image}
                alt={adventures[activeAdventure].title}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-6 group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
              
              {/* Location Badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/90 text-sage-900 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {adventures[activeAdventure].location}
                </Badge>
              </div>
              
              {/* Rating Badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-terracotta-500 text-white">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {adventures[activeAdventure].rating}
                </Badge>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-8 right-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-sage-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 text-terracotta-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-sage-900">{adventures[activeAdventure].duration}</p>
                    <p className="text-xs text-sage-600">Duration</p>
                  </div>
                  <div>
                    <Users className="w-6 h-6 text-sage-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-sage-900">{adventures[activeAdventure].groupSize}</p>
                    <p className="text-xs text-sage-600">Group Size</p>
                  </div>
                  <div>
                    <Mountain className="w-6 h-6 text-earth-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-sage-900">{adventures[activeAdventure].difficulty}</p>
                    <p className="text-xs text-sage-600">Difficulty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adventure Details */}
          <div className="lg:pl-8">
            <Badge className={`${getDifficultyColor(adventures[activeAdventure].difficulty)} mb-4`}>
              {adventures[activeAdventure].difficulty} Level
            </Badge>
            
            <h3 className="text-4xl font-serif font-bold text-sage-900 mb-4">
              {adventures[activeAdventure].title}
            </h3>
            
            <h4 className="text-xl font-medium text-terracotta-600 mb-6">
              {adventures[activeAdventure].subtitle}
            </h4>
            
            <p className="text-lg text-sage-700 leading-relaxed mb-8">
              {adventures[activeAdventure].description}
            </p>
            
            {/* Highlights */}
            <div className="mb-8">
              <h5 className="font-semibold text-sage-900 mb-4">Experience Highlights:</h5>
              <div className="grid grid-cols-2 gap-3">
                {adventures[activeAdventure].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-terracotta-500 rounded-full" />
                    <span className="text-sage-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-sage-600">Starting from</p>
                <p className="text-3xl font-bold text-sage-900">{adventures[activeAdventure].price}</p>
              </div>
              <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-lg group">
                Book Adventure
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Adventure Selector */}
        <div className="grid md:grid-cols-3 gap-6">
          {adventures.map((adventure, index) => (
            <Card 
              key={adventure.id}
              className={`cursor-pointer transition-all duration-300 border-2 ${
                index === activeAdventure 
                  ? 'border-terracotta-400 shadow-xl scale-105' 
                  : 'border-transparent hover:border-sage-200 hover:shadow-lg'
              }`}
              onClick={() => setActiveAdventure(index)}
              style={{ borderRadius: '1.5rem' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    index === activeAdventure ? 'bg-terracotta-100' : 'bg-sage-100'
                  }`}>
                    {index === 0 && <Compass className="w-6 h-6 text-terracotta-600" />}
                    {index === 1 && <Mountain className="w-6 h-6 text-sage-600" />}
                    {index === 2 && <Camera className="w-6 h-6 text-earth-600" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-900">{adventure.title}</h4>
                    <p className="text-sm text-sage-600">{adventure.duration}</p>
                  </div>
                </div>
                <p className="text-sage-700 text-sm line-clamp-2 mb-4">
                  {adventure.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(adventure.difficulty)}>
                    {adventure.difficulty}
                  </Badge>
                  <span className="font-bold text-terracotta-600">{adventure.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
