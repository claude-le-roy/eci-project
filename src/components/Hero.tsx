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
      <div className="relative z-10 container mx-auto px-4 py-20 sm:py-24 md:py-32 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Bridging Education to
            <span className="text-primary block mt-1 md:mt-2">Employment Success</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl leading-relaxed">
            The Elite Career Initiative empowers students and young professionals in Ghana 
            with the skills, mentorship, and opportunities needed to confidently transition 
            from classroom to career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start max-w-lg mx-auto md:mx-0">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 min-h-[44px]"
              aria-label="Start your career development journey with ECI"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 border-foreground text-foreground hover:bg-foreground hover:text-background min-h-[44px]"
              aria-label="Apply to become a mentor and share your expertise"
            >
              Become a Mentor
            </Button>
          </div>
          
          <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center max-w-2xl mx-auto md:mx-0" role="region" aria-label="Impact statistics">
            <div className="p-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary" aria-label="Five hundred plus">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Students Empowered</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary" aria-label="Ninety-five percent">95%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Employment Rate</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary" aria-label="Fifty plus">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;