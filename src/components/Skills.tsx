
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { 
  Code, Database, Server, Globe, 
  Cpu, Layers, GitBranch, LineChart
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" />,
      skills: ["Python", "C/C++", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-green-400" />,
      skills: ["React JS", "Node JS", "HTML", "CSS", "Git"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-400" />,
      skills: ["SQL", "MongoDB", "Drizzle"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Core Concepts",
      icon: <Cpu className="text-violet-400" />,
      skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems"],
      color: "from-violet-500 to-indigo-500"
    }
  ];

  return (
    <section id="skills" className="section-container py-32 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Enhanced animated shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-soft-purple/20 blur-3xl opacity-60 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-soft-blue/20 blur-3xl opacity-50 animate-blob"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display relative inline-block text-white">
              Technical Skills
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-ocean-blue to-vivid-purple rounded-full"></span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl text-center">
              My expertise in various technologies and programming concepts that I've mastered through academic and hands-on experience.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm hover:from-black/50 hover:to-black/70 group transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-full">
                  {/* Subtle animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-gradient-x"></div>
                  
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white relative overflow-hidden transform transition-transform group-hover:scale-110 duration-500`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-ocean-blue group-hover:to-white transition-all duration-500">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 flex-grow">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-lg hover:shadow-ocean-blue/5"
                          style={{ transitionDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Additional floating skill icons */}
        <div className="mt-16 relative h-32 hidden md:block">
          <div className={`absolute top-0 left-1/4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean-blue to-vivid-purple p-0.5 animate-float">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                <Code size={28} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className={`absolute top-8 right-1/4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vivid-purple to-magenta-pink p-0.5 animate-float animation-delay-2000">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                <Database size={28} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className={`absolute bottom-0 right-1/3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-magenta-pink to-orange-500 p-0.5 animate-float animation-delay-4000">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                <GitBranch size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
