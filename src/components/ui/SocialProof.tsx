import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  Instagram, 
  Play, 
  Heart, 
  MessageCircle,
  Share2,
  TrendingUp,
  Users,
  MapPin
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
  date: string;
  verified: boolean;
}

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  username: string;
  location: string;
}

export const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'New York, USA',
      avatar: '/src/assets/business-1.jpg',
      rating: 5,
      text: 'Uzbekistan exceeded all my expectations! The Silk Road cities were absolutely magical, and our guide made the history come alive. The architecture in Samarkand is breathtaking.',
      trip: 'Classic Silk Road Journey',
      date: '2 weeks ago',
      verified: true
    },
    {
      id: '2',
      name: 'Marco Rodriguez',
      location: 'Barcelona, Spain',
      avatar: '/src/assets/business-2.jpg',
      rating: 5,
      text: 'The cultural immersion experience was incredible. Staying with local families and learning traditional crafts gave me such a deep appreciation for Uzbek culture.',
      trip: 'Cultural Immersion Experience',
      date: '1 month ago',
      verified: true
    },
    {
      id: '3',
      name: 'Emma Chen',
      location: 'Singapore',
      avatar: '/src/assets/category-hotel.jpg',
      rating: 5,
      text: 'Perfect organization from start to finish. The desert camping under the stars was a once-in-a-lifetime experience. Highly recommend for adventure seekers!',
      trip: 'Adventure Explorer Package',
      date: '3 weeks ago',
      verified: true
    }
  ];

  const mockInstagramPosts: InstagramPost[] = [
    {
      id: '1',
      image: '/src/assets/business-1.jpg',
      likes: 1247,
      comments: 89,
      caption: 'Lost in the beauty of Registan Square ✨ #UzbekistanTravel #SilkRoad',
      username: 'wanderlust_sarah',
      location: 'Samarkand, Uzbekistan'
    },
    {
      id: '2',
      image: '/src/assets/business-2.jpg',
      likes: 892,
      comments: 56,
      caption: 'Traditional plov cooking class with the most amazing family 🍛 #AuthenticTravel',
      username: 'foodie_marco',
      location: 'Bukhara, Uzbekistan'
    },
    {
      id: '3',
      image: '/src/assets/category-restaurant.jpg',
      likes: 2156,
      comments: 134,
      caption: 'Sunrise over the Kyzylkum Desert. No words needed 🌅 #DesertLife',
      username: 'adventure_emma',
      location: 'Kyzylkum Desert'
    },
    {
      id: '4',
      image: '/src/assets/category-shopping.jpg',
      likes: 756,
      comments: 42,
      caption: 'The intricate tilework at Shah-i-Zinda is absolutely mesmerizing 🎨',
      username: 'art_lover_tom',
      location: 'Samarkand, Uzbekistan'
    }
  ];

  useEffect(() => {
    setInstagramPosts(mockInstagramPosts);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Happy Travelers', value: '12,500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries Represented', value: '85+', icon: <MapPin className="w-6 h-6" /> },
    { label: 'Average Rating', value: '4.9/5', icon: <Star className="w-6 h-6" /> },
    { label: 'Growth This Year', value: '+127%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-terracotta-100 to-sage-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-terracotta-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-sage-900 mb-2">{stat.value}</div>
              <div className="text-sage-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Testimonials Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
                Travelers Love Uzbekistan
              </h2>
              <p className="text-xl text-sage-700">
                Real stories from real travelers who discovered the magic of Central Asia
              </p>
            </div>

            {/* Featured Video Testimonial */}
            <Card className="mb-8 overflow-hidden rounded-3xl border-0 shadow-xl bg-white">
              <div className="relative h-64 bg-gradient-to-r from-sage-600 to-earth-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-6 group"
                  >
                    <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-terracotta-500 text-white mb-2">
                    Video Testimonial
                  </Badge>
                  <h3 className="text-white font-semibold">
                    "Why Uzbekistan Changed My Life" - Maria's Story
                  </h3>
                </div>
              </div>
            </Card>

            {/* Text Testimonials Carousel */}
            <div className="relative">
              <Card className="bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-sage-900">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        {testimonials[activeTestimonial].verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sage-600 text-sm">
                        {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].date}
                      </p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Quote className="w-8 h-8 text-sage-300 mb-4" />
                  <p className="text-sage-800 text-lg leading-relaxed mb-4">
                    {testimonials[activeTestimonial].text}
                  </p>
                  <Badge variant="outline" className="border-sage-300 text-sage-700">
                    {testimonials[activeTestimonial].trip}
                  </Badge>
                </CardContent>
              </Card>
              
              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-terracotta-500 scale-125' 
                        : 'bg-sage-300 hover:bg-sage-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Instagram Feed Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-serif font-bold text-sage-900 mb-2">
                  #UzbekistanTravel
                </h3>
                <p className="text-sage-700">
                  See what travelers are sharing on Instagram
                </p>
              </div>
              <Button
                variant="outline"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-2xl"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow Us
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {instagramPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                  style={{ borderRadius: '1.5rem' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt="Instagram post"
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        index === 0 ? 'h-64' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Hover overlay with engagement stats */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-6 text-white">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-6 h-6 fill-current" />
                          <span className="font-semibold">{post.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-6 h-6" />
                          <span className="font-semibold">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Post info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium mb-1">
                        @{post.username}
                      </p>
                      <p className="text-white/90 text-xs line-clamp-2">
                        {post.caption}
                      </p>
                      <div className="flex items-center mt-2">
                        <MapPin className="w-3 h-3 text-white/70 mr-1" />
                        <span className="text-white/70 text-xs">{post.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-terracotta-50 to-sage-50 rounded-3xl border border-sage-200">
              <div className="text-center">
                <h4 className="font-serif font-bold text-sage-900 mb-2">
                  Share Your Adventure
                </h4>
                <p className="text-sage-700 mb-4">
                  Tag us in your photos for a chance to be featured!
                </p>
                <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Your Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
