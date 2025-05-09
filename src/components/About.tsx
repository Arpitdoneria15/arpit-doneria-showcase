
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import { Code, Globe, Database, Server } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#1E293B] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-magenta-pink/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold font-display relative inline-block text-white">
            About Me
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-ocean-blue to-vivid-purple rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 order-2 md:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl hover:shadow-ocean-blue/5 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-blue to-vivid-purple flex items-center justify-center text-white">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Passionate about building responsive and efficient web applications using modern technologies. My expertise spans across both front-end and back-end development.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl hover:shadow-ocean-blue/5 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-vivid-purple to-magenta-pink flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Web Technologies</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Skilled in creating seamless user experiences with React, enhancing functionality with Node.js, and bringing designs to life with HTML, CSS, and JavaScript.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl hover:shadow-ocean-blue/5 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-blue to-magenta-pink flex items-center justify-center text-white">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Database Management</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Experience with SQL and MongoDB for database management, ensuring efficient data storage and retrieval for applications.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:arpitpandat504@gmail.com" className="contact-link text-sm group text-white/60">
                <div className="w-10 h-10 rounded-full bg-ocean-blue/10 flex items-center justify-center text-ocean-blue group-hover:bg-ocean-blue group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="group-hover:text-ocean-blue transition-colors">arpitpandat504@gmail.com</span>
              </a>
              <a href="tel:+919654219626" className="contact-link text-sm group text-white/60">
                <div className="w-10 h-10 rounded-full bg-ocean-blue/10 flex items-center justify-center text-ocean-blue group-hover:bg-ocean-blue group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="group-hover:text-ocean-blue transition-colors">+91 9654219626</span>
              </a>
            </div>
          </div>
          
          <div className={`order-1 md:order-2 flex justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-72 h-72 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ocean-blue/30 to-magenta-pink/40 blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl shadow-blue-500/10">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/7e6d6647-2429-49b7-b75e-00bea9031a8b.png" 
                    alt="Arpit Doneria" 
                    className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-500"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ocean-blue/10 rounded-full blur-md"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-magenta-pink/10 rounded-full blur-md"></div>
              
              <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-ocean-blue to-vivid-purple p-1">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                  <Server size={24} className="text-white" />
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-vivid-purple to-magenta-pink p-1">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                  <Code size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
