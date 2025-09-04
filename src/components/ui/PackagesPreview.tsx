import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Check,
  ArrowRight,
  Sparkles,
  Crown,
  Heart
} from "lucide-react";

interface Package {
  id: string;
  name: string;
  type: 'Regular' | 'Premium' | 'Luxury';
  description: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  features: string[];
  popular?: boolean;
  bestValue?: boolean;
}

export const PackagesPreview = () => {
  const packages: Package[] = [
    {
      id: 'regular',
      name: 'Essential Uzbekistan',
      type: 'Regular',
      description: 'Perfect introduction to Uzbekistan\'s highlights with comfortable accommodations and guided tours.',
      duration: '7 days',
      groupSize: '12-16 people',
      price: 999,
      originalPrice: 1199,
      rating: 4.6,
      reviewCount: 127,
      image: '/src/assets/business-1.jpg',
      features: [
        '3-star hotels with breakfast',
        'Professional English-speaking guide',
        'All entrance fees included',
        'Airport transfers',
        'Traditional lunch experiences'
      ],
      bestValue: true
    },
    {
      id: 'premium',
      name: 'Premium Silk Road',
      type: 'Premium',
      description: 'Enhanced experience with boutique hotels, smaller groups, and exclusive cultural activities.',
      duration: '10 days',
      groupSize: '8-12 people',
      price: 1899,
      rating: 4.8,
      reviewCount: 89,
      image: '/src/assets/business-2.jpg',
      features: [
        '4-star boutique hotels',
        'Small group experience',
        'Private cultural workshops',
        'Premium transportation',
        'Welcome & farewell dinners',
        'Local artisan visits'
      ],
      popular: true
    },
    {
      id: 'luxury',
      name: 'Royal Uzbekistan',
      type: 'Luxury',
      description: 'Ultimate luxury experience with 5-star accommodations, private guides, and VIP access.',
      duration: '12 days',
      groupSize: '4-8 people',
      price: 3299,
      rating: 4.9,
      reviewCount: 45,
      image: '/src/assets/category-hotel.jpg',
      features: [
        '5-star luxury hotels & palaces',
        'Private guide & driver',
        'VIP access to monuments',
        'Helicopter transfers available',
        'Michelin-recommended dining',
        'Personal concierge service',
        'Exclusive cultural performances'
      ]
    }
  ];

  const getPackageIcon = (type: string) => {
    switch (type) {
      case 'Regular': return <Heart className="w-5 h-5" />;
      case 'Premium': return <Sparkles className="w-5 h-5" />;
      case 'Luxury': return <Crown className="w-5 h-5" />;
      default: return <Heart className="w-5 h-5" />;
    }
  };

  const getPackageGradient = (type: string) => {
    switch (type) {
      case 'Regular': return 'from-sage-500 to-sage-600';
      case 'Premium': return 'from-terracotta-500 to-terracotta-600';
      case 'Luxury': return 'from-earth-600 to-earth-700';
      default: return 'from-sage-500 to-sage-600';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sage-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-terracotta-100 text-terracotta-800 mb-4">
            Travel Packages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Choose Your Perfect
            <br />
            <span className="bg-gradient-to-r from-terracotta-600 to-sage-600 bg-clip-text text-transparent">
              Uzbekistan Adventure
            </span>
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            From budget-friendly explorations to luxury experiences, we have the perfect package 
            tailored to your travel style and preferences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-terracotta-400 scale-105' : ''
              }`}
              style={{ borderRadius: '2rem' }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-terracotta-500 text-white font-semibold px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {/* Best Value Badge */}
              {pkg.bestValue && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-500 text-white font-semibold">
                    Best Value
                  </Badge>
                </div>
              )}

              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <Badge className={`bg-gradient-to-r ${getPackageGradient(pkg.type)} text-white`}>
                      {getPackageIcon(pkg.type)}
                      <span className="ml-2">{pkg.type} Package</span>
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{pkg.rating}</span>
                      <span className="text-white/80 text-sm">({pkg.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sage-700 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Package Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-sage-500" />
                    <span className="text-sage-700 font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-sage-500" />
                    <span className="text-sage-700 font-medium">{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="font-semibold text-sage-900 mb-4">What's Included:</h4>
                  <div className="space-y-2">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sage-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 4 && (
                      <p className="text-sage-500 text-sm italic">
                        +{pkg.features.length - 4} more features
                      </p>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-sage-900">
                      ${pkg.price.toLocaleString()}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-sage-500 line-through">
                        ${pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-sage-600">per person</p>
                  {pkg.originalPrice && (
                    <Badge className="bg-green-100 text-green-800 mt-2">
                      Save ${(pkg.originalPrice - pkg.price).toLocaleString()}
                    </Badge>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${getPackageGradient(pkg.type)} hover:shadow-lg text-white rounded-2xl font-semibold py-4 text-lg transition-all duration-300 group`}
                >
                  Book This Package
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-sage-100 to-earth-100 rounded-3xl p-12">
          <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
            Our travel experts can create a personalized itinerary that perfectly matches 
            your interests, budget, and travel dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-2xl px-8 py-3"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View All Packages
            </Button>
            <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl px-8 py-3">
              Plan Custom Trip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
