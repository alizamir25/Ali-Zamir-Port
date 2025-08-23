
import { useEffect, useState } from 'react';
import { Brain, Code2, Database, Cpu, Globe, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-neo-red to-pink-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 80 },
        { name: 'Natural Language Processing', level: 85 }
      ]
    },
    {
      title: 'Software Development',
      icon: Code2,
      color: 'from-neo-purple to-blue-500',
      skills: [
        { name: 'JavaScript/TypeScript', level: 92 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Go', level: 75 }
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Docker', level: 88 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: GitBranch,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Linux', level: 90 },
        { name: 'Nginx', level: 80 },
        { name: 'Monitoring Tools', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neo-red via-neo-purple to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shimmer-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neo-red to-neo-purple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? categoryIndex % 2 === 0 
                    ? 'animate-slide-in-left opacity-100' 
                    : 'animate-slide-in-right opacity-100'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="neo-card rounded-2xl p-6 h-full group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`neo-button p-3 rounded-full bg-gradient-to-r ${category.color} group-hover:animate-pulse-glow`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground/90 group-hover/skill:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` 
                            ? 'text-neo-red scale-110' 
                            : 'text-muted-foreground'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology badges */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PyTorch',
              'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground/90 
                         hover:text-foreground hover:scale-110 transition-all duration-300 cursor-pointer
                         hover:bg-gradient-to-r hover:from-neo-red/20 hover:to-neo-purple/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
