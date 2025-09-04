import { useState } from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { FiltersSidebar } from "@/components/ui/FiltersSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Eye, 
  Heart,
  Filter,
  Search
} from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";
import business1 from "@/assets/business-1.jpg";
import business2 from "@/assets/business-2.jpg";

const ListingsPage = () => {
  const { t } = useLocalization();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(true);

  const listings = [
    {
      id: 1,
      name: "Afsona Milliy Taomlar",
      category: "Restaurant",
      rating: 4.8,
      reviewCount: 156,
      location: "Toshkent, Chilonzor tumani",
      phone: "+998 71 123-45-67",
      website: "www.afsona-restaurant.uz",
      image: business1,
      verified: true,
      featured: true,
      description: "An'anaviy o'zbek taomlarini zamonaviy uslubda taklif qiluvchi restoran. Halol mahsulotlar va professional oshpazlar."
    },
    {
      id: 2,
      name: "Registon Luxury Hotel",
      category: "Hotel",
      rating: 4.9,
      reviewCount: 243,
      location: "Samarqand, Registon maydoni",
      phone: "+998 66 234-56-78",
      website: "www.registon-hotel.uz",
      image: business2,
      verified: true,
      featured: false,
      description: "Samarqandning markazida joylashgan hashamatli mehmonxona. Zamonaviy qulayliklar va milliy me'morchilik."
    },
    // Duplicate for demo
    ...Array(6).fill(null).map((_, i) => ({
      id: i + 3,
      name: i % 2 === 0 ? "Chorsu Bozor Shopping" : "MedLife Klinikasi",
      category: i % 2 === 0 ? "Shopping" : "Healthcare",
      rating: 4.6 + (i % 4) * 0.1,
      reviewCount: 98 + i * 20,
      location: "Toshkent, Yunusobod tumani",
      phone: `+998 71 ${300 + i}${400 + i}-${500 + i}${600 + i}`,
      website: "www.example.uz",
      image: i % 2 === 0 ? business1 : business2,
      verified: i % 3 === 0,
      featured: i % 4 === 0,
      description: "Sifatli xizmatlar va professional yondashuv bilan mijozlarga xizmat ko'rsatadi."
    }))
  ];

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <Card key={listing.id} className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-3 left-3">
                <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium text-gray-900">{listing.rating.toFixed(1)}</span>
                </div>
              </div>
              {listing.verified && (
                <div className="absolute bottom-3 right-3">
                  <Badge className="bg-green-500 text-white text-xs">Verified</Badge>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
                    {listing.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {t(`categories.${listing.category.toLowerCase()}`)}
                  </p>
                </div>
                {listing.featured && (
                  <Badge className="bg-blue-600 text-white text-xs ml-2">Featured</Badge>
                )}
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                {listing.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="truncate">{listing.location}</span>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-3">
      {listings.map((listing) => (
        <Card key={listing.id} className="hover:shadow-md transition-all border border-gray-200 bg-white">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1 right-1">
                  <Button size="sm" variant="secondary" className="h-6 w-6 p-0 bg-white/90">
                    <Heart className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{listing.name}</h3>
                      {listing.verified && (
                        <Badge variant="outline" className="text-xs border-green-200 text-green-700">Verified</Badge>
                      )}
                      {listing.featured && (
                        <Badge className="text-xs bg-blue-600 text-white">Featured</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {t(`categories.${listing.category.toLowerCase()}`)}
                    </p>
                  </div>
                  
                  <div className="flex items-center ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">{listing.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({listing.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-1">
                  {listing.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="truncate">{listing.location}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Phone className="w-3 h-3 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex gap-12">
          {/* Sidebar */}
          {showFilters && (
            <div className="hidden lg:block flex-shrink-0">
              <FiltersSidebar />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Discover Uzbekistan
                </h1>
                <h2 className="text-xl md:text-2xl font-light text-gray-600 mb-2">
                  Find the best businesses across the country
                </h2>
                <p className="text-gray-500 text-lg">
                  {listings.length} amazing places found
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter Toggle */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrlar
                </Button>

                {/* Sort */}
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48 h-12 rounded-2xl border-gray-200 bg-white shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="name">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex border border-gray-200 rounded-2xl bg-white shadow-sm">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-2xl ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-2xl ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            {viewMode === 'grid' ? <GridView /> : <ListView />}

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="lg" disabled className="rounded-2xl px-6 py-3 border-gray-200">
                  Previous
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-3">
                  1
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl px-6 py-3 border-gray-200 hover:bg-gray-50">
                  2
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl px-6 py-3 border-gray-200 hover:bg-gray-50">
                  3
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl px-6 py-3 border-gray-200 hover:bg-gray-50">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ListingsPage;