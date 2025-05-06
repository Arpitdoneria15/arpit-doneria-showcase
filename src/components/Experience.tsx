
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const experiences = [
    {
      company: "Celebal Technologies",
      location: "Noida, Uttar Pradesh",
      position: "React JS Developer",
      period: "May 2024 - August 2024",
      responsibilities: [
        "Improved software and web interfaces for Celebal subsidiaries, reducing clutter by 30% and making navigation easier.",
        "Built features with React.js and Tailwind CSS, ensuring smooth performance across different devices.",
        "Assisted in developing and maintaining React applications with a focus on front-end functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#1E293B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 -left-40 w-80 h-80 bg-vivid-purple/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold font-display relative inline-block text-white">
            Experience
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-ocean-blue to-vivid-purple rounded-full"></span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Card className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-ocean-blue via-vivid-purple to-magenta-pink"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {exp.position}
                      </h3>
                      <p className="text-white/60">
                        {exp.company} | {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-ocean-blue/50 text-ocean-blue bg-ocean-blue/10 mt-2 md:mt-0 w-fit h-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <p className="text-white/80">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
