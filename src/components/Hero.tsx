import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Young African professionals and students in mentorship and career development settings"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bridging Education to
            <span className="text-primary block mt-2">Employment Success</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            The Elite Career Initiative empowers students and young professionals in Ghana 
            with the skills, mentorship, and opportunities needed to confidently transition 
            from classroom to career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              aria-label="Start your career development journey with ECI"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-foreground text-foreground hover:bg-foreground hover:text-background"
              aria-label="Apply to become a mentor and share your expertise"
            >
              Become a Mentor
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-center" role="region" aria-label="Impact statistics">
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Five hundred plus">500+</div>
              <div className="text-muted-foreground">Students Empowered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Ninety-five percent">95%</div>
              <div className="text-muted-foreground">Employment Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary" aria-label="Fifty plus">50+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;