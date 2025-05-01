
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-6 z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-lg md:text-xl font-medium text-primary/80 animate-fade-in">
            Hello, my name is
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-bold font-display leading-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Arpit Doneria
          </h1>
          <h3 className="text-3xl md:text-4xl font-medium mt-3 text-muted-foreground animate-fade-in">
            Full Stack Developer
          </h3>
        </div>

        <div className={`max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground my-6 animate-fade-in leading-relaxed">
            I build responsive web applications with modern technologies.
            Passionate about creating efficient, user-friendly solutions.
          </p>
        </div>

        <div className={`flex gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" variant="default" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-secondary/80" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <span>Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
