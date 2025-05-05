
interface BackgroundEffectsProps {
  mousePosition: {
    x: number;
    y: number;
  };
}

const BackgroundEffects = ({ mousePosition }: BackgroundEffectsProps) => {
  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Interactive gradient blobs that follow mouse */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-ocean-blue/10 blur-[120px] opacity-70"
        style={{
          left: `${mousePosition.x * 10}%`,
          top: `${mousePosition.y * 50}%`,
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-soft-purple/30 blur-[100px] opacity-60"
        style={{
          right: `${(1 - mousePosition.x) * 5}%`,
          bottom: `${(1 - mousePosition.y) * 30}%`,
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: `translate(40%, 40%)`,
        }}
      ></div>
      
      {/* Fixed animated blobs for background depth */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ocean-blue/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-soft-pink/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-soft-blue/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </>
  );
};

export default BackgroundEffects;
