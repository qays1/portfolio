"use client";

import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [role, setRole] = useState("Engineer");
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const roles = ["Engineer", "Developer", "Gamer"];
    let index = 0;
    const interval = setInterval(() => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/2792370-hd_1920_1080_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-xl tracking-wide">
          Hi&sbquo; I&apos;m <span className="text-gradient">Qays</span>
        </h1>
        <p className="text-xl font-medium drop-shadow-md mb-4">
          An AI <span className="text-gradient">{role}</span>
        </p>
        <p className="text-gray-200 max-w-2xl drop-shadow-md">
          Building smarter systems in Computer Vision&sbquo; Large Language Models&sbquo; and Chatbots.
        </p>

        {/* Download CV Button */}
        <button
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
          onClick={() => window.open("/Qays_CV.pdf", "_blank", "noopener,noreferrer")}
        >
          Download CV
        </button>
      </div>

      {/* Slide-In Panels */}
      {/* Projects Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-80 glass-panel text-white transform ${
          showProjects ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        onMouseLeave={() => setShowProjects(false)}
      >
        <h2 className="text-2xl font-bold p-4 border-b border-gray-600">
          Projects
        </h2>
        <ul className="p-4 space-y-3">
          <li className="hover:text-blue-400 transition">
            <a href="/projects/supernova">Project 1: Supernova</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="/projects/mail-cat">Project 2: Mail-Cat.cc</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="/projects/waste-management">Project 3: Trash Management</a>
          </li>
        </ul>
      </div>

      {/* Contact Panel */}
      <div
        className={`absolute top-0 left-0 h-full w-80 glass-panel text-white transform ${
          showContact ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        onMouseLeave={() => setShowContact(false)}
      >
        <h2 className="text-2xl font-bold p-4 border-b border-gray-600">
          Contact Me
        </h2>
        <ul className="flex space-x-4 p-4">
          <li>
            <a href="mailto:qays@domain.com" className="hover:text-blue-400">
              <FaEnvelope size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/qays/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/qays1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </div>

      {/* Trigger Buttons */}
      <div className="absolute top-10 flex justify-between w-full px-6 z-20">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
          onMouseEnter={() => setShowContact(true)}
        >
          Contact Me
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700"
          onMouseEnter={() => setShowProjects(true)}
        >
          Projects
        </button>
      </div>
    </div>
  );
}
