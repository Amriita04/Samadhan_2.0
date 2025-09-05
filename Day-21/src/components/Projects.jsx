
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const projects = [
  {
    title: "Study Buddy App",
    image: "/assets/images/project1.png",
    description: "Sentiment-aware study companion with voice AI and motivational UX.",
    tech: ["React", "Tailwind", "OpenRouter", "n8n"],
    link: "https://github.com/amritapal27/study-buddy"
  },
  // Add more projects here
];

export default function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-8 text-indigo-600">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 reveal"
          >
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
