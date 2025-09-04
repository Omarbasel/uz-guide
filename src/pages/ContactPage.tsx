import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalization } from "@/contexts/LocalizationContext";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Users
} from "lucide-react";
import heroBg from "@/assets/643452-1920x1200-desktop-hd-uzbekistan-background.jpg";

export const ContactPage = () => {
  const { t } = useLocalization();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: [
        "Tashkent City, Yunusabad District",
        "Amir Temur Avenue 108",
        "Business Center \"Poytaxt\", 15th floor"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+998 71 200-50-50",
        "+998 90 123-45-67",
        "+998 95 987-65-43"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@uzguidevista.uz",
        "support@uzguidevista.uz",
        "business@uzguidevista.uz"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "Tashkent",
      address: "Amir Temur Avenue 108, Business Center \"Poytaxt\"",
      phone: "+998 71 200-50-50",
      email: "tashkent@uzguidevista.uz"
    },
    {
      city: "Samarkand",
      address: "Registon Street 25, Historical Center",
      phone: "+998 66 234-56-78",
      email: "samarkand@uzguidevista.uz"
    },
    {
      city: "Bukhara",
      address: "Lyabi Hauz Square 12, Old City",
      phone: "+998 65 224-33-44",
      email: "bukhara@uzguidevista.uz"
    }
  ];

  const faqs = [
    {
      question: "How can I list my business on UZ Guide Vista?",
      answer: "You can list your business by filling out our business registration form or contacting our business development team directly."
    },
    {
      question: "Is there a fee for listing my business?",
      answer: "We offer both free basic listings and premium packages with enhanced features. Contact us for detailed pricing information."
    },
    {
      question: "How do you verify businesses?",
      answer: "Our team conducts thorough verification including document checks, site visits, and quality assessments to ensure authenticity."
    },
    {
      question: "Can I update my business information?",
      answer: "Yes, business owners can update their information anytime through our business portal or by contacting our support team."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We're here to help you discover the best of Uzbekistan. 
            Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input 
                          placeholder="Enter your first name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Enter your last name"
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input 
                        placeholder="What is this about?"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our locations across Uzbekistan's major cities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      {office.phone}
                    </p>
                    <p className="flex items-center justify-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      {office.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our platform and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    {faq.answer}
                  </p>
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
            Whether you're a traveler looking for experiences or a business owner 
            wanting to reach more customers, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Globe className="w-5 h-5 mr-2" />
              Explore Businesses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              List Your Business
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
