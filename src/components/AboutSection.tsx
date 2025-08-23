
import { useEffect, useState } from 'react';
import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Brain, label: 'AI Projects', value: '15+' },
    { icon: Code, label: 'Technologies', value: '20+' },
    { icon: Lightbulb, label: 'Solutions Built', value: '30+' },
    { icon: Rocket, label: 'Years Experience', value: '3+' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neo-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neo-red rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shimmer-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neo-red to-neo-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="neo-card rounded-2xl p-8 animate-glow">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
                Passionate AI & Software Engineer
              </h3>
              <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
                <p>
                  I'm Ali Ahmed Zamir, a dedicated AI and Software Engineer with a passion for 
                  creating innovative solutions that bridge the gap between artificial intelligence 
                  and practical software applications.
                </p>
                <p>
                  My journey in technology started with curiosity about how machines can learn 
                  and think. Today, I specialize in developing intelligent systems, machine 
                  learning algorithms, and scalable software architectures that solve real-world problems.
                </p>
                <p>
                  I believe in the power of clean code, elegant design, and the endless 
                  possibilities that emerge when creativity meets technology.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-20'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="neo-button p-4 rounded-full group-hover:animate-pulse-glow">
                      <stat.icon className="h-8 w-8 text-neo-red group-hover:text-neo-purple transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info card */}
            <div className="neo-card rounded-xl p-6 mt-6 animate-float">
              <h4 className="text-xl font-bold text-gradient mb-4">
                Currently Working On
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neo-red rounded-full animate-pulse"></div>
                  Advanced ML Model Optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neo-purple rounded-full animate-pulse"></div>
                  Full-Stack AI Applications
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neo-red rounded-full animate-pulse"></div>
                  Neural Network Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
