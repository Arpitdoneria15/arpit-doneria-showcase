
interface BioProps {
  isVisible: boolean;
}

const Bio = ({ isVisible }: BioProps) => {
  return (
    <div className={`max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-r from-ocean-blue/10 to-vivid-purple/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:from-ocean-blue/15 hover:to-vivid-purple/15 transition-all duration-500 shadow-lg transform">
        <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4 animate-fade-in leading-relaxed">
          I'm a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue via-vivid-purple to-magenta-pink">Full Stack Developer</span> with a passion for building responsive and efficient web applications. 
          Currently pursuing my B.Tech in Computer Science & Engineering, I focus on creating user-friendly solutions using modern technologies.
        </p>
        <p className="text-base sm:text-lg text-white/80 animate-fade-in leading-relaxed">
          My expertise spans across front-end technologies like React, back-end with Node.js, and database management with SQL and MongoDB. 
          I enjoy solving complex problems and continuously learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default Bio;
