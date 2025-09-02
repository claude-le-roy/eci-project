const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ECI</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Elite Career Initiative</h3>
                <p className="text-sm text-secondary-foreground/80">Empowering Ghana's Future</p>
              </div>
            </div>
            <p className="text-secondary-foreground/90 mb-4 max-w-md">
              Bridging the gap between education and employment through comprehensive 
              career development programs, mentorship, and professional opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programs" className="text-secondary-foreground/80 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#how-it-works" className="text-secondary-foreground/80 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#get-involved" className="text-secondary-foreground/80 hover:text-primary transition-colors">Get Involved</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>📧 info@elitecareergh.org</li>
              <li>📱 +233 XX XXX XXXX</li>
              <li>📍 Accra, Ghana</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/80">
            © 2024 Elite Career Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;