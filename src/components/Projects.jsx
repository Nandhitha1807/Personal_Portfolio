import React, { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Deep Learning COVID-19 & Pneumonia Detection",
      category: "ai",
      description: "Deep learning-based detection system for COVID-19 and pneumonia using chest X-ray images with high accuracy classification.",
      longDescription: "Developed an advanced deep learning model to detect COVID-19 and pneumonia from chest X-ray images. The system uses convolutional neural networks (CNN) to analyze medical images and provide accurate diagnoses. This project demonstrates the application of AI in healthcare, helping medical professionals make faster and more accurate diagnoses.",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "OpenCV"],
      features: [
        "Automated Disease Detection",
        "High Accuracy Classification",
        "Medical Image Processing",
        "Deep Neural Network Architecture",
        "Data Augmentation Techniques",
        "Model Performance Visualization"
      ],
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Nandhitha1807/Covid19_Pnuemonia_Prediction",
      status: "Ongoing",
      duration: "In Progress",
      teamSize: "Solo Project"
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "web",
      description: "Modern personal portfolio website built with React.js and Tailwind CSS showcasing skills, projects, and professional experience.",
      longDescription: "Designed and developed a modern, responsive portfolio website using React.js and Tailwind CSS. The website features smooth animations, interactive components, project showcases, and optimized performance for all devices. Built with component-based architecture for maintainability and scalability.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      features: [
        "Responsive Design",
        "Interactive Animations",
        "Project Showcase Section",
        "Skills & Experience Display",
        "Performance Optimized",
        "Modern UI/UX Design"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Nandhitha1807/Portfolio",
      status: "Ongoing",
      duration: "In Progress",
      teamSize: "Solo Project"
    },
    {
      id: 3,
      title: "Event Management Website",
      category: "web",
      description: "User-friendly event management platform for organizing and managing events with comprehensive features for organizers and attendees.",
      longDescription: "Led the development of an innovative event management website using HTML, CSS, and JavaScript. The platform provides a comprehensive solution for event organizers and attendees, featuring intuitive navigation, event registration, scheduling, and management capabilities. The website demonstrates strong front-end development skills and user experience design.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Event Registration System",
        "Event Scheduling & Calendar",
        "User-Friendly Interface",
        "Responsive Design",
        "Event Details Management",
        "Interactive UI Components"
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "2 months",
      teamSize: "Solo Project"
    },
    {
      id: 4,
      title: "AI Chatbot Web Application",
      category: "web",
      description: "Interactive AI-based chatbot providing instant responses to user queries with human-like conversation capabilities.",
      longDescription: "Led the development of an interactive AI-based chatbot web application using HTML, CSS, and JavaScript. The chatbot simulates human-like conversations and provides instant responses to user queries through an intuitive interface. This project showcases the integration of front-end technologies with AI logic for real-time interaction and enhanced user engagement.",
      technologies: ["HTML5", "CSS3", "JavaScript", "AI Logic"],
      features: [
        "Human-Like Conversations",
        "Instant Response System",
        "User-Friendly Interface",
        "Real-Time Interaction",
        "Message History Display",
        "Responsive Chat Design"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "1.5 months",
      teamSize: "Solo Project"
    },
    {
      id: 5,
      title: "Landing Page",
      category: "web",
      description: "Professionally designed landing page with modern aesthetics and responsive layout for optimal user experience.",
      longDescription: "Created an attractive and responsive landing page using HTML and CSS. The design focuses on user engagement with clean aesthetics, intuitive navigation, and effective call-to-action elements. This project demonstrates proficiency in front-end design principles and responsive web development.",
      technologies: ["HTML5", "CSS3"],
      features: [
        "Modern Design Aesthetics",
        "Fully Responsive Layout",
        "Smooth Animations",
        "Call-to-Action Elements",
        "Cross-Browser Compatible",
        "Optimized Performance"
      ],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Nandhitha1807/Landing_Page",
      status: "Completed",
      duration: "2 weeks",
      teamSize: "Solo Project"
    },
    {
      id: 6,
      title: "Calculator Application",
      category: "web",
      description: "Functional calculator web application with clean interface and essential mathematical operations.",
      longDescription: "Developed a fully functional calculator application using HTML, CSS, and JavaScript. The calculator features a clean, intuitive interface and performs all basic mathematical operations with precision. This project demonstrates strong JavaScript programming skills and understanding of DOM manipulation.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Basic Mathematical Operations",
        "Clean User Interface",
        "Keyboard Support",
        "Responsive Design",
        "Error Handling",
        "Clear & Delete Functions"
      ],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=400&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Nandhitha1807/Calculator",
      status: "Completed",
      duration: "1 week",
      teamSize: "Solo Project"
    }
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: "📁" },
    { key: "web", label: "Web Development", icon: "🌐" },
    { key: "ai", label: "AI & Deep Learning", icon: "🤖" }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === "all") return projectsData;
    return projectsData.filter(project => project.category === activeFilter);
  };

  const getTechColor = (tech) => {
    const colors = {
      "React.js": "bg-cyan-500/20 text-cyan-300",
      "JavaScript": "bg-yellow-500/20 text-yellow-300",
      "HTML5": "bg-red-500/20 text-red-300",
      "CSS3": "bg-purple-500/20 text-purple-300",
      "Tailwind CSS": "bg-teal-500/20 text-teal-300",
      "Python": "bg-blue-500/20 text-blue-300",
      "TensorFlow": "bg-orange-500/20 text-orange-300",
      "Keras": "bg-red-600/20 text-red-400",
      "Deep Learning": "bg-indigo-500/20 text-indigo-300",
      "CNN": "bg-purple-600/20 text-purple-400",
      "OpenCV": "bg-green-500/20 text-green-300",
      "AI Logic": "bg-pink-500/20 text-pink-300"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300";
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === "Completed" ? "bg-green-500/20 text-green-300" : "bg-orange-500/20 text-orange-300"
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Duration</h4>
                <p className="text-white font-semibold">{project.duration}</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Team Size</h4>
                <p className="text-white font-semibold">{project.teamSize}</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Category</h4>
                <p className="text-white font-semibold capitalize">{project.category === "ai" ? "AI & Deep Learning" : "Web Development"}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.demoUrl}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                🚀 View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                📦 View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my development projects demonstrating technical skills, problem-solving abilities, and creative solutions
          </p>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">{projectsData.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">{projectsData.filter(p => p.status === "Completed").length}</div>
              <div className="text-gray-400">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">{Array.from(new Set(projectsData.flatMap(p => p.technologies))).length}</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                activeFilter === category.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {getFilteredProjects().map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Completed" ? "bg-green-500/20 text-green-300" : "bg-orange-500/20 text-orange-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-500/20 text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>⏱️ {project.duration}</span>
                  <span>👥 {project.teamSize}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                  >
                    📖 View Details
                  </button>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="flex-1 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-lg font-semibold text-sm text-center transition-all duration-300"
                    >
                      🚀 Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg font-semibold text-sm text-center transition-all duration-300"
                    >
                      📦Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {getFilteredProjects().length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try selecting a different category to see more projects.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;