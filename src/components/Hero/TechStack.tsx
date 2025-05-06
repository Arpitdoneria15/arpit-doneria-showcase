
import { useRef, useEffect } from "react";
import { 
  Code, Database, Server, Globe, 
  Cpu, Layers, Git, LineChart 
} from "lucide-react";

interface TechStackProps {
  isVisible: boolean;
}

const TechStack = ({ isVisible }: TechStackProps) => {
  const techStackRef = useRef<HTMLDivElement>(null);
  
  const techStack = [
    { name: "React", icon: <Globe className="text-sky-400" /> },
    { name: "Node.js", icon: <Server className="text-green-500" /> },
    { name: "TypeScript", icon: <Code className="text-blue-500" /> },
    { name: "JavaScript", icon: <Code className="text-yellow-400" /> },
    { name: "MongoDB", icon: <Database className="text-green-600" /> },
    { name: "Git", icon: <Git className="text-orange-500" /> },
    { name: "Python", icon: <Code className="text-blue-600" /> },
    { name: "C++", icon: <Cpu className="text-blue-400" /> },
    { name: "SQL", icon: <Database className="text-cyan-500" /> },
    { name: "Tailwind", icon: <Layers className="text-cyan-400" /> },
    { name: "Firebase", icon: <LineChart className="text-orange-400" /> },
    { name: "Redux", icon: <Layers className="text-purple-500" /> }
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
            <div 
              key={`${tech.name}-${index}`} 
              className="px-3 py-2 bg-ocean-blue/20 text-ocean-blue/90 rounded-md text-sm font-medium border border-ocean-blue/30 flex items-center gap-2 hover:bg-ocean-blue/30 transition-all"
            >
              <div className="animate-spin-slow">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
