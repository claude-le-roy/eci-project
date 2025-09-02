import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">ECI</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Elite Career Initiative</h1>
            <p className="text-xs text-muted-foreground">Empowering Ghana's Future</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Process</a>
          <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
          <a href="#get-involved" className="text-foreground hover:text-primary transition-colors">Get Involved</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="cta" size="sm">Join ECI</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;