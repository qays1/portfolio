"use client";  // This directive is required for hooks like useEffect and useState

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";

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
    <>
      <Head>
        <title>Qays - AI Engineer Portfolio</title>
        <meta name="description" content="Qays's AI Engineering Portfolio showcasing Computer Vision, Large Language Models, and Chatbots." />
        <meta property="og:title" content="Qays's Portfolio" />
        <meta property="og:description" content="AI Engineer specializing in cutting-edge technology." />
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/2792370-hd_1920_1080_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        />

        {/* Hero Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <motion.h1
            className="text-5xl font-extrabold mb-6 drop-shadow-xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-gradient">Qays</span>
          </motion.h1>
          <motion.p
            className="text-xl font-medium drop-shadow-md mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            An AI <span className="text-gradient">{role}</span>
          </motion.p>
          <p className="text-gray-200 max-w-2xl drop-shadow-md">
            Building smarter systems in Computer Vision, Large Language Models, and Chatbots.
          </p>
        </div>

        {/* Slide-In Panels */}
        {/* Projects Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 glass-panel text-white transform ${
            showProjects ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
          onMouseLeave={() => setShowProjects(false)}
        >
          <h2 className="text-2xl font-bold p-4 border-b border-gray-600">Projects</h2>
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
          <h2 className="text-2xl font-bold p-4 border-b border-gray-600">Contact Me</h2>
          <ul className="p-4 space-y-3">
            <li className="hover:text-blue-400 transition">
              <a href="mailto:qaysq28@gmail.com">
                <FaEnvelope size={24} />
              </a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a
                href="https://www.linkedin.com/in/qays-abu-mahfouz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a
                href="https://github.com/qays1"
                target="_blank"
                rel="noopener noreferrer"
              >
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

        <button
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all absolute bottom-4 left-1/2 transform -translate-x-1/2"
          onClick={() => window.open("/QaysAbuMahfouzResume (1).pdf", "_blank")}
        >
          Download CV
        </button>
      </div>
    </>
  );
}
