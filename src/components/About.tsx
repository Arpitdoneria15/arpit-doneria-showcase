
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="section-container bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a <span className="highlight">Full Stack Developer</span> with a passion for building responsive and efficient web applications. Currently pursuing my B.Tech in Computer Science & Engineering, I focus on creating user-friendly solutions using modern technologies.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise spans across front-end technologies like React, back-end with Node.js, and database management with SQL and MongoDB. I enjoy solving complex problems and continuously learning new technologies.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="mailto:arpitpandat504@gmail.com" className="contact-link text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              arpitpandat504@gmail.com
            </a>
            <a href="tel:+919654219626" className="contact-link text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 9654219626
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/80 blur-xl opacity-30"></div>
            <div className="relative w-full h-full overflow-hidden rounded-3xl border-4 border-background shadow-xl">
              <AspectRatio ratio={1/1}>
                <img 
                  src="/lovable-uploads/7e6d6647-2429-49b7-b75e-00bea9031a8b.png" 
                  alt="Arpit Doneria" 
                  className="object-cover object-center w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
