import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocalization } from "@/contexts/LocalizationContext";
import { 
  Search, 
  MapPin, 
  Star, 
  Shield, 
  Zap,
  Users,
  BarChart3,
  Headphones,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/643496-1920x1080-desktop-1080p-uzbekistan-wallpaper-image.jpg";

export const ServicesPage = () => {
  const { t } = useLocalization();

  const mainServices = [
    {
      icon: Search,
      title: "Business Discovery",
      description: "Find verified businesses across Uzbekistan with our advanced search and filtering system.",
      features: ["Advanced Search", "Location-based Results", "Category Filtering", "Real-time Updates"]
    },
    {
      icon: Shield,
      title: "Business Verification",
      description: "We verify every business listing to ensure authenticity and quality for our users.",
      features: ["Document Verification", "Site Visits", "Quality Checks", "Ongoing Monitoring"]
    },
    {
      icon: Star,
      title: "Review System",
      description: "Authentic reviews and ratings from real customers to help you make informed decisions.",
      features: ["Verified Reviews", "Photo Reviews", "Rating System", "Review Moderation"]
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Comprehensive analytics and insights for business owners to grow their presence.",
      features: ["Performance Metrics", "Customer Insights", "Trend Analysis", "Growth Reports"]
    }
  ];

  const businessServices = [
    {
      title: "Free Business Listing",
      price: "Free",
      description: "Get your business discovered by thousands of potential customers.",
      features: [
        "Basic business profile",
        "Contact information",
        "Business hours",
        "Location on map",
        "Customer reviews"
      ]
    },
    {
      title: "Premium Listing",
      price: "$29/month",
      description: "Enhanced visibility with premium features and priority placement.",
      features: [
        "Everything in Free",
        "Priority search results",
        "Photo gallery (up to 20 photos)",
        "Business description",
        "Social media links",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      title: "Enterprise Solution",
      price: "Custom",
      description: "Tailored solutions for large businesses and chains.",
      features: [
        "Everything in Premium",
        "Multiple locations",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock support for both users and business owners."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Platform available in Uzbek, Russian, and English languages."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant notifications for business updates and customer interactions."
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with other travelers and business owners in our community."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for discovering and promoting businesses across Uzbekistan.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of services designed to connect travelers with authentic Uzbekistan experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to showcase your business and reach more customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessServices.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{plan.description}</p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra services and features that make UZ Guide Vista the best choice for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using UZ Guide Vista to reach more customers and grow their presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              List Your Business
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              <Globe className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
