import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Compass,
  Camera,
  Heart
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const BlogHighlights = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Uzbek Cuisine: From Plov to Samsa',
      excerpt: 'Discover the rich flavors and ancient traditions behind Uzbekistan\'s most beloved dishes. Learn about the cultural significance of plov and where to find the best traditional meals.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Food & Culture',
      image: '/src/assets/category-restaurant.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Hidden Gems of Samarkand: Beyond the Registan',
      excerpt: 'While the Registan is breathtaking, Samarkand has many lesser-known treasures waiting to be discovered. Explore secret gardens, ancient workshops, and local neighborhoods.',
      author: 'Marco Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Travel Tips',
      image: '/src/assets/business-1.jpg'
    },
    {
      id: '3',
      title: 'Photography Tips: Capturing the Magic of Uzbekistan',
      excerpt: 'From golden hour at the Registan to candid moments in local bazaars, learn how to photograph Uzbekistan\'s stunning architecture and vibrant culture like a pro.',
      author: 'Emma Chen',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Photography',
      image: '/src/assets/business-2.jpg'
    },
    {
      id: '4',
      title: 'Sustainable Travel in Central Asia: A Responsible Approach',
      excerpt: 'Learn how to travel responsibly in Uzbekistan while supporting local communities and preserving cultural heritage for future generations.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Sustainable Travel',
      image: '/src/assets/category-healthcare.jpg'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Food & Culture': return <Heart className="w-4 h-4" />;
      case 'Travel Tips': return <Compass className="w-4 h-4" />;
      case 'Photography': return <Camera className="w-4 h-4" />;
      case 'Sustainable Travel': return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Food & Culture': return 'bg-terracotta-100 text-terracotta-800';
      case 'Travel Tips': return 'bg-sage-100 text-sage-800';
      case 'Photography': return 'bg-ocean-100 text-ocean-800';
      case 'Sustainable Travel': return 'bg-earth-100 text-earth-800';
      default: return 'bg-sage-100 text-sage-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <Badge className="bg-terracotta-100 text-terracotta-800 mb-4">
              Travel Stories & Guides
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
              Discover Uzbekistan
              <br />
              <span className="bg-gradient-to-r from-terracotta-600 to-sage-600 bg-clip-text text-transparent">
                Through Our Stories
              </span>
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl leading-relaxed">
              Get inspired by travel stories, practical guides, and cultural insights 
              from fellow travelers and local experts.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-2xl px-8 py-3 self-start lg:self-end"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Posts
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-xl rounded-3xl bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-terracotta-500 text-white font-semibold">
                    Featured Story
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className={`${getCategoryColor(blogPosts[0].category)} w-fit mb-4`}>
                  {getCategoryIcon(blogPosts[0].category)}
                  <span className="ml-2">{blogPosts[0].category}</span>
                </Badge>
                
                <h3 className="text-3xl font-serif font-bold text-sage-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-sage-700 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sage-600">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(blogPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl font-semibold py-3 px-6 w-fit group">
                  Read Full Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white"
              style={{ borderRadius: '1.5rem' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <Badge className={`${getCategoryColor(post.category)} w-fit mb-3`}>
                  {getCategoryIcon(post.category)}
                  <span className="ml-2">{post.category}</span>
                </Badge>
                
                <h4 className="text-xl font-serif font-bold text-sage-900 mb-3 leading-tight group-hover:text-terracotta-600 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-sage-700 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sage-600 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-sage-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sage-500 text-sm">
                      {formatDate(post.date)}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-terracotta-600 hover:text-terracotta-700 hover:bg-terracotta-50 p-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-sage-100 via-earth-50 to-terracotta-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-sage-900 mb-4">
            Never Miss a Story
          </h3>
          <p className="text-sage-700 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter and get the latest travel guides, cultural insights, 
            and exclusive tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl px-8 py-4 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
