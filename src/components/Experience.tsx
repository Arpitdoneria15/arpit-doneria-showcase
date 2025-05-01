
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Celebal Technologies",
      location: "Noida, Uttar Pradesh",
      position: "React JS Developer",
      period: "May 2024 - August 2024",
      responsibilities: [
        "Improved software and web interfaces for Celebal subsidiaries, reducing clutter by 30% and making navigation easier.",
        "Built features with React.js and Tailwind CSS, ensuring smooth performance across different devices.",
        "Assisted in developing and maintaining React applications with a focus on front-end functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container bg-secondary/30">
      <h2 className="section-heading">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.location}
                  </p>
                </div>
                <p className="text-muted-foreground font-medium md:text-right">
                  {exp.period}
                </p>
              </div>
              
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
