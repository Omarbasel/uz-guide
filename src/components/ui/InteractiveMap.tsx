import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Camera } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'city' | 'attraction' | 'experience';
  rating: number;
  visitors: string;
  image: string;
  description: string;
  packages: number;
}

export const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations: MapLocation[] = [
    {
      id: 'tashkent',
      name: 'Tashkent',
      x: 45,
      y: 35,
      type: 'city',
      rating: 4.8,
      visitors: '2.1M',
      image: '/src/assets/business-1.jpg',
      description: 'Modern capital with Soviet architecture and bustling bazaars',
      packages: 12
    },
    {
      id: 'samarkand',
      name: 'Samarkand',
      x: 35,
      y: 45,
      type: 'city',
      rating: 4.9,
      visitors: '1.8M',
      image: '/src/assets/business-2.jpg',
      description: 'Ancient Silk Road city with stunning Islamic architecture',
      packages: 18
    },
    {
      id: 'bukhara',
      name: 'Bukhara',
      x: 25,
      y: 50,
      type: 'city',
      rating: 4.7,
      visitors: '1.2M',
      image: '/src/assets/category-hotel.jpg',
      description: 'Living museum of Central Asian architecture',
      packages: 15
    },
    {
      id: 'khiva',
      name: 'Khiva',
      x: 15,
      y: 55,
      type: 'city',
      rating: 4.6,
      visitors: '800K',
      image: '/src/assets/category-restaurant.jpg',
      description: 'Perfectly preserved ancient walled city',
      packages: 8
    },
    {
      id: 'registan',
      name: 'Registan Square',
      x: 36,
      y: 46,
      type: 'attraction',
      rating: 4.9,
      visitors: '1.5M',
      image: '/src/assets/category-shopping.jpg',
      description: 'Iconic ensemble of three madrasahs',
      packages: 6
    }
  ];

  const getLocationColor = (type: string, isHovered: boolean, isSelected: boolean) => {
    if (isSelected) return 'fill-terracotta-500 stroke-terracotta-700';
    if (isHovered) return 'fill-terracotta-400 stroke-terracotta-600';
    
    switch (type) {
      case 'city': return 'fill-sage-500 stroke-sage-700';
      case 'attraction': return 'fill-ocean-500 stroke-ocean-700';
      case 'experience': return 'fill-earth-500 stroke-earth-700';
      default: return 'fill-sage-500 stroke-sage-700';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sage-50 to-earth-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Explore Uzbekistan
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Click on any location to discover unique experiences and travel packages
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Interactive SVG Map */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-sage-200">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-[500px] cursor-pointer"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              >
                {/* Uzbekistan outline (simplified) */}
                <path
                  d="M10,20 L90,20 L90,80 L10,80 Z"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="0.5"
                  className="opacity-30"
                />
                
                {/* Location markers */}
                {locations.map((location) => (
                  <g key={location.id}>
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={selectedLocation?.id === location.id ? "3" : "2.5"}
                      className={`${getLocationColor(
                        location.type,
                        hoveredLocation === location.id,
                        selectedLocation?.id === location.id
                      )} cursor-pointer transition-all duration-300 hover:scale-110`}
                      strokeWidth="1"
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      onClick={() => setSelectedLocation(location)}
                    />
                    
                    {/* Location label */}
                    <text
                      x={location.x}
                      y={location.y - 4}
                      textAnchor="middle"
                      className="text-xs font-medium fill-sage-800 pointer-events-none"
                      style={{ fontSize: '3px' }}
                    >
                      {location.name}
                    </text>
                    
                    {/* Pulse animation for selected */}
                    {selectedLocation?.id === location.id && (
                      <circle
                        cx={location.x}
                        cy={location.y}
                        r="4"
                        fill="none"
                        stroke="#e07a47"
                        strokeWidth="0.5"
                        opacity="0.6"
                        className="animate-ping"
                      />
                    )}
                  </g>
                ))}
              </svg>
              
              {/* Legend */}
              <div className="flex justify-center mt-6 space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sage-500 rounded-full"></div>
                  <span className="text-sm text-sage-700">Cities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-ocean-500 rounded-full"></div>
                  <span className="text-sm text-sage-700">Attractions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-earth-500 rounded-full"></div>
                  <span className="text-sm text-sage-700">Experiences</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details Panel */}
          <div className="lg:col-span-1">
            {selectedLocation ? (
              <Card className="bg-white border-0 shadow-xl rounded-3xl overflow-hidden animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {selectedLocation.name}
                    </h3>
                    <Badge className="bg-terracotta-500 text-white">
                      {selectedLocation.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sage-700 mb-6 leading-relaxed">
                    {selectedLocation.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-sage-900">
                        {selectedLocation.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-sage-600" />
                      <span className="text-sage-700">
                        {selectedLocation.visitors} visitors
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sage-700">
                      {selectedLocation.packages} travel packages
                    </span>
                    <Button
                      size="sm"
                      className="bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full px-4"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      View Gallery
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white rounded-2xl font-semibold py-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    Explore Packages
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-sage-100/50 border-sage-200 rounded-3xl p-8 text-center">
                <MapPin className="w-12 h-12 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                  Select a Location
                </h3>
                <p className="text-sage-600">
                  Click on any point on the map to discover amazing destinations and experiences
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
