
import { useEffect, useState } from 'react';
import { Crown, Bot, Code, Gamepad2, Languages } from 'lucide-react';

const HobbiesSection = () => {
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

    const section = document.getElementById('hobbies');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const hobbies = [
    { icon: Crown, title: 'Chess Master', description: 'Strategic thinking through competitive chess' },
    { icon: Bot, title: 'Discord Bots', description: 'AI image generation bots for communities' },
    { icon: Code, title: '3D Modeling', description: 'Creating in Blender and other 3D software' },
    { icon: Gamepad2, title: 'Game Modding', description: 'Custom characters for YOMI Hustle, Skyrim & Minecraft mods' }
  ];

  return (
    <section id="hobbies" className="py-20 relative overflow-hidden">
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
            Beyond the Code
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When I'm not crafting AI solutions, I explore diverse creative pursuits that fuel my innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neo-red to-neo-purple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-float-gentle"
                style={{ 
                  animationDelay: `${index * 0.8}s`,
                  animationDuration: `${8 + index * 2}s`
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="neo-button p-4 rounded-full group-hover:animate-pulse-glow">
                    <hobby.icon className="h-8 w-8 text-neo-purple group-hover:text-neo-red transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gradient mb-2">
                  {hobby.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Creative Pursuits */}
            <div className="neo-card rounded-xl p-6">
              <h4 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Creative & Technical Hobbies
              </h4>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-neo-red rounded-full mt-2 animate-pulse"></div>
                  <span>Video editing with DaVinci Resolve for personal memories and friend projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-neo-purple rounded-full mt-2 animate-pulse"></div>
                  <span>Game modding including custom characters for YOMI Hustle on Steam</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-neo-red rounded-full mt-2 animate-pulse"></div>
                  <span>Creating mods for popular games like Skyrim and Minecraft</span>
                </li>
              </ul>
            </div>

            {/* Language Learning */}
            <div className="neo-card rounded-xl p-6">
              <h4 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                <Languages className="h-6 w-6" />
                Language Learning Journey
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Arabic</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-neo-red rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-neo-red rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Japanese</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-neo-purple rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-neo-purple rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Currently expanding my linguistic horizons through self-study and immersion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
