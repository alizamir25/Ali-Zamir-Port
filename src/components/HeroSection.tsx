import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Zap, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titles = ['AI Engineer', 'Software Developer', 'Tech Innovator', 'Problem Solver'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleViewWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Reset animation after it completes and navigate (increased timing)
    setTimeout(() => {
      setIsAnimating(false);
      // TODO: Add navigation to GitHub here
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3500);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-neo-red to-neo-purple rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(255, 8, 68, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
          transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Button animation particles */}
      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: '50%',
                top: '60%',
                backgroundColor: Math.random() > 0.5 ? '#ff0844' : '#8b5cf6',
                animationDelay: `${Math.random() * 0.8}s`,
                animationDuration: '3s',
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="animate-slide-up">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block shimmer-text">Ali Ahmed Zamir</span>
          </h1>

          {/* Animated title */}
          <div className="mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-gradient transition-all duration-500 ease-in-out">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto animate-slide-up">
            Crafting intelligent solutions with cutting-edge AI and software engineering. 
            Transforming ideas into powerful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <button
              onClick={handleViewWorkClick}
              className={`neo-button px-8 py-4 rounded-full text-lg font-semibold text-white 
                       hover:text-neo-red transition-all duration-500 group relative overflow-hidden
                       ${isAnimating ? 'animate-button-3d' : ''}`}
              style={{
                transform: isAnimating ? 'perspective(1000px) rotateX(15deg) rotateY(15deg) scale(1.5)' : '',
                boxShadow: isAnimating ? '0 0 50px rgba(255, 8, 68, 0.8), 0 0 100px rgba(139, 92, 246, 0.6)' : '',
                transition: isAnimating ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                View My Work
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r from-neo-red to-neo-purple transition-opacity duration-500 ${isAnimating ? 'opacity-30 animate-pulse' : 'opacity-0 group-hover:opacity-20'}`}></div>
            </button>
            
            <a
              href="#contact"
              className="glass-card px-8 py-4 rounded-full text-lg font-semibold text-white 
                       hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 animate-pulse" />
                Let's Connect
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered properly */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Zap className="h-12 w-12 text-neo-purple opacity-30" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Code2 className="h-16 w-16 text-neo-red opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
