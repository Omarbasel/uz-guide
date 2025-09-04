import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X, Filter, MapPin, DollarSign, Star, Tag, Clock, Shield } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

export const FiltersSidebar = () => {
  const { t } = useLocalization();

  const categories = [
    'restaurants', 'hotels', 'shopping', 'healthcare', 
    'education', 'automotive', 'beauty', 'services'
  ];

  const cities = [
    'tashkent', 'samarkand', 'bukhara', 'namangan',
    'andijan', 'fergana', 'nukus', 'urgench'
  ];

  return (
    <div className="w-80 space-y-6">
      {/* Filter Header */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              {t('filters.title')}
            </CardTitle>
            <Button variant="ghost" size="sm">
              {t('filters.clear')}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              Restoranlar
              <X className="w-3 h-3 cursor-pointer hover:text-destructive" />
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              Toshkent
              <X className="w-3 h-3 cursor-pointer hover:text-destructive" />
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-base">
            <Tag className="w-4 h-4 mr-2" />
            {t('filters.category')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label 
                htmlFor={category}
                className="text-sm font-normal cursor-pointer flex-1"
              >
                {t(`categories.${category}`)}
              </Label>
              <span className="text-xs text-muted-foreground">
                (234)
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Location Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-base">
            <MapPin className="w-4 h-4 mr-2" />
            {t('filters.location')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Shaharni tanlang" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>
                  {t(`cities.${city}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="Rayon yoki ko'cha" />
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-base">
            <DollarSign className="w-4 h-4 mr-2" />
            {t('filters.priceRange')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex items-center space-x-2">
            <Input placeholder="Min" className="flex-1" />
            <span className="text-muted-foreground">-</span>
            <Input placeholder="Max" className="flex-1" />
          </div>
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-base">
            <Star className="w-4 h-4 mr-2" />
            {t('filters.rating')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label 
                htmlFor={`rating-${rating}`}
                className="flex items-center cursor-pointer flex-1"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-3 h-3 ${
                        i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm">va yuqori</span>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Special Features */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Maxsus xususiyatlar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" />
            <Label htmlFor="verified" className="flex items-center text-sm cursor-pointer">
              <Shield className="w-4 h-4 mr-1 text-accent" />
              {t('filters.verified')}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="open-now" />
            <Label htmlFor="open-now" className="flex items-center text-sm cursor-pointer">
              <Clock className="w-4 h-4 mr-1 text-green-500" />
              {t('filters.openNow')}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deals" />
            <Label htmlFor="deals" className="text-sm cursor-pointer">
              {t('filters.deals')}
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Apply Filters */}
      <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow transition-all">
        {t('filters.apply')}
      </Button>
    </div>
  );
};