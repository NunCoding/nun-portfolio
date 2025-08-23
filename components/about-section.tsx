import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Journey steps data
  const journeySteps = [
    {
      year: "2022",
      title: "Started Learning",
      description:
        "Discovered web development during college and quickly grew passionate about coding. Spent time experimenting with HTML, CSS, and JavaScript to build small projects and understand the basics.",
      color: "bg-chart-1",
    },
    {
      year: "2023",
      title: "First Projects",
      description: "Built my first responsive websites and simple applications, applying what I had learned in real-world projects. Gained confidence in HTML, CSS, and JavaScript while experimenting with design and user experience.",
      color: "bg-chart-2",
    },
    {
      year: "2024",
      title: "Professional Growth",
      description: "Specialized in the React ecosystem and modern JavaScript, focusing on building scalable, maintainable applications. Improved problem-solving skills, collaborated on real projects, and stayed current with industry best practices.",
      color: "bg-chart-3",
    },
    {
      year: "2025",
      title: "Current Focus",
      description: "Dedicated to building accessible, performant web applications that deliver great user experiences. Exploring advanced frontend patterns, contributing to open source, and continuously improving as a developer.",
      color: "bg-primary",
    },
  ];

  const skills = [
    "Nuxt.js",
    "Vue.js",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Laravel",
    "Git",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="about"
        ref={sectionRef}
        className="py-16 px-4 max-w-4xl mx-auto text-center"
      >
        <div
          className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with 1.5+ years of experience creating
            modern, responsive web applications that deliver exceptional user
            experiences.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section
        className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-sans font-bold text-center mb-12 text-foreground">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-2xl h-full bg-border hidden md:block"></div>

            <div className="space-y-8 md:space-y-12">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 max-w-lg">
                    <Card className="shadow-md border-4 border-dashed hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-3 h-3 rounded-full ${step.color}`}
                          ></div>
                          <span className="text-sm font-medium text-accent font-sans">
                            {step.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-sans font-semibold mb-2 text-card-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block">
                    <div
                      className={`w-4 h-4 rounded-full ${step.color} border-4 border-background shadow-md`}
                    ></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 max-w-md hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Personal Statement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-sans font-bold mb-6 text-foreground">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 border-2 border-dashed rounded-lg text-sm text-gray-600 hover:bg-accent/80 hover:text-white transition-colors cursor-default user-select-none"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Statement */}
            <div>
              <h3 className="text-2xl font-sans font-bold mb-6 text-foreground">
                What Drives Me
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started my journey in web development during college, where I
                  discovered my passion for creating digital experiences that
                  make a difference. What began as curiosity about how websites
                  work has evolved into a career focused on building modern,
                  accessible applications.
                </p>
                <p>
                  I specialize in React ecosystem and modern JavaScript, with a
                  strong eye for design and user experience. I believe in
                  writing clean, maintainable code and staying current with the
                  latest industry trends and best practices.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open source projects, or sharing
                  knowledge with the developer community through blog posts and
                  mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
