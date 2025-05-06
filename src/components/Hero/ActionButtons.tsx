
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ActionButtonsProps {
  isVisible: boolean;
}

const ActionButtons = ({ isVisible }: ActionButtonsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className={`flex gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Button size="lg" variant="default" className="rounded-full px-8 shadow-lg shadow-ocean-blue/20 hover:shadow-ocean-blue/30 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden group bg-ocean-blue hover:bg-ocean-blue/90" asChild>
        <a href="#projects">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
          View Projects
        </a>
      </Button>
      <Button size="lg" variant="outline" className="rounded-full px-8 border-2 bg-vivid-purple text-white hover:bg-vivid-purple/90 hover:border-white/70 transition-all hover:-translate-y-1 duration-300" asChild>
        <a href="#contact">Contact Me</a>
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button size="lg" variant="ghost" className="rounded-full px-8 border border-ocean-blue/30 hover:bg-ocean-blue/10 transition-all hover:-translate-y-1 duration-300 group">
            <span className="text-ocean-blue">Resume</span>
            <Download size={18} className="text-ocean-blue ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#0F172A]/95 border border-ocean-blue/30 p-0 max-w-3xl w-full">
          <div className="p-6 flex flex-col items-center">
            <h3 className="text-2xl font-medium text-white mb-6">Arpit Doneria's Resume</h3>
            <div className="w-full max-h-[70vh] overflow-auto mb-6">
              <img 
                src="/lovable-uploads/19350774-46e5-494e-ab0c-eecf218992c2.png" 
                alt="Arpit Doneria Resume" 
                className="w-full h-auto object-contain shadow-xl rounded-md"
              />
            </div>
            <div className="flex gap-4 w-full justify-center">
              <Button 
                onClick={() => setIsDialogOpen(false)} 
                variant="outline" 
                className="border-ocean-blue/50 text-white hover:bg-ocean-blue/10"
              >
                Close
              </Button>
              <Button 
                className="bg-ocean-blue hover:bg-ocean-blue/90"
                asChild
              >
                <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center gap-2">
                  Download Resume
                  <Download size={18} />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionButtons;
