import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code2, Database, Server } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Sistema de Inventario - Aciel",
      description: "Sistema completo de gestión de inventario desarrollado con tecnologías modernas. Permite control de stock, gestión de productos y reportes en tiempo real.",
      tech: ["React.js", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/tuusuario/inventario-aciel",
      demo: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop"
    },
    {
      title: "Proyecto SENA",
      description: "Aplicación web desarrollada como proyecto de formación, implementando las mejores prácticas de desarrollo y arquitectura MVC.",
      tech: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/tuusuario/proyecto-sena",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Base de Datos", items: ["PostgreSQL", "SQL"] },
    { category: "Herramientas", items: ["Git", "GitHub", "VS Code", "Postman"] }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {"<Dev />"}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-cyan-400 transition">Inicio</button>
              <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-cyan-400 transition">Sobre mí</button>
              <button onClick={() => scrollToSection('proyectos')} className="hover:text-cyan-400 transition">Proyectos</button>
              <button onClick={() => scrollToSection('habilidades')} className="hover:text-cyan-400 transition">Habilidades</button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-cyan-400 transition">Contacto</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 hover:text-cyan-400">Inicio</button>
              <button onClick={() => scrollToSection('sobre-mi')} className="block w-full text-left py-2 hover:text-cyan-400">Sobre mí</button>
              <button onClick={() => scrollToSection('proyectos')} className="block w-full text-left py-2 hover:text-cyan-400">Proyectos</button>
              <button onClick={() => scrollToSection('habilidades')} className="block w-full text-left py-2 hover:text-cyan-400">Habilidades</button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 hover:text-cyan-400">Contacto</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Anderson
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8">
            Desarrollador Full Stack | React.js • Node.js • Python
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tuemail@ejemplo.com" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">
              <Mail size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition transform hover:scale-105"
          >
            Ver Proyectos
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Sobre mí</h2>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Soy un desarrollador full stack apasionado por crear soluciones web modernas y eficientes. 
              Con experiencia en tecnologías como React.js, Node.js, Python y Django, me especializo en 
              construir aplicaciones escalables y con excelente experiencia de usuario.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Actualmente desarrollo sistemas de gestión empresarial y continúo expandiendo mis conocimientos 
              en nuevas tecnologías y mejores prácticas de desarrollo.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                    >
                      <Github size={20} />
                      Código
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Code2 className="text-cyan-400" size={24} />}
                  {index === 1 && <Server className="text-cyan-400" size={24} />}
                  {index === 2 && <Database className="text-cyan-400" size={24} />}
                  {index === 3 && <Code2 className="text-cyan-400" size={24} />}
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Trabajamos juntos?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Estoy disponible para nuevas oportunidades. ¡Contactémonos!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:tuemail@ejemplo.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <Mail size={20} />
              tuemail@ejemplo.com
            </a>
            <a 
              href="https://github.com/4nd3rs0n0710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 text-center text-slate-400">
        <p>© 2026 Anderson. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}