import React, { useState } from 'react';
import { skills } from '../data/mockData';
import { Code, Database, Cpu, Terminal, Wrench, BookOpen, Users, UsersRound, Lightbulb, Shuffle } from 'lucide-react';

const Skills3D = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Terminal },
    { id: 'backend', name: 'Backend', icon: Cpu },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'language', name: 'Languages', icon: Code },
    { id: 'tools', name: 'Tools', icon: Wrench },
    { id: 'cs', name: 'CS Fundamentals', icon: BookOpen }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills.technical 
    : skills.technical.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'from-blue-600 to-blue-500',
      backend: 'from-cyan-600 to-pink-500',
      database: 'from-green-500 to-emerald-500',
      language: 'from-yellow-500 to-orange-500',
      tools: 'from-red-500 to-rose-500',
      cs: 'from-indigo-500 to-violet-500'
    };
    return colors[category] || 'from-blue-600 to-cyan-600';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
            <div className="w-12 h-0.5 bg-blue-400" />
            <span>Technical Expertise</span>
            <div className="w-12 h-0.5 bg-blue-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-300">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-blue-600/50 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-600/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              {/* Progress Bar with 3D effect */}
              <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{ 
                    width: `${skill.level}%`,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
                </div>
              </div>

              {/* Skill category badge */}
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-mono bg-white/5 text-gray-400 rounded-full border border-white/10">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="animate-fade-in-up animation-delay-500">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Soft <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.soft.map((skill, index) => {
              const iconMap = {
                'Leadership': Users,
                'Teamwork': UsersRound,
                'Problem Solving': Lightbulb,
                'Adaptability': Shuffle
              };
              const IconComponent = iconMap[skill.name] || Users;
              
              return (
                <div
                  key={skill.name}
                  className="group bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-blue-600/30 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills3D;