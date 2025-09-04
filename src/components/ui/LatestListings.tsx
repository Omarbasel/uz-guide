import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Globe, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";
import business1 from "@/assets/business-1.jpg";
import business2 from "@/assets/business-2.jpg";

export const LatestListings = () => {
  const { t } = useLocalization();

  const listings = [
    {
      id: 1,
      name: "Afsona Milliy Taomlar",
      category: "Restaurant",
      rating: 4.8,
      reviewCount: 156,
      location: "Toshkent, Chilonzor",
      phone: "+998 71 123-45-67",
      image: business1,
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "Registon Luxury Hotel",
      category: "Hotel",
      rating: 4.9,
      reviewCount: 243,
      location: "Samarqand, Registon",
      phone: "+998 66 234-56-78",
      image: business2,
      verified: true,
      featured: false
    },
    {
      id: 3,
      name: "Chorsu Bozor Shopping",
      category: "Shopping",
      rating: 4.6,
      reviewCount: 98,
      location: "Toshkent, Eski Shahar",
      phone: "+998 71 345-67-89",
      image: business1,
      verified: false,
      featured: true
    },
    {
      id: 4,
      name: "MedLife Klinikasi",
      category: "Healthcare",
      rating: 4.7,
      reviewCount: 87,
      location: "Toshkent, Yunusobod",
      phone: "+998 71 456-78-90",
      image: business2,
      verified: true,
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Featured Businesses
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the newest and most popular businesses across Uzbekistan
            </p>
          </div>
          <Link to="/listings">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((listing) => (
            <Card key={listing.id} className="group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {listing.verified && (
                      <Badge className="bg-green-500/90 text-white border-0 backdrop-blur-sm">
                        Verified
                      </Badge>
                    )}
                    {listing.featured && (
                      <Badge className="bg-orange-500/90 text-white border-0 backdrop-blur-sm">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="h-10 w-10 p-0 bg-white/90 hover:bg-white rounded-full shadow-lg">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {listing.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {t(`categories.${listing.category.toLowerCase()}`)}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-base font-bold text-gray-900">{listing.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({listing.reviewCount})
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm line-clamp-1">{listing.location}</span>
                  </div>

                  {/* Actions */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};