import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Footer = () => {
  const { t } = useLocalization();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'listings', path: '/listings' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' }
  ];

  const categories = [
    'restaurants', 'hotels', 'shopping', 'healthcare'
  ];

  const support = [
    'Yordam markazi', 'FAQ', 'Biznes qo\'shish', 'Reklama'
  ];

  const legal = [
    'Maxfiylik siyosati', 'Foydalanish shartlari', 'Cookie siyosati'
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                UzBiznes
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Toshkent, O'zbekiston</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+998 71 123-45-67</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>info@uzbiznes.uz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`navbar.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <h4 className="font-medium text-foreground">
              {t('footer.categories')}
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    to={`/listings?category=${category}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`categories.${category}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t('footer.support')}
            </h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <Link 
                    to="/support"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <h4 className="font-medium text-foreground">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <Link 
                    to="/legal"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Yangiliklardan xabardor bo'ling
            </h3>
            <p className="text-sm text-muted-foreground">
              Eng so'nggi yangiliklar va takliflarni birinchi bo'lib oling
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Email manzilingiz"
                className="bg-background"
              />
              <Button size="sm" className="bg-gradient-primary border-0 px-6">
                Obuna
              </Button>
            </div>
            <div className="space-y-3 pt-4">
              <h4 className="font-medium text-foreground">
                {t('footer.followUs')}
              </h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 UzBiznes. {t('footer.allRightsReserved')}.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link 
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};