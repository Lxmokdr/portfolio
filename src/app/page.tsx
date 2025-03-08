"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="bg-sky-100 text-black min-h-screen font-[Poppins]">
      {/* Navbar */}
      <nav className="fixed w-full backdrop-blur-lg bg-transparent p-5 flex justify-between items-center z-50">
        <Image src="/assets/LKlogo.png" alt="Logo" width={50} height={50} />
        <ul className="flex space-x-6 text-gray-800 text-lg">
          {[
            { name: 'Home', link: '#home' },
            { name: 'Who Am I?', link: '#who-am-i' },
            { name: 'Technologies', link: '#technologies' },
            { name: 'Experience', link: '#experience' },
            { name: 'Education', link: '#education' },
            { name: 'Contact', link: '#contact' }
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="hover:text-[#ffb347] transition-all">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between text-left py-24 px-8 gap-8 min-h-screen">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">KOUDRI Lamia</h1>
          <TypeAnimation
            sequence={[
              'Data Science & AI Engineer', 2000,
              'Full-Stack Developer', 2000,
              'Web Developer', 2000,
              'Designer', 2000,
              'Video Editor', 2000,
              'Animator', 2000,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-gray-800 mt-2"
          />
        </div>
        <Image src="/assets/KL.png" alt="Profile" width={400} height={400} className="rounded-full " />
      </section>

      {/* Who Am I? Section */}
      <section id="who-am-i" className="px-8 py-16 text-center md:flex md:justify-between md:items-center md:text-left">
        <div className="md:w-1/2">
          <h2 className="text-4xl bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">Who Am I?</h2>
          <p className="text-gray-800 mt-4 text-lg">
            I am a future graduate from ENP Algiers, specializing in Data Science and Artificial Intelligence. 
            Passionate about web and app development, design, and innovation, I enjoy creating impactful digital solutions.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image src="/assets/certificate.jpeg" alt="Certificate" width={450} height={450} className="shadow-lg rounded-lg" />
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="px-8 py-16 text-center">
        <h2 className="text-4xl bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">Technologies I Use</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[ 'React.js & Next.js', 'Flutter & Dart', 'Firebase & Firestore', 'C & C++', 'Python Basics', 'Video Editing & Animation Tools' ].map((tech, i) => (
            <motion.div key={i} className="bg-transparentbg-opacity-30 border border-indigo-600  p-6 rounded-lg shadow-lg text-xl text-gray-900" whileHover={{ scale: 1.05 }}>
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-8 py-16 text-center">
        <h2 className="text-4xl bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">My Experience</h2>
        <div className="mt-8 space-y-6">
          {[
            { title: 'Baseera - Startup Project', desc: 'A Flutter app connecting psychologists to patients with real-time booking features and messaging.' },
            { title: 'Natixis Internship', desc: 'Currently working on the feasibility study of an AI-powered chatbot for banking documents retrieval.' },
            { title: 'Feeling Box', desc: 'A React web app that allows users to select their current feeling and provides a Quran verse corresponding to that feeling, using Firebase database.' },
            { title: 'Natixis Discovery Internship', desc: 'Explored various banking departments related to data, IT systems, and security.' }
          ].map((exp, i) => (
            <motion.div key={i} className="bg-transparentbg-opacity-30 border border-indigo-600 p-6 rounded-lg shadow-lg text-lg text-gray-900" whileHover={{ scale: 1.05 }}>
              <h3 className="bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent font-semibold">{exp.title}</h3>
              <p className="mt-2 text-gray-700">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-8 py-16 text-center">
        <h2 className="text-4xl bg-gradient-to-r from-sky-500 to-indigo-700 bg-clip-text text-transparent">Education</h2>
        <div className="mt-8 space-y-6">
          {[ 'Engineering Degree in Data Science & AI - ENP Algiers', 'Preparatory Class at École Nationale Polytechnique',  ].map((edu, i) => (
            <motion.div key={i} className="border border-sky-500 p-6 rounded-lg shadow-lg text-lg" whileHover={{ scale: 1.05 }}>
              {edu}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 text-center">
        <h2 className="text-4xl bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">Contact Me</h2>
        <motion.div 
          className="mt-4 text-lg flex justify-center space-x-8 text-gray-800 border border-sky-500 p-6 rounded-lg shadow-lg text-lg" 
          whileHover={{ scale: 1.05 }}
        >
          <p>📧 <b>Email:</b> koudrilamia@example.com</p>
          <p>📞 <b>Phone:</b> +213 123 456 789</p>
          <p>🔗 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/lamia-koudri-054130297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-600 underline">linkedin.com</a></p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-gray-800 text-center p-4 mt-16">
        &copy; 2025 KOUDRI Lamia. All rights reserved.
      </footer>
    </div>
  );
}