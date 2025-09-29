import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: 85, years: "2+", icon: "☕" },
        { name: "Python", level: 80, years: "1+", icon: "🐍" },
        { name: "C", level: 75, years: "1+", icon: "🔧" },
        { name: "C++", level: 78, years: "1+", icon: "⚡" },
        { name: "JavaScript", level: 82, years: "1+", icon: "🟨" }
      ]
    },
    web: {
      title: "Web Technologies",
      icon: "🌐",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "HTML", level: 90, years: "2+", icon: "📄" },
        { name: "CSS", level: 85, years: "2+", icon: "🎨" },
        { name: "JavaScript", level: 82, years: "1+", icon: "⚡" },
        { name: "React.js", level: 80, years: "1+", icon: "⚛️" },
        { name: "Node.js", level: 75, years: "1+", icon: "🟢" }
      ]
    },
    database: {
      title: "Database Systems",
      icon: "🗄️",
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "MySQL", level: 78, years: "1+", icon: "🐬" },
        { name: "MongoDB", level: 72, years: "1+", icon: "🍃" }
      ]
    },
    tools: {
      title: "Tools & IDEs",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "VS Code", level: 90, years: "2+", icon: "💻" },
        { name: "CodeBlocks", level: 75, years: "1+", icon: "🔨" },
        { name: "Docker", level: 70, years: "1+", icon: "🐳" },
        { name: "Postman", level: 75, years: "1+", icon: "📮" },
        { name: "Git & GitHub", level: 80, years: "1+", icon: "📦" },
        { name: "Figma", level: 68, years: "1+", icon: "🎯" }
      ]
    }
  };

  const allSkills = [
    ...skillsData.programming.skills.map(s => ({ ...s, category: "programming" })),
    ...skillsData.web.skills.map(s => ({ ...s, category: "web" })),
    ...skillsData.database.skills.map(s => ({ ...s, category: "database" })),
    ...skillsData.tools.skills.map(s => ({ ...s, category: "tools" }))
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") return allSkills;
    return allSkills.filter(skill => skill.category === activeCategory);
  };

  const getCategoryColor = (category) => {
    const colors = {
      programming: "from-blue-500 to-cyan-500",
      web: "from-purple-500 to-pink-500",
      database: "from-green-500 to-blue-500",
      tools: "from-orange-500 to-red-500"
    };
    return colors[category];
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden font-sans"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency across various technologies
          </p>

          {/* Skill Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {Object.entries(skillsData).map(([key, category]) => (
              <div
                key={key}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`text-5xl mb-3 transform group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <p className="text-3xl font-bold text-white mb-1">{category.skills.length}</p>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20"
            }`}
          >
            All Skills
          </button>
          
          {Object.entries(skillsData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{skill.years} years</p>
                    </div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-3">
                  {/* Percentage Display */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-medium">Proficiency</span>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${getCategoryColor(skill.category)} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800/50 rounded-full h-4 overflow-hidden border border-gray-700">
                      <div
                        className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    
                    {/* Glowing effect */}
                    <div
                      className={`absolute top-0 h-4 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full opacity-50 blur-md transition-all duration-1000 group-hover:opacity-75`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Skill Level Label */}
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;