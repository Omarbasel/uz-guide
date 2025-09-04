import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

// Translations
const translations = {
  uz: {
    // Header
    navbar: {
      home: "Bosh sahifa",
      listings: "Korxonalar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      signIn: "Kirish",
      addBusiness: "Biznes qo'shish",
      language: "Til"
    },
    
    // Hero Section
    hero: {
      title: "O'zbekistondagi eng yaxshi bizneslarni toping",
      subtitle: "Minglab ishonchli korxonalar va xizmatlar bitta joyda",
      searchPlaceholder: "Nima qidiryapsiz?",
      locationPlaceholder: "Shaharni tanlang",
      categoryPlaceholder: "Barcha kategoriyalar",
      searchButton: "Qidirish",
      popularSearches: "Mashhur qidiruvlar"
    },

    // Categories
    categories: {
      title: "Mashhur kategoriyalar",
      restaurants: "Restoranlar",
      hotels: "Mehmonxonalar", 
      shopping: "Xarid qilish",
      healthcare: "Tibbiyot",
      education: "Ta'lim",
      automotive: "Avtomobil",
      beauty: "Go'zallik",
      services: "Xizmatlar",
      entertainment: "Ko'ngilochar",
      realestate: "Ko'chmas mulk"
    },

    // Latest Listings
    listings: {
      title: "Yangi qo'shilgan korxonalar",
      viewAll: "Barchasini ko'rish",
      quickView: "Tez ko'rish",
      rating: "Reyting",
      reviews: "ta fikr",
      contact: "Aloqa",
      website: "Veb-sayt",
      phone: "Telefon",
      address: "Manzil"
    },

    // Cities
    cities: {
      tashkent: "Toshkent",
      samarkand: "Samarqand", 
      bukhara: "Buxoro",
      namangan: "Namangan",
      andijan: "Andijon",
      fergana: "Farg'ona",
      nukus: "Nukus",
      urgench: "Urganch",
      qarshi: "Qarshi",
      termez: "Termiz"
    },

    // Filter Page
    filters: {
      title: "Filtrlar",
      category: "Kategoriya",
      location: "Joylashuv",
      priceRange: "Narx oralig'i",
      rating: "Reyting",
      deals: "Chegirmalar",
      openNow: "Hozir ochiq",
      verified: "Tasdiqlangan",
      apply: "Qo'llash",
      clear: "Tozalash",
      results: "ta natija topildi",
      sortBy: "Saralash",
      gridView: "Katakcha ko'rinish",
      listView: "Ro'yxat ko'rinish"
    },

    // Footer
    footer: {
      description: "O'zbekistondagi biznes katalogi - eng yaxshi korxonalar va xizmatlarni toping",
      quickLinks: "Tezkor havolalar",
      categories: "Kategoriyalar", 
      support: "Yordam",
      legal: "Huquqiy",
      followUs: "Bizni kuzating",
      allRightsReserved: "Barcha huquqlar himoyalangan",
      privacyPolicy: "Maxfiylik siyosati",
      termsOfService: "Foydalanish shartlari"
    },

    // Common
    common: {
      loading: "Yuklanmoqda...",
      error: "Xatolik yuz berdi",
      tryAgain: "Qayta urinish",
      noResults: "Hech narsa topilmadi",
      showMore: "Ko'proq ko'rsatish",
      showLess: "Kamroq ko'rsatish",
      save: "Saqlash",
      cancel: "Bekor qilish",
      edit: "Tahrirlash",
      delete: "O'chirish",
      share: "Ulashish",
      print: "Chop etish"
    }
  },
  en: {
    // Header
    navbar: {
      home: "Home",
      listings: "Listings",
      about: "About Us",
      contact: "Contact",
      signIn: "Sign In",
      addBusiness: "Add Business",
      language: "Language"
    },
    
    // Hero Section
    hero: {
      title: "Find the Best Businesses in Uzbekistan",
      subtitle: "Thousands of trusted businesses and services in one place",
      searchPlaceholder: "What are you looking for?",
      locationPlaceholder: "Select City",
      categoryPlaceholder: "All Categories",
      searchButton: "Search",
      popularSearches: "Popular Searches"
    },

    // Categories
    categories: {
      title: "Popular Categories",
      restaurants: "Restaurants",
      hotels: "Hotels", 
      shopping: "Shopping",
      healthcare: "Healthcare",
      education: "Education",
      automotive: "Automotive",
      beauty: "Beauty",
      services: "Services",
      entertainment: "Entertainment",
      realestate: "Real Estate"
    },

    // Latest Listings
    listings: {
      title: "Latest Business Listings",
      viewAll: "View All",
      quickView: "Quick View",
      rating: "Rating",
      reviews: "reviews",
      contact: "Contact",
      website: "Website",
      phone: "Phone",
      address: "Address"
    },

    // Cities
    cities: {
      tashkent: "Tashkent",
      samarkand: "Samarkand", 
      bukhara: "Bukhara",
      namangan: "Namangan",
      andijan: "Andijan",
      fergana: "Fergana",
      nukus: "Nukus",
      urgench: "Urgench",
      qarshi: "Qarshi",
      termez: "Termez"
    },

    // Filter Page
    filters: {
      title: "Filters",
      category: "Category",
      location: "Location",
      priceRange: "Price Range",
      rating: "Rating",
      deals: "Deals",
      openNow: "Open Now",
      verified: "Verified",
      apply: "Apply",
      clear: "Clear",
      results: "results found",
      sortBy: "Sort By",
      gridView: "Grid View",
      listView: "List View"
    },

    // Footer
    footer: {
      description: "Business directory in Uzbekistan - find the best businesses and services",
      quickLinks: "Quick Links",
      categories: "Categories", 
      support: "Support",
      legal: "Legal",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },

    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      tryAgain: "Try Again",
      noResults: "No results found",
      showMore: "Show More",
      showLess: "Show Less",
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      share: "Share",
      print: "Print"
    }
  }
};

interface LocalizationContextType {
  t: (key: string) => string;
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LocalizationContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};