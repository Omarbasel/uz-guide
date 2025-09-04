import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocalization } from "@/contexts/LocalizationContext";
import { 
  Users, 
  MapPin, 
  Award, 
  Heart, 
  Globe, 
  Star,
  CheckCircle,
  Target,
  Eye,
  Lightbulb
} from "lucide-react";
import heroBg from "@/assets/643419-2200x1467-desktop-hd-uzbekistan-background.jpg";

export const AboutPage = () => {
  const { t } = useLocalization();

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: MapPin, value: "14", label: "Cities Covered" },
    { icon: Award, value: "500+", label: "Verified Businesses" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" }
  ];

  const team = [
    {
      name: "Aziz Karimov",
      role: "Founder & CEO",
      bio: "Passionate about connecting travelers with authentic Uzbekistan experiences.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Malika Tashkentova",
      role: "Head of Operations",
      bio: "Ensuring every business listing meets our quality standards.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Bobur Samarkandiy",
      role: "Tech Lead",
      bio: "Building the platform that makes discovering Uzbekistan effortless.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Nigora Bukharova",
      role: "Community Manager",
      bio: "Fostering relationships between businesses and travelers.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To showcase the beauty and diversity of Uzbekistan by connecting travelers with authentic local businesses and experiences."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the leading platform for discovering and experiencing the rich culture, history, and hospitality of Uzbekistan."
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description: "Authenticity, Quality, Community, and Innovation drive everything we do to serve our users and business partners."
    }
  ];

  const milestones = [
    { year: "2020", event: "UZ Guide Vista founded with a vision to digitize Uzbekistan's business landscape" },
    { year: "2021", event: "Launched in Tashkent with 100+ verified businesses" },
    { year: "2022", event: "Expanded to Samarkand, Bukhara, and Khiva" },
    { year: "2023", event: "Reached 10,000+ users and 300+ business partners" },
    { year: "2024", event: "Now serving 14 cities with 500+ verified businesses" }
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
            About UZ Guide Vista
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for discovering the best of Uzbekistan's businesses, 
            culture, and experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and authenticity guides every aspect of our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                From a simple idea to Uzbekistan's leading business discovery platform.
              </p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working together to showcase the best of Uzbekistan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <Badge className="mb-3 bg-blue-100 text-blue-800">{member.role}</Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
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
            Ready to Explore Uzbekistan?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust UZ Guide Vista to discover 
            authentic experiences across Uzbekistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Globe className="w-5 h-5 mr-2" />
              Explore Listings
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
