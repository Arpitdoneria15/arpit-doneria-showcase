
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Code, Link, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "Study Buddy",
      description: "A web-based platform with the CSE department to centralize practical exam resources, improving student access to subject outlines, viva questions, and supplementary materials.",
      tech: ["HTML", "CSS", "JavaScript", "JWT"],
      highlights: [
        "Designed interactive UI enhancing navigation efficiency by 85% for students.",
        "JWT authentication for secure, role-based user access."
      ],
      sourceUrl: "#",
      liveUrl: "",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Inquiry Web",
      description: "Developed a Quora-like platform for posting questions, sharing knowledge, and community interaction, boosting user engagement by 35%.",
      tech: ["React.js", "Tailwind CSS", "TypeScript", "Firebase"],
      highlights: [
        "Built a scalable, secure, and responsive application, improving performance by 50%.",
        "Leveraged tools like Git, GitHub, and Visual Studio Code, increasing development efficiency by 25%."
      ],
      sourceUrl: "https://github.com/Arpitdoneria15/Quora-Clone",
      liveUrl: "",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Vines & Co",
      description: "A visually appealing website theme with GSAP and Locomotive Scroll animations, enhancing the presentation of wines and boosting user engagement.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      highlights: [
        "Streamlined the wine selection process with an intuitive, user-friendly interface.",
        "Reduced navigation time by 45% and enhanced user experience."
      ],
      sourceUrl: "",
      liveUrl: "https://Arpitdoneria159.github.io/Vines-&-Co/",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Sociogram",
      description: "Developed a social media platform with real-time communication, enabling seamless user interactions.",
      tech: ["Next.js", "React", "Redux", "HTML", "CSS"],
      highlights: [
        "Server-side rendering for faster load times and better SEO optimization.",
        "Enhanced UI/UX with efficient state management."
      ],
      sourceUrl: "https://github.com/Arpitdoneria15/Sociogram",
      liveUrl: "https://sociogram-flax.vercel.app/",
      color: "from-violet-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-magenta-pink/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="section-container max-w-6xl mx-auto relative z-10">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold font-display relative inline-block text-white">
            Projects
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-ocean-blue to-vivid-purple rounded-full"></span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            Here are some of the projects I've worked on. Each project represents different challenges and solutions I've implemented.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className={`h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${project.color} backdrop-blur-sm`}>
                <CardHeader className="border-b border-white/10 bg-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="bg-white/10 text-white border-white/20">
                            {tech}
                          </Badge>
                        ))}
                      </CardDescription>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Code size={20} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <ul className="list-none space-y-2 mb-6 flex-grow">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-white/70">
                        <span className="text-ocean-blue mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                    {project.sourceUrl && (
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={16} />
                          Source Code
                        </a>
                      </Button>
                    )}
                    
                    {project.liveUrl && (
                      <Button size="sm" className="bg-gradient-to-r from-ocean-blue to-vivid-purple hover:opacity-90" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
