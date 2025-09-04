import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Heart,
  Mountain,
  Building2,
  Utensils,
  Camera,
  Star,
  Clock
} from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    icon: React.ReactNode;
    value: string;
  }[];
}

interface TravelPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  highlights: string[];
  matchScore: number;
}

export const TripQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 'travel_style',
      question: 'What type of traveler are you?',
      options: [
        { id: 'cultural', text: 'Cultural Explorer', icon: <Building2 className="w-6 h-6" />, value: 'cultural' },
        { id: 'adventure', text: 'Adventure Seeker', icon: <Mountain className="w-6 h-6" />, value: 'adventure' },
        { id: 'relaxed', text: 'Relaxed Wanderer', icon: <Heart className="w-6 h-6" />, value: 'relaxed' },
        { id: 'foodie', text: 'Culinary Enthusiast', icon: <Utensils className="w-6 h-6" />, value: 'foodie' }
      ]
    },
    {
      id: 'duration',
      question: 'How long is your ideal trip?',
      options: [
        { id: 'short', text: '3-5 days', icon: <Clock className="w-6 h-6" />, value: 'short' },
        { id: 'medium', text: '6-10 days', icon: <Calendar className="w-6 h-6" />, value: 'medium' },
        { id: 'long', text: '11-14 days', icon: <MapPin className="w-6 h-6" />, value: 'long' },
        { id: 'extended', text: '15+ days', icon: <Star className="w-6 h-6" />, value: 'extended' }
      ]
    },
    {
      id: 'group_size',
      question: 'Who are you traveling with?',
      options: [
        { id: 'solo', text: 'Solo Adventure', icon: <Users className="w-6 h-6" />, value: 'solo' },
        { id: 'couple', text: 'Romantic Getaway', icon: <Heart className="w-6 h-6" />, value: 'couple' },
        { id: 'family', text: 'Family Trip', icon: <Users className="w-6 h-6" />, value: 'family' },
        { id: 'friends', text: 'Friends Group', icon: <Camera className="w-6 h-6" />, value: 'friends' }
      ]
    },
    {
      id: 'interests',
      question: 'What interests you most?',
      options: [
        { id: 'history', text: 'Historical Sites', icon: <Building2 className="w-6 h-6" />, value: 'history' },
        { id: 'nature', text: 'Natural Landscapes', icon: <Mountain className="w-6 h-6" />, value: 'nature' },
        { id: 'culture', text: 'Local Culture', icon: <Heart className="w-6 h-6" />, value: 'culture' },
        { id: 'cuisine', text: 'Traditional Cuisine', icon: <Utensils className="w-6 h-6" />, value: 'cuisine' }
      ]
    }
  ];

  const packages: TravelPackage[] = [
    {
      id: 'silk_road_classic',
      name: 'Classic Silk Road Journey',
      description: 'Explore the ancient cities of Samarkand, Bukhara, and Khiva with expert guides',
      duration: '8 days',
      price: 'From $1,299',
      rating: 4.9,
      image: '/src/assets/business-1.jpg',
      highlights: ['UNESCO World Heritage Sites', 'Traditional Crafts', 'Local Cuisine', 'Expert Guides'],
      matchScore: 0
    },
    {
      id: 'cultural_immersion',
      name: 'Cultural Immersion Experience',
      description: 'Live with local families and experience authentic Uzbek traditions',
      duration: '12 days',
      price: 'From $1,899',
      rating: 4.8,
      image: '/src/assets/business-2.jpg',
      highlights: ['Homestay Experience', 'Cooking Classes', 'Artisan Workshops', 'Festival Participation'],
      matchScore: 0
    },
    {
      id: 'adventure_explorer',
      name: 'Adventure Explorer Package',
      description: 'Combine city tours with desert camping and mountain trekking',
      duration: '10 days',
      price: 'From $1,599',
      rating: 4.7,
      image: '/src/assets/category-hotel.jpg',
      highlights: ['Desert Camping', 'Mountain Trekking', 'Camel Riding', 'Stargazing'],
      matchScore: 0
    }
  ];

  const calculateMatches = () => {
    const userProfile = answers;
    
    return packages.map(pkg => {
      let score = 0;
      
      // Scoring logic based on answers
      if (userProfile.travel_style === 'cultural' && pkg.id === 'cultural_immersion') score += 40;
      if (userProfile.travel_style === 'adventure' && pkg.id === 'adventure_explorer') score += 40;
      if (userProfile.travel_style === 'cultural' && pkg.id === 'silk_road_classic') score += 35;
      
      if (userProfile.duration === 'medium' && pkg.duration.includes('8')) score += 20;
      if (userProfile.duration === 'long' && pkg.duration.includes('12')) score += 20;
      if (userProfile.duration === 'medium' && pkg.duration.includes('10')) score += 20;
      
      if (userProfile.interests === 'history' && pkg.id === 'silk_road_classic') score += 25;
      if (userProfile.interests === 'culture' && pkg.id === 'cultural_immersion') score += 25;
      if (userProfile.interests === 'nature' && pkg.id === 'adventure_explorer') score += 25;
      
      // Add some randomness for variety
      score += Math.random() * 15;
      
      return { ...pkg, matchScore: Math.min(100, score) };
    }).sort((a, b) => b.matchScore - a.matchScore);
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendedPackages = calculateMatches();
    
    return (
      <section className="py-24 bg-gradient-to-br from-earth-50 via-sage-50 to-ocean-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
              Your Perfect Uzbekistan Adventure
            </h2>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto">
              Based on your preferences, we've found the ideal travel packages for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recommendedPackages.slice(0, 3).map((pkg, index) => (
              <Card key={pkg.id} className={`relative overflow-hidden rounded-3xl border-0 shadow-xl bg-white transform transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'ring-4 ring-terracotta-400' : ''}`}>
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-terracotta-500 text-white font-semibold">
                      Best Match
                    </Badge>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-sage-600 text-white">
                        {Math.round(pkg.matchScore)}% Match
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sage-700 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sage-600">{pkg.duration}</span>
                    <span className="text-2xl font-bold text-terracotta-600">{pkg.price}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-sage-300 text-sage-700">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl font-semibold py-3 transition-all duration-300 hover:shadow-lg">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={resetQuiz}
              variant="outline"
              className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-2xl px-8 py-3"
            >
              Take Quiz Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-24 bg-gradient-to-br from-sage-50 via-earth-50 to-ocean-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
              Find Your Perfect Escape
            </h2>
            <p className="text-xl text-sage-700">
              Answer a few questions to discover your ideal Uzbekistan adventure
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-sage-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-sage-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-sage-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-terracotta-500 to-sage-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className={`bg-white border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-8 text-center">
                {currentQ.question}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {currentQ.options.map((option) => (
                  <Button
                    key={option.id}
                    variant={answers[currentQ.id] === option.value ? "default" : "outline"}
                    className={`p-6 h-auto flex flex-col items-center space-y-3 rounded-2xl transition-all duration-300 ${
                      answers[currentQ.id] === option.value
                        ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white border-0 shadow-lg scale-105'
                        : 'border-sage-300 text-sage-700 hover:bg-sage-50 hover:border-sage-400 hover:scale-102'
                    }`}
                    onClick={() => handleAnswer(currentQ.id, option.value)}
                  >
                    <div className={`p-3 rounded-full ${
                      answers[currentQ.id] === option.value
                        ? 'bg-white/20'
                        : 'bg-sage-100'
                    }`}>
                      {option.icon}
                    </div>
                    <span className="font-semibold text-center">{option.text}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-2xl px-6 py-3 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQ.id]}
              className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-2xl px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
