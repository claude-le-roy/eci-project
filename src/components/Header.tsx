import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import EciLogo from "@/components/EciLogo";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <EciLogo className="w-12 h-12" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Elite Career Initiative</h1>
            <p className="text-xs text-muted-foreground">Empowering Ghana's Future</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
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
            href="#programs" 
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
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
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
                  href="#programs" 
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
                  <Button variant="ghost" size="sm" aria-label="Sign in to your account">
                    Sign In
                  </Button>
                  <Button variant="cta" size="sm" aria-label="Join Elite Career Initiative">
                    Join ECI
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm" aria-label="Sign in to your account">
            Sign In
          </Button>
          <Button variant="cta" size="sm" aria-label="Join Elite Career Initiative">
            Join ECI
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;