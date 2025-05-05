
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const htmlSection = section as HTMLElement; // Type casting to HTMLElement
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = "#" + section.getAttribute("id");
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-primary/5' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold relative group">
          <span className="bg-gradient-to-r from-ocean-blue to-magenta-pink bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-vivid-purple transition-all duration-300">
            ARPIT DONERIA
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-blue to-magenta-pink group-hover:w-full transition-all duration-300"></span>
        </a>
        
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`nav-link text-sm font-medium relative ${activeLink === link.href ? 'text-ocean-blue' : ''}`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-ocean-blue to-magenta-pink animate-pulse-soft"></span>
              )}
            </a>
          ))}
          
          {/* Resume Download Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full border border-ocean-blue/30 hover:bg-ocean-blue/10 transition-all duration-300 group"
            asChild
          >
            <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center space-x-2">
              <span className="text-ocean-blue group-hover:text-primary">Resume</span>
              <Download size={16} className="text-ocean-blue group-hover:text-primary" />
            </a>
          </Button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="relative z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`}
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu with enhanced animation */}
      <div className={`fixed inset-0 bg-background/90 backdrop-blur-xl transform transition-all duration-500 ease-in-out z-20 md:hidden ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-xl font-medium text-center relative group ${activeLink === link.href ? 'text-ocean-blue' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text group-hover:text-ocean-blue transition-all duration-300">
                  {link.name}
                </span>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-ocean-blue to-magenta-pink group-hover:w-1/2 transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Mobile Resume Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-2 border-ocean-blue/50 hover:bg-ocean-blue/10 transition-all duration-300 mt-4 group w-36 mx-auto"
              asChild
            >
              <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center justify-center space-x-2">
                <span className="text-ocean-blue group-hover:text-primary">Resume</span>
                <Download size={16} className="text-ocean-blue group-hover:text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
