import React from 'react';
import { personalInfo, education, experience } from '../data/mockData';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
            <div className="w-12 h-0.5 bg-blue-400" />
            <span>Get To Know Me</span>
            <div className="w-12 h-0.5 bg-blue-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer dedicated to building innovative solutions
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-600/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Code2 className="w-8 h-8 text-blue-400" />
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {personalInfo.about}
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a student at BMS Institute of Technology & Management, I'm constantly expanding my knowledge in 
                software development, with a particular focus on the MERN stack and modern web technologies.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-gray-300 font-semibold">Projects</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm border border-cyan-600/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-300 font-semibold">Technologies</div>
              <div className="text-sm text-gray-400">Mastered</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                7.95
              </div>
              <div className="text-gray-300 font-semibold">CGPA</div>
              <div className="text-sm text-gray-400">Academic</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm border border-cyan-600/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-gray-300 font-semibold">Awards</div>
              <div className="text-sm text-gray-400">Won</div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-fade-in-left animation-delay-300">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-600/30 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    {edu.current && (
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono rounded-full border border-blue-600/30">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.field}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-mono">{edu.period}</span>
                    <span className="text-green-400 font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in-right animation-delay-300">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-600/30 transition-all duration-300 hover:translate-x-2"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{exp.role}</h4>
                  <p className="text-cyan-500 font-semibold mb-2">{exp.type}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <span className="text-gray-500 text-sm font-mono">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;