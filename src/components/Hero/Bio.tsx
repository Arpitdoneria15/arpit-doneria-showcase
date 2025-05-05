
interface BioProps {
  isVisible: boolean;
}

const Bio = ({ isVisible }: BioProps) => {
  return (
    <div className={`max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="text-lg text-white/70 my-6 animate-fade-in leading-relaxed">
        I build responsive web applications with modern technologies.
        Passionate about creating efficient, user-friendly solutions.
      </p>
    </div>
  );
};

export default Bio;
