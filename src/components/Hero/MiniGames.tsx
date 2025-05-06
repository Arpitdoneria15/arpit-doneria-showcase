
import { Gamepad } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MiniGamesProps {
  isVisible: boolean;
}

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const winner = calculateWinner(board);
  
  const handleClick = (i: number) => {
    const boardCopy = [...board];
    
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  
  const renderSquare = (i: number) => {
    return (
      <button 
        className="w-16 h-16 bg-ocean-blue/20 border border-ocean-blue/30 flex items-center justify-center text-xl font-bold text-white hover:bg-ocean-blue/30 transition-all"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  
  const status = winner 
    ? `Winner: ${winner}` 
    : board.every(square => square !== null)
    ? "Game ended in a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-lg text-white mb-2">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <Button 
        variant="outline" 
        onClick={resetGame}
        className="mt-4 border-ocean-blue/50 text-white hover:bg-ocean-blue/20"
      >
        Reset Game
      </Button>
    </div>
  );
};

// Helper function to calculate winner
function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const MemoryGame = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-white text-center mb-4">Coming Soon! This game is under development.</p>
      <div className="grid grid-cols-4 gap-2">
        {Array(12).fill(null).map((_, i) => (
          <div 
            key={i} 
            className="w-16 h-16 bg-ocean-blue/20 rounded-md border border-ocean-blue/30 flex items-center justify-center text-xl font-bold text-ocean-blue"
          >
            <span className="opacity-0">?</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SnakeGame = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-white text-center mb-4">Coming Soon! This game is under development.</p>
      <div className="w-64 h-64 border border-ocean-blue/50 bg-ocean-blue/10 grid grid-cols-16 gap-0">
        {Array(256).fill(null).map((_, i) => (
          <div key={i} className="w-4 h-4"></div>
        ))}
      </div>
    </div>
  );
};

const MiniGames = ({ isVisible }: MiniGamesProps) => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  
  return (
    <div className={`mt-12 mb-8 max-w-5xl mx-auto px-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-ocean-blue/10 backdrop-blur-sm p-4 rounded-lg border border-ocean-blue/20">
        <div className="flex items-center gap-2 mb-4">
          <Gamepad className="text-ocean-blue" size={20} />
          <h3 className="text-white font-medium">Take a Break? Play a Mini Game</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost"
                className="p-3 bg-ocean-blue/20 rounded-lg flex items-center justify-center gap-2 hover:bg-ocean-blue/30 transition-all duration-300 text-white"
              >
                Tic Tac Toe
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0F172A]/95 border border-ocean-blue/30 p-6 max-w-md">
              <h3 className="text-xl font-medium text-white mb-6 text-center">Tic Tac Toe</h3>
              <TicTacToe />
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost"
                className="p-3 bg-vivid-purple/20 rounded-lg flex items-center justify-center gap-2 hover:bg-vivid-purple/30 transition-all duration-300 text-white"
              >
                Memory Match
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0F172A]/95 border border-vivid-purple/30 p-6 max-w-md">
              <h3 className="text-xl font-medium text-white mb-6 text-center">Memory Match</h3>
              <MemoryGame />
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost"
                className="p-3 bg-magenta-pink/20 rounded-lg flex items-center justify-center gap-2 hover:bg-magenta-pink/30 transition-all duration-300 text-white"
              >
                Snake Game
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0F172A]/95 border border-magenta-pink/30 p-6 max-w-md">
              <h3 className="text-xl font-medium text-white mb-6 text-center">Snake Game</h3>
              <SnakeGame />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
