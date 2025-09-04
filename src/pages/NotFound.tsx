import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Sahifa topilmadi
        </h1>
        <p className="text-muted-foreground mb-8">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
        </p>
        <Link to="/">
          <Button className="bg-gradient-primary border-0 hover:shadow-glow transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Bosh sahifaga qaytish
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
