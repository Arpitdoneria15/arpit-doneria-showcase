
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/arpit-doneria/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/Arpitdoneria159", icon: "github" },
    { name: "Email", url: "mailto:arpitpandat504@gmail.com", icon: "mail" },
  ];
  
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-primary/10"></div>
      
      {/* Interactive animated shapes that follow mouse */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl" 
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.8s ease-out',
        }}
      ></div>
      
      <div 
        className="absolute w-48 h-48 rounded-full bg-soft-purple/10 blur-3xl" 
        style={{
          right: `${(1 - mousePosition.x) * 80}%`,
          bottom: `${(1 - mousePosition.y) * 80}%`,
          transform: 'translate(30%, 30%)',
          transition: 'all 1.2s ease-out',
        }}
      ></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-display font-bold mb-6 animated-gradient-text hover:scale-105 transition-all duration-300">
            ARPIT DONERIA
          </a>
          
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md hover:shadow-primary/20 group"
                aria-label={link.name}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full"></div>
                {link.icon === "linkedin" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                )}
                {link.icon === "github" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                )}
                {link.icon === "mail" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                )}
              </a>
            ))}
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5 rounded-full mb-8"></div>
          
          <p className="text-muted-foreground text-center">
            &copy; {currentYear} Arpit Doneria. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2 italic">
            Designed with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
