
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('education');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const education = [
    {
      institution: "Bhagwan Parshuram Institute Of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2021 - 2025",
      grade: "CGPA: 8.20/10.0"
    }
  ];
  
  const certifications = [
    "GOOGLE CLOUD LABS - Introduction to generative AI",
    "SCALER - Data structures in C++",
    "GREAT LEARNING - Project Management With JIRA",
    "UDEMY - Full Stack Web Development"
  ];
  
  const achievements = [
    "Flipkart GRiD 5.0 - Competed among 210,762 learners across the nation. Cleared Round 1 and Qualified for Round 2.",
    "LeetCode - Ranked in the top 8% globally with a 1730+ rating. Achieved Rank 1,248 out of 33,120 in Biweekly Contest 146.",
    "JEE ADVANCED – Ranked in the top 4000 students in 2022 & secured a seat in IIT HY"
  ];

  return (
    <section id="education" className="py-32 bg-gradient-to-b from-[#1E293B] via-[#172032] to-[#0F172A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-vivid-purple/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold font-display relative inline-block text-white">
            Education
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-ocean-blue to-vivid-purple rounded-full"></span>
          </h2>
        </div>
        
        <div className="space-y-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {edu.institution}
                      </h3>
                      <p className="text-white/60">{edu.degree}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="border-ocean-blue/50 text-ocean-blue bg-ocean-blue/10">
                        {edu.period}
                      </Badge>
                      <p className="mt-2 text-white/60 text-right">{edu.grade}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Certifications</h3>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 duration-300"
                    >
                      <p className="text-white/80">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Achievements</h3>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-white/80">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
