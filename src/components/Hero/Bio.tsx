
interface BioProps {
  isVisible: boolean;
}

const Bio = ({ isVisible }: BioProps) => {
  return (
    <div className={`max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="text-lg text-white/80 my-6 animate-fade-in leading-relaxed">
        I'm a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue via-vivid-purple to-magenta-pink">Full Stack Developer</span> with a passion for building responsive and efficient web applications. 
        Currently pursuing my B.Tech in Computer Science & Engineering, I focus on creating user-friendly solutions using modern technologies.
      </p>
      <p className="text-lg text-white/70 mb-6 animate-fade-in leading-relaxed">
        My expertise spans across front-end technologies like React, back-end with Node.js, and database management with SQL and MongoDB. 
        I enjoy solving complex problems and continuously learning new technologies.
      </p>
    </div>
  );
};

export default Bio;
