
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";

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
    <section id="about" className="section-container py-24 bg-gradient-to-b from-background via-primary/5 to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Colored shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className={`space-y-6 order-2 md:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-3xl font-bold mb-6 font-display relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-primary/80 to-cyan-500/50 rounded-full"></span>
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Full Stack Developer</span> with a passion for building responsive and efficient web applications. Currently pursuing my B.Tech in Computer Science & Engineering, I focus on creating user-friendly solutions using modern technologies.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise spans across front-end technologies like React, back-end with Node.js, and database management with SQL and MongoDB. I enjoy solving complex problems and continuously learning new technologies.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="mailto:arpitpandat504@gmail.com" className="contact-link text-sm group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="group-hover:text-primary transition-colors">arpitpandat504@gmail.com</span>
            </a>
            <a href="tel:+919654219626" className="contact-link text-sm group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="group-hover:text-primary transition-colors">+91 9654219626</span>
            </a>
          </div>
        </div>
        
        <div className={`order-1 md:order-2 flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-cyan-500/40 blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full overflow-hidden rounded-3xl border-4 border-background shadow-xl">
              <AspectRatio ratio={1/1}>
                <img 
                  src="/lovable-uploads/7e6d6647-2429-49b7-b75e-00bea9031a8b.png" 
                  alt="Arpit Doneria" 
                  className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-500"
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-md"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/5 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
