
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
      icon: "code",
      skills: ["Python", "C/C++", "JavaScript"]
    },
    {
      title: "Web Technologies",
      icon: "globe",
      skills: ["React JS", "Node JS", "HTML", "CSS", "Git"]
    },
    {
      title: "Databases",
      icon: "database",
      skills: ["SQL", "MongoDB", "Drizzle"]
    },
    {
      title: "Core Concepts",
      icon: "brain",
      skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-secondary/30 to-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-soft-purple/20 blur-3xl opacity-60 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-soft-blue/20 blur-3xl opacity-50 animate-blob"></div>
      
      <div className="relative z-10">
        <h2 className="section-heading mb-10">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-card/70 backdrop-blur-sm hover:bg-card/90 group">
                <div className="relative overflow-hidden">
                  {/* Subtle moving gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative overflow-hidden group-hover:bg-primary/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                        {category.icon === "code" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        )}
                        {category.icon === "globe" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        )}
                        {category.icon === "database" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        )}
                        {category.icon === "brain" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text group-hover:from-primary group-hover:to-foreground transition-all duration-500">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="skill-badge bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-md"
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
      </div>
    </section>
  );
};

export default Skills;
