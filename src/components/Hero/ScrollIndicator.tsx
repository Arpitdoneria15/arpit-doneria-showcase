
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" className="flex flex-col items-center text-sm text-white/70 hover:text-ocean-blue transition-colors">
        <span>Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
};

export default ScrollIndicator;
