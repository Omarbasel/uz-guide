import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Globe, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Header = () => {
  const { t, currentLanguage, setLanguage } = useLocalization();

  return (
    <header className="bg-background border-b shadow-card">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              UzBiznes
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.home')}
            </Link>
            <Link 
              to="/listings" 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.listings')}
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.about')}
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('navbar.contact')}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={currentLanguage} onValueChange={setLanguage}>
              <SelectTrigger className="hidden sm:flex w-auto">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uz">O'zbekcha</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>

            {/* Sign In */}
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              {t('navbar.signIn')}
            </Button>

            {/* Add Business */}
            <Button size="sm" className="bg-gradient-primary border-0 hover:shadow-glow transition-all">
              <Plus className="w-4 h-4 mr-2" />
              {t('navbar.addBusiness')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};