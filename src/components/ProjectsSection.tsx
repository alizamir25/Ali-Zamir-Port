
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Zap, Brain, Globe, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Chat Assistant',
      description: 'Intelligent conversational AI with natural language processing capabilities, built with advanced transformer models and real-time learning.',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'WebSocket'],
      icon: Brain,
      color: 'from-neo-red to-pink-500',
      features: ['Real-time conversations', 'Context awareness', 'Multi-language support', 'Custom training']
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time data visualization platform with predictive analytics, machine learning insights, and interactive reporting.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      icon: Zap,
      color: 'from-neo-purple to-blue-500',
      features: ['Predictive modeling', 'Real-time updates', 'Custom visualizations', 'Export capabilities']
    },
    {
      title: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture with containerization, auto-scaling, and comprehensive monitoring solutions.',
      tech: ['Go', 'Docker', 'Kubernetes', 'Redis', 'gRPC'],
      icon: Globe,
      color: 'from-green-500 to-teal-500',
      features: ['Auto-scaling', 'Load balancing', 'Health monitoring', 'CI/CD pipeline']
    },
    {
      title: 'Mobile AI Application',
      description: 'Cross-platform mobile app with on-device AI capabilities, computer vision, and seamless offline functionality.',
      tech: ['React Native', 'TensorFlow Lite', 'Firebase', 'TypeScript'],
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      features: ['Offline AI', 'Computer vision', 'Real-time processing', 'Cloud sync']
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neo-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neo-red rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shimmer-text">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Innovative solutions that showcase the intersection of AI, software engineering, and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neo-red to-neo-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Project showcase */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? index % 2 === 0 
                    ? 'animate-slide-in-left opacity-100' 
                    : 'animate-slide-in-right opacity-100'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className={`neo-card rounded-2xl p-6 h-full group hover:scale-105 transition-all duration-500 relative overflow-hidden ${
                activeProject === index ? 'animate-glow' : ''
              }`}>
                {/* Project header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`neo-button p-3 rounded-full bg-gradient-to-r ${project.color} group-hover:animate-pulse-glow`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient group-hover:shimmer-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Project description */}
                <p className="text-foreground/90 mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gradient mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} animate-pulse`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="glass-card px-3 py-1 text-xs font-medium text-foreground/90 rounded-full
                                 group-hover:bg-background/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 neo-button px-4 py-2 rounded-lg 
                                   hover:bg-gradient-to-r hover:from-neo-red/20 hover:to-neo-purple/20 
                                   transition-all duration-300 group/btn">
                    <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg 
                                   hover:bg-white/20 transition-all duration-300 group/btn">
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    <span>Demo</span>
                  </button>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional projects teaser */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <div className="glass-card rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-foreground/90 mb-6">
              I'm constantly working on new and exciting projects. 
              <br />Stay tuned for more innovative solutions!
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-neo-red to-neo-purple rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
