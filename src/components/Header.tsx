import { Button } from "@/components/ui/button";
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
            href="#programs" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="View our career development programs"
          >
            Programs
          </a>
          <a 
            href="#how-it-works" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Learn about our process"
          >
            Process
          </a>
          <a 
            href="#impact" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="See our impact and success stories"
          >
            Impact
          </a>
          <a 
            href="#get-involved" 
            className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Join our community"
          >
            Get Involved
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
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