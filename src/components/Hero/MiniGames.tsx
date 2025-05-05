
import { Gamepad } from "lucide-react";

interface MiniGamesProps {
  isVisible: boolean;
}

const MiniGames = ({ isVisible }: MiniGamesProps) => {
  return (
    <div className={`mt-12 mb-8 max-w-5xl mx-auto px-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-ocean-blue/10 backdrop-blur-sm p-4 rounded-lg border border-ocean-blue/20">
        <div className="flex items-center gap-2 mb-4">
          <Gamepad className="text-ocean-blue" size={20} />
          <h3 className="text-white font-medium">Take a Break? Play a Mini Game</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a 
            href="#game-tic-tac-toe" 
            className="p-3 bg-ocean-blue/20 rounded-lg flex items-center justify-center gap-2 hover:bg-ocean-blue/30 transition-all duration-300 text-white"
          >
            Tic Tac Toe
          </a>
          <a 
            href="#game-memory" 
            className="p-3 bg-vivid-purple/20 rounded-lg flex items-center justify-center gap-2 hover:bg-vivid-purple/30 transition-all duration-300 text-white"
          >
            Memory Match
          </a>
          <a 
            href="#game-snake" 
            className="p-3 bg-magenta-pink/20 rounded-lg flex items-center justify-center gap-2 hover:bg-magenta-pink/30 transition-all duration-300 text-white"
          >
            Snake Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
