import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Download, Gamepad } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const techStackRef = useRef<HTMLDivElement>(null);
  
  const techStack = [
    "React", "Node.js", "TypeScript", "JavaScript", 
    "HTML", "CSS", "MongoDB", "Git", "Python", "C++", 
    "SQL", "Tailwind", "Firebase", "Redux"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Tech stack animation
    const interval = setInterval(() => {
      if (techStackRef.current) {
        techStackRef.current.scrollLeft += 1;
        
        // Reset scroll position when reaching the end
        if (techStackRef.current.scrollLeft >= 
            (techStackRef.current.scrollWidth - techStackRef.current.clientWidth)) {
          techStackRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0F172A]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Interactive gradient blobs that follow mouse */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-ocean-blue/10 blur-[120px] opacity-70"
        style={{
          left: `${mousePosition.x * 10}%`,
          top: `${mousePosition.y * 50}%`,
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-soft-purple/30 blur-[100px] opacity-60"
        style={{
          right: `${(1 - mousePosition.x) * 5}%`,
          bottom: `${(1 - mousePosition.y) * 30}%`,
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: `translate(40%, 40%)`,
        }}
      ></div>
      
      {/* Fixed animated blobs for background depth */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ocean-blue/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-soft-pink/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-soft-blue/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile picture */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Avatar className="w-40 h-40 border-4 border-ocean-blue/50 shadow-lg shadow-ocean-blue/20">
              <AvatarImage src="/lovable-uploads/219207b5-bf05-4ef1-b03f-bb120f59edaf.png" alt="Arpit Doneria" />
              <AvatarFallback className="bg-ocean-blue/20 text-2xl">AD</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex flex-col">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-lg md:text-xl font-medium bg-gradient-to-r from-ocean-blue via-vivid-purple to-magenta-pink bg-clip-text text-transparent animate-fade-in">
                Hello, my name is
              </h2>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-7xl font-bold font-display leading-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent relative">
                Arpit Doneria
                <span className="absolute -z-10 blur-sm opacity-30 text-ocean-blue top-1 left-1">Arpit Doneria</span>
              </h1>
              <h3 className="text-3xl md:text-4xl font-medium mt-3 bg-gradient-to-r from-white/80 to-white/50 bg-clip-text text-transparent animate-fade-in">
                Full Stack Developer
              </h3>
            </div>
          </div>
        </div>

        <div className={`max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-white/70 my-6 animate-fade-in leading-relaxed">
            I build responsive web applications with modern technologies.
            Passionate about creating efficient, user-friendly solutions.
          </p>
        </div>

        {/* Moving tech stack */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-ocean-blue/10 backdrop-blur-sm p-3 rounded-lg border border-ocean-blue/20">
            <h3 className="text-sm font-medium text-ocean-blue mb-2">Tech Stack</h3>
            <div 
              ref={techStackRef}
              className="flex gap-3 overflow-hidden whitespace-nowrap pb-2"
              style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <span 
                  key={`${tech}-${index}`} 
                  className="px-3 py-1 bg-ocean-blue/20 text-ocean-blue/90 rounded-md text-sm font-medium border border-ocean-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`flex gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" variant="default" className="rounded-full px-8 shadow-lg shadow-ocean-blue/20 hover:shadow-ocean-blue/30 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden group bg-ocean-blue hover:bg-ocean-blue/90" asChild>
            <a href="#projects">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-ocean-blue/50 text-white hover:bg-ocean-blue/10 hover:border-ocean-blue/70 transition-all duration-300" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 border border-ocean-blue/30 hover:bg-ocean-blue/10 transition-all duration-300 group" asChild>
            <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center gap-2">
              <span className="text-ocean-blue">Resume</span>
              <Download size={18} className="text-ocean-blue" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Mini Games Section */}
      <div className={`mt-12 mb-8 max-w-5xl mx-auto px-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-ocean-blue/10 backdrop-blur-sm p-4 rounded-lg border border-ocean-blue/20">
          <div className="flex items-center gap-2 mb-4">
            <Gamepad className="text-ocean-blue" size={20} />
            <h3 className="text-white font-medium">Take a Break? Play a Mini Game</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a 
              href="#game-tic-tac-toe" 
              className="p-3 bg-ocean-blue/20 rounded-lg flex items-center justify-center gap-2 hover:bg-ocean-blue/30 transition-all duration-300 text-white"
            >
              Tic Tac Toe
            </a>
            <a 
              href="#game-memory" 
              className="p-3 bg-vivid-purple/20 rounded-lg flex items-center justify-center gap-2 hover:bg-vivid-purple/30 transition-all duration-300 text-white"
            >
              Memory Match
            </a>
            <a 
              href="#game-snake" 
              className="p-3 bg-magenta-pink/20 rounded-lg flex items-center justify-center gap-2 hover:bg-magenta-pink/30 transition-all duration-300 text-white"
            >
              Snake Game
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-white/70 hover:text-ocean-blue transition-colors">
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
