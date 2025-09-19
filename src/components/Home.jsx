import React from "react";
const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center">
      <img src={profilePic} alt="Nandhitha" className="w-40 h-40 rounded-full mb-4" />
      <h1 className="text-4xl font-bold">Hi, I’m Nandhitha</h1>
      <p className="text-xl text-gray-600 mt-2">Computer Science Engineering Student | Aspiring Developer</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Contact Me
      </a>
    </section>
  );
};

export default Home;
