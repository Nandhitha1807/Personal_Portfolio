import { useState, useEffect } from "react";

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Java Developer",
    "React Developer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className="text-center lg:text-left transform lg:translate-x-30 mt-16 lg:mt-32">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-400">
                Nandhitha
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-300 mb-6">
              I'm a{" "}
              <span className="text-blue-400 font-semibold">
                {roles[currentRole]}
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Passionate about creating beautiful, functional, and user-centered
              digital experiences. I combine creativity with technical expertise
              to build modern web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View My Work
              </button>

              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Let&apos;s Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                {/* GitHub */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn + Twitter remain same */}
            </div>
          </div>

          {/* Logo Section */}
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-end lg:-translate-x-30">
            <div className="relative">
              <div className="w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-7xl lg:text-8xl font-bold shadow-xl">
                N
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-lg rotate-12 opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 bg-blue-300 rounded-full opacity-70"></div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Home;
