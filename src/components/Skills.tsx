
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["React JS", "Node JS", "HTML", "CSS", "Git"]
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "Drizzle"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-secondary/30">
      <h2 className="section-heading">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
