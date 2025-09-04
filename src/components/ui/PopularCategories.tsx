import { Badge } from "@/components/ui/badge";
import { 
  UtensilsCrossed, 
  Building2, 
  Home, 
  Briefcase, 
  Stethoscope, 
  Car 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const PopularCategories = () => {
  const { t } = useLocalization();

  const categories = [
    {
      key: 'restaurants',
      name: 'Restaurant',
      icon: UtensilsCrossed,
      count: '2,543',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      key: 'hotels',
      name: 'Hotels',
      icon: Building2,
      count: '1,287',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      key: 'house',
      name: 'House',
      icon: Home,
      count: '3,156',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      key: 'businesses',
      name: 'Businesses',
      icon: Briefcase,
      count: '4,892',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      key: 'clinics',
      name: 'Clinics',
      icon: Stethoscope,
      count: '896',
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      key: 'cars',
      name: 'Cars',
      icon: Car,
      count: '1,432',
      color: 'bg-gray-50 text-gray-600 border-gray-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-wide">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Discover what you're looking for across Uzbekistan
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.key} 
                to={`/listings?category=${category.key}`}
                className="group"
              >
                <Badge 
                  variant="outline"
                  className={`${category.color} px-6 py-3 text-base font-medium rounded-full border-2 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3 min-w-fit`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-70 ml-1">({category.count})</span>
                </Badge>
              </Link>
            );
          })}
        </div>

        {/* Optional: View All Categories Link */}
        <div className="text-center mt-12">
          <Link 
            to="/listings" 
            className="inline-flex items-center text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
          >
            View all categories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};