
import { useEffect, useState } from "react";
import BackgroundEffects from "./BackgroundEffects";
import ProfileSection from "./ProfileSection";
import Bio from "./Bio";
import TechStack from "./TechStack";
import ActionButtons from "./ActionButtons";
import MiniGames from "./MiniGames";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
    
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

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0F172A]">
      <BackgroundEffects mousePosition={mousePosition} />
      
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-6 z-10">
        <ProfileSection isVisible={isVisible} />
        <Bio isVisible={isVisible} />
        <TechStack isVisible={isVisible} />
        <ActionButtons isVisible={isVisible} />
      </div>
      
      <MiniGames isVisible={isVisible} />
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
