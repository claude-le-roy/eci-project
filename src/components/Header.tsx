import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, UserPlus } from "lucide-react";
import EciLogo from "@/components/EciLogo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
          <EciLogo className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="text-base md:text-lg font-semibold text-foreground truncate">Elite Career Initiative</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Empowering Ghana's Future</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6" role="navigation" aria-label="Main navigation">
          <a 
            href="/" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Home page"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Learn about our mission"
          >
            About
          </a>
          <a 
            href="/team" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Meet our team"
          >
            Team
          </a>
          <a 
            href="/resources" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Access our resource library"
          >
            Resources
          </a>
          <a 
            href="/programs" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="View our career development programs"
          >
            Programs
          </a>
          <a 
            href="/contact" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Contact us"
          >
            Contact
          </a>
          <a 
            href="/donate" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Support our mission"
          >
            Support Us
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Mobile navigation">
                <a 
                  href="/" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Home page"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Learn about our mission"
                >
                  About
                </a>
                <a 
                  href="/team" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Meet our team"
                >
                  Team
                </a>
                <a 
                  href="/resources" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Access our resource library"
                >
                  Resources
                </a>
                <a 
                  href="/programs" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="View our career development programs"
                >
                  Programs
                </a>
                <a 
                  href="/contact" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Contact us"
                >
                  Contact
                </a>
                <a 
                  href="/donate" 
                  className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Support our mission"
                >
                  Support Us
                </a>
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    aria-label="Sign in to your account"
                    onClick={() => navigate("/auth/sign-in")}
                    className="justify-start"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button 
                    variant="cta" 
                    size="sm" 
                    aria-label="Join Elite Career Initiative"
                    onClick={() => navigate("/auth/sign-up")}
                    className="justify-start"
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Join ECI
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            aria-label="Sign in to your account"
            onClick={() => navigate("/auth/sign-in")}
          >
            Sign In
          </Button>
          <Button 
            variant="cta" 
            size="sm" 
            aria-label="Join Elite Career Initiative"
            onClick={() => navigate("/auth/sign-up")}
          >
            Join ECI
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;