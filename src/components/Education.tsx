
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      institution: "Bhagwan Parshuram Institute Of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2021 - 2025",
      grade: "CGPA: 8.20/10.0"
    }
  ];
  
  const certifications = [
    "GOOGLE CLOUD LABS - Introduction to generative AI",
    "SCALER - Data structures in C++",
    "GREAT LEARNING - Project Management With JIRA",
    "UDEMY - Full Stack Web Development"
  ];
  
  const achievements = [
    "Flipkart GRiD 5.0 - Competed among 210,762 learners across the nation. Cleared Round 1 and Qualified for Round 2.",
    "LeetCode - Ranked in the top 8% globally with a 1730+ rating. Achieved Rank 1,248 out of 33,120 in Biweekly Contest 146.",
    "JEE ADVANCED – Ranked in the top 4000 students in 2022 & secured a seat in IIT HY"
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-heading">Education</h2>
      
      <div className="space-y-12">
        <div>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-muted-foreground font-medium md:text-right">
                    {edu.period}
                  </p>
                </div>
                <p>{edu.degree}</p>
                <p className="text-muted-foreground">{edu.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
