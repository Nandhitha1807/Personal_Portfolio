import React from "react";
import ProfileImage from "../assets/nandhitha.png"; 
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden font-sans"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:gap-16 relative z-10">
        {/* Image Section */}
        <div className="mb-12 lg:mb-0 flex justify-center lg:justify-end lg:ml-auto">
        <div className="relative -translate-y-16"> {/* Move the image and animations upward */}
            {/* Animated rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-50 animate-spin-slow transition-opacity duration-300"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full opacity-40 group-hover:opacity-60 animate-spin-reverse transition-opacity duration-300"></div>

            <img
            src={ProfileImage}
            alt="Nandhitha"
            className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm relative z-10 transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-blue-500/30"
            />

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-300 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700 shadow-lg"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-1000 shadow-lg"></div>
        </div>
        </div>


        {/* Content Section */}
        <div className="text-center lg:text-left lg:w-2/3 space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Description */}
          <div className="relative">
            <p className="text-gray-300 text-lg lg:text-l leading-relaxed mb-8 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
              {/* <span className="text-2xl text-blue-400 font-semibold">Hi, I'm Nandhitha!</span> */}
              {/* <br /> */}
              I am a Computer Science Engineering student with hands-on experience in web development. I enjoy building responsive, user-friendly web applications and am passionate about expanding my skills in front-end, back-end, and AI/ML. I aim to apply my knowledge to real-world projects and contribute to innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Areas of Interest */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  Areas of Interest
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: "💻", text: "Web Development", color: "from-blue-400 to-blue-600" },
                    { icon: "🚀", text: "Full Stack Development", color: "from-purple-400 to-purple-600" },
                    { icon: "🧩", text: "Problem Solving", color: "from-pink-400 to-pink-600" },
                    { icon: "⚡", text: "Competitive Programming", color: "from-cyan-400 to-cyan-600" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/item">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-sm shadow-lg group-hover/item:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="group">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                </div>
                Hobbies & Interests
                </h3>
                <ul className="space-y-3">
                {[
                    { icon: "📚", text: "Reading Books", color: "from-blue-400 to-purple-600" },
                    { icon: "🎯", text: "Coding Challenges", color: "from-blue-400 to-purple-600" },
                    { icon: "🎮", text: "Gaming", color: "from-blue-400 to-purple-600" },
                    { icon: "🎵", text: "Music", color: "from-blue-400 to-purple-600" },
                    { icon: "✈️", text: "Traveling", color: "from-blue-400 to-purple-600" }
                ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/item">
                    <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-sm shadow-lg group-hover/item:scale-110 transition-transform`}>
                        {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-8">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Let's Connect
            </a>

            <a
              href="#projects"
              className="group relative overflow-hidden border-2 border-purple-400 text-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 backdrop-blur-sm"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
            <div className="flex justify-center items-center pt-8 border-t border-white/10 gap-40 -translate-x-55">
            {[
                { number: "50+", label: "Projects Built", color: "text-blue-400" },
                { number: "2+", label: "Years Coding", color: "text-purple-400" },
                { number: "∞", label: "Problems Solved", color: "text-pink-400" }
            ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform">
                <div className={`text-2xl lg:text-3xl font-bold ${stat.color} group-hover:animate-pulse`}>
                    {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
