
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A] relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-soft-purple/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-heading text-white mb-2">Get In Touch</h2>
          <p className="text-white/60 max-w-xl mb-12">I'm always open to discussing new projects, opportunities or partnerships. Feel free to reach out!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="overflow-hidden border-none shadow-lg bg-ocean-blue/10 backdrop-blur-sm border border-ocean-blue/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <a href="mailto:arpitpandat504@gmail.com" className="text-white hover:text-ocean-blue transition-colors">
                          arpitpandat504@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Phone</p>
                        <a href="tel:+919654219626" className="text-white hover:text-ocean-blue transition-colors">
                          +91 9654219626
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0">
                        <Linkedin size={18} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/arpit-doneria/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-ocean-blue transition-colors"
                        >
                          Arpit Doneria
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ocean-blue/20 flex items-center justify-center text-ocean-blue shrink-0">
                        <Github size={18} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">GitHub</p>
                        <a 
                          href="https://github.com/Arpitdoneria159" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-ocean-blue transition-colors"
                        >
                          Arpitdoneria159
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-ocean-blue/10 backdrop-blur-sm p-6 rounded-lg border border-ocean-blue/20">
                <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
                <p className="text-white/60 mb-4">Download my resume to learn more about my experience, education, and skills.</p>
                <Button asChild className="bg-ocean-blue hover:bg-ocean-blue/90">
                  <a href="/resume.pdf" download="Arpit_Doneria_Resume.pdf" className="flex items-center gap-2">
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="overflow-hidden border-none shadow-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-white/80">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-white/80">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-white/80">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-ocean-blue hover:bg-ocean-blue/90 group">
                    <span>Send Message</span>
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
