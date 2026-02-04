import React from 'react';
import { achievements } from '../data/mockData';
import { Trophy, Award, Medal, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const getIcon = (iconName) => {
    const icons = {
      Trophy: Trophy,
      Award: Award,
      Medal: Medal
    };
    return icons[iconName] || Trophy;
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
            <div className="w-12 h-0.5 bg-blue-400" />
            <span>Recognition</span>
            <div className="w-12 h-0.5 bg-blue-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Awards</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition for innovation, dedication, and excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-blue-600" />

            {/* Achievement items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = getIcon(achievement.icon);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={achievement.id}
                    className={`relative flex items-center gap-8 animate-fade-in-up ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${
                      isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20">
                        {/* Date badge */}
                        <div className={`inline-block mb-3 px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 text-sm font-mono rounded-full border border-blue-600/30`}>
                          {achievement.date}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {achievement.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 mb-3 leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Award */}
                        <div className="flex items-center gap-2 text-cyan-500">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">{achievement.award}</span>
                        </div>
                      </div>
                    </div>

                    {/* Icon in center */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50 border-4 border-[#0f0f1a] group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for non-center layouts */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;