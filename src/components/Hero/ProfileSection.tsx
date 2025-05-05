
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileSectionProps {
  isVisible: boolean;
}

const ProfileSection = ({ isVisible }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Profile picture */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Avatar className="w-40 h-40 border-4 border-ocean-blue/50 shadow-lg shadow-ocean-blue/20">
          <AvatarImage src="/lovable-uploads/219207b5-bf05-4ef1-b03f-bb120f59edaf.png" alt="Arpit Doneria" />
          <AvatarFallback className="bg-ocean-blue/20 text-2xl">AD</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-lg md:text-xl font-medium bg-gradient-to-r from-ocean-blue via-vivid-purple to-magenta-pink bg-clip-text text-transparent animate-fade-in">
            Hello, my name is
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-bold font-display leading-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent relative">
            Arpit Doneria
            <span className="absolute -z-10 blur-sm opacity-30 text-ocean-blue top-1 left-1">Arpit Doneria</span>
          </h1>
          <h3 className="text-3xl md:text-4xl font-medium mt-3 bg-gradient-to-r from-white/80 to-white/50 bg-clip-text text-transparent animate-fade-in">
            Full Stack Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
