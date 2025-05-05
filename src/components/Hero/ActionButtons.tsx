
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ActionButtonsProps {
  isVisible: boolean;
}

const ActionButtons = ({ isVisible }: ActionButtonsProps) => {
  return (
    <div className={`flex gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Button size="lg" variant="default" className="rounded-full px-8 shadow-lg shadow-ocean-blue/20 hover:shadow-ocean-blue/30 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden group bg-ocean-blue hover:bg-ocean-blue/90" asChild>
        <a href="#projects">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
          View Projects
        </a>
      </Button>
      <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-ocean-blue/50 text-white hover:bg-ocean-blue/10 hover:border-ocean-blue/70 transition-all duration-300" asChild>
        <a href="#contact">Contact Me</a>
      </Button>
      <Button size="lg" variant="ghost" className="rounded-full px-8 border border-ocean-blue/30 hover:bg-ocean-blue/10 transition-all duration-300 group" asChild>
        <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center gap-2">
          <span className="text-ocean-blue">Resume</span>
          <Download size={18} className="text-ocean-blue" />
        </a>
      </Button>
    </div>
  );
};

export default ActionButtons;
