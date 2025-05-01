
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Study Buddy",
      description: "A web-based platform with the CSE department to centralize practical exam resources, improving student access to subject outlines, viva questions, and supplementary materials.",
      tech: ["HTML", "CSS", "JavaScript", "JWT"],
      highlights: [
        "Designed interactive UI enhancing navigation efficiency by 85% for students.",
        "JWT authentication for secure, role-based user access."
      ],
      sourceUrl: "#",
      liveUrl: "",
    },
    {
      title: "Inquiry Web",
      description: "Developed a Quora-like platform for posting questions, sharing knowledge, and community interaction, boosting user engagement by 35%.",
      tech: ["React.js", "Tailwind CSS", "TypeScript", "Firebase"],
      highlights: [
        "Built a scalable, secure, and responsive application, improving performance by 50%.",
        "Leveraged tools like Git, GitHub, and Visual Studio Code, increasing development efficiency by 25%."
      ],
      sourceUrl: "https://github.com/Arpitdoneria15/Quora-Clone",
      liveUrl: "",
    },
    {
      title: "Vines & Co",
      description: "A visually appealing website theme with GSAP and Locomotive Scroll animations, enhancing the presentation of wines and boosting user engagement.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      highlights: [
        "Streamlined the wine selection process with an intuitive, user-friendly interface.",
        "Reduced navigation time by 45% and enhanced user experience."
      ],
      sourceUrl: "",
      liveUrl: "https://Arpitdoneria159.github.io/Vines-&-Co/",
    },
    {
      title: "Sociogram",
      description: "Developed a social media platform with real-time communication, enabling seamless user interactions.",
      tech: ["Next.js", "React", "Redux", "HTML", "CSS"],
      highlights: [
        "Server-side rendering for faster load times and better SEO optimization.",
        "Enhanced UI/UX with efficient state management."
      ],
      sourceUrl: "https://github.com/Arpitdoneria15/Sociogram",
      liveUrl: "https://sociogram-flax.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="project-card h-full flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <p className="mb-4">{project.description}</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
              
              <div className="flex gap-4 mt-auto">
                {project.sourceUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
