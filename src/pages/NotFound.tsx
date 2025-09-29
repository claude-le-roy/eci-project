import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors min-h-[44px]"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
