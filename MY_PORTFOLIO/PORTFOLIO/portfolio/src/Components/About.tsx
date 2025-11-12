import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces that users love to interact with.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every project.',
    },
  ];
   return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer with over 5 years of experience building web
              applications. I specialize in creating seamless user experiences with modern
              technologies like React, TypeScript, and Node.js.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source, or sharing knowledge with the developer community.
            </p>
          </div>
           <div className="relative">
            <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4">
                  5+
                </div>
                <div className="text-slate-300 text-xl">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

