
import { useRef, useEffect } from "react";

interface TechStackProps {
  isVisible: boolean;
}

const TechStack = ({ isVisible }: TechStackProps) => {
  const techStackRef = useRef<HTMLDivElement>(null);
  
  const techStack = [
    "React", "Node.js", "TypeScript", "JavaScript", 
    "HTML", "CSS", "MongoDB", "Git", "Python", "C++", 
    "SQL", "Tailwind", "Firebase", "Redux"
  ];

  useEffect(() => {
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
      clearInterval(interval);
    };
  }, []);

  return (
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
  );
};

export default TechStack;
