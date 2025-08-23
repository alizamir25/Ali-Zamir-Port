
import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ali0786zamir@gmail.com',
      link: 'mailto:ali0786zamir@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 07404540656',
      link: 'tel:+4407404540656'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Birmingham, UK',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/alizamir25?tab=repositories', color: 'hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ali-zamir', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com', color: 'hover:text-sky-400' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neo-purple via-transparent to-neo-red animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shimmer-text">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Ready to collaborate on something amazing? Let's discuss your next project and bring innovative ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neo-red to-neo-purple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="neo-card rounded-2xl p-8 h-full">
              <h3 className="text-3xl font-bold text-gradient mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 
                             transition-all duration-300 group"
                  >
                    <div className="neo-button p-3 rounded-full group-hover:animate-pulse-glow">
                      <info.icon className="h-5 w-5 text-neo-red group-hover:text-neo-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                        {info.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-gradient transition-all duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-gradient mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`neo-button p-3 rounded-full ${social.color} transition-all duration-300 
                               hover:scale-110 hover:animate-pulse-glow group`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-8 p-6 glass-card rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-20'
          }`}>
            <form onSubmit={handleSubmit} className="neo-card rounded-2xl p-8 h-full">
              <h3 className="text-3xl font-bold text-gradient mb-8">
                Send Message
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground/90 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full glass-card rounded-lg px-4 py-3 text-white placeholder-gray-400 
                               border border-gray-600/50 focus:border-neo-red focus:outline-none 
                               transition-all duration-300 hover:bg-white/10"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/90 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full glass-card rounded-lg px-4 py-3 text-white placeholder-gray-400 
                               border border-gray-600/50 focus:border-neo-purple focus:outline-none 
                               transition-all duration-300 hover:bg-white/10"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground/90 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full glass-card rounded-lg px-4 py-3 text-white placeholder-gray-400 
                             border border-gray-600/50 focus:border-neo-red focus:outline-none 
                             transition-all duration-300 hover:bg-white/10"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground/90 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full glass-card rounded-lg px-4 py-3 text-white placeholder-gray-400 
                             border border-gray-600/50 focus:border-neo-purple focus:outline-none 
                             transition-all duration-300 hover:bg-white/10 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full neo-button py-4 rounded-lg font-semibold text-white 
                           hover:bg-gradient-to-r hover:from-neo-red/20 hover:to-neo-purple/20 
                           transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neo-red to-neo-purple opacity-0 
                                group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
