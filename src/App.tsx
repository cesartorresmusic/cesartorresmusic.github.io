// Version: 1.0.9
import { useState, useEffect, type ElementType } from 'react';
import { Menu, X, BookOpen, Music, GraduationCap, Award, PlaySquare, Mail, ExternalLink, ChevronRight, PlayCircle } from 'lucide-react';
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Libro', href: '#libro' },
    { name: 'Biografía', href: '#biografia' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#inicio" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <Music className="w-6 h-6 text-sky-500" />
              César<span className="text-sky-500">Torres</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-sky-500 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-sky-500 hover:bg-zinc-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url("cesar_chaouen.jpg")',
          backgroundPosition: 'center 70%' 
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          César Torres
        </h1>
        <p className="text-xl md:text-3xl text-zinc-300 mb-10 font-light drop-shadow-md">
          Clases de guitarra y <br className="md:hidden" />
          <span className="text-sky-500 font-medium">estrategias de aprendizaje musical</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#libro" className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-zinc-950 font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Descubre mi nuevo libro
          </a>
          <a href="#contacto" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-full transition-all border border-zinc-700 hover:border-zinc-500">
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  );
};

const BookPromo = () => {
  return (
    <section id="libro" className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 relative border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-800 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>

          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group perspective-1000">
              <div className="w-48 md:w-64 aspect-[2/3] bg-zinc-800 rounded-r-xl rounded-l-sm shadow-2xl border-l-8 border-sky-600 relative overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12">
                <img 
                  src="portadahotmart.webp" 
                  alt="La Guitarrita de los Coj*nes Book Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-black/30 rounded-r-xl pointer-events-none"></div>
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm font-semibold border border-sky-500/20">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              NUEVO LANZAMIENTO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              La Guitarrita de los Coj*ones: <br/>
              <span className="text-zinc-400 font-light text-2xl md:text-3xl">Manual de Autoayuda para Guitarristas</span>
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl">
              ¿Sientes que no avanzas con la guitarra? Este no es el típico libro de teoría musical. Es una guía directa, honesta y práctica para superar bloqueos, mejorar tu técnica y, sobre todo, disfrutar del proceso de aprendizaje sin frustraciones.
            </p>
            <div className="pt-4">
              <a 
                href="https://hotmart.com/es/marketplace/productos/la-guitarrita-de-los-coj-nes-manual-de-autoayuda-para-guitarristas/P102877075K" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-zinc-950 font-bold rounded-lg shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-1"
              >
                Comprar en Hotmart
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  details?: string[];
  icon: ElementType;
  isLast: boolean;
}

const TimelineItem = ({ year, title, subtitle, details, icon: Icon, isLast }: TimelineItemProps) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:flex items-start">
      <div className="hidden md:block w-1/3 text-right pr-8 pt-1">
        <h4 className="text-xl font-bold text-sky-500">{year}</h4>
      </div>
      
      <div className="absolute left-0 md:left-1/3 md:-ml-4 flex items-center justify-center mt-1 md:mt-0">
        <div className="w-8 h-8 rounded-full bg-zinc-900 border-4 border-sky-500 flex items-center justify-center z-10">
           <Icon className="w-3 h-3 text-white" />
        </div>
      </div>

      {!isLast && (
        <div className="absolute left-4 md:left-1/3 top-8 bottom-[-4rem] md:bottom-[-3rem] w-px bg-zinc-800 -ml-px z-0"></div>
      )}

      <div className="md:w-2/3 md:pl-10 pb-12">
        <h4 className="text-xl font-bold text-sky-500 md:hidden mb-1">{year}</h4>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 pt-1 leading-none">{title}</h3>
        <p className="text-lg text-zinc-400 font-medium mb-3 mt-2">{subtitle}</p>
        {details && (
          <ul className="space-y-2 mt-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-zinc-300">
                <ChevronRight className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const Biografia = () => {
  const experiences = [
    {
      year: "Nov 2025 - Presente",
      title: "Autor y Creador de Contenido Musical",
      subtitle: "Autónomo",
      icon: BookOpen,
      details: [
        "Autor del libro instruccional de guitarra 'La Guitarrita de los cojones', publicado independientemente con más de 300 copias vendidas a nivel global.",
        "Creador de una activa comunidad digital de aprendizaje con más de 20.000 seguidores en redes sociales."
      ]
    },
    {
      year: "Sept 2015 - Presente",
      title: "Profesor de Guitarra y Combo",
      subtitle: "Rockschool Coruña",
      icon: GraduationCap,
      details: [
        "Instrucción altamente adaptable de guitarra eléctrica y acústica, diseñada a medida para cada estudiante.",
        "Especializado en preparar alumnos para exámenes de grado avanzado (Grade 8, L4 y L6), logrando la gran mayoría calificaciones de Merit o Distinction."
      ]
    },
    {
      year: "Sept 1998 - Presente",
      title: "Guitarrista de Sesión, Compositor y Músico en Vivo",
      subtitle: "Freelance",
      icon: Music,
      details: [
        "Ha grabado, tocado y compartido escenario con guitarristas como Carlos Chaouen, Alejandro Rivera, Antonio Hernando, Cuenta Atrás, Alberto Alcalá, Gema Cuéllar, El Kanka, Octavio Vargas, Miguel Lamas, Mar de Fondo, composición de letras y grabación de guitarras en el disco debut de Maret, subcampeona de Factor X España.",
        "Lanzamiento de dos álbumes de estudio originales ('Cambio Climático' y 'Camaleones')."
      ]
    },
    {
      year: "2013 - 2019",
      title: "Certificaciones RSL Awards UK",
      subtitle: "London, UK",
      icon: Award,
      details: [
        "L6 Licenciate Music Teaching (Merit)",
        "L4 Diploma Electric Guitar Performance (Merit)",
        "Grade 8 Popular Music Theory (Merit)",
        "Grade 8 Acoustic Guitar (Distinction)"
      ]
    },
    {
      year: "Sept 2011 - Sept 2013",
      title: "Profesor de Guitarra, Combo, Teoría y Dirección del Ensemble",
      subtitle: "Colegio Trener, Lima (Perú)",
      icon: GraduationCap,
      details: [
        "Instrucción de clases de guitarra moderna y combos para diversos grupos de estudiantes.",
        "Dirección del ensamble sinfónico de la institución, arreglando música y liderando actuaciones en vivo."
      ]
    },
    {
      year: "2009 - 2010",
      title: "Finalista",
      subtitle: "Certamen Nacional de Cantautores “Ciudad de Melilla”",
      icon: Award,
      details: ["Reconocimiento a nivel nacional por composiciones e interpretaciones originales."]
    }
  ];

  return (
    <section id="biografia" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trayectoria Musical</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Videos = () => {
  const videoIds = [
    "yd0kVkaGKGY",
    "8DFgv5nrwbA",
    "6w8txxZcPYM",
    "W9jDtP-4y3k",
    "E6gMEc69y-A"
  ];

  return (
    <section id="videos" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <PlaySquare className="w-8 h-8 text-sky-500" />
            Vídeos Destacados
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoIds.map((id, index) => (
            <div key={id} className="bg-zinc-950 rounded-xl overflow-hidden shadow-lg border border-zinc-800 group hover:border-sky-500/50 transition-colors aspect-video">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`} 
                title={`YouTube video player ${index + 1}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          ))}
          
          <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 border-dashed flex flex-col items-center justify-center p-4 md:p-6 text-center aspect-video hover:bg-zinc-800 transition-colors overflow-hidden">
            <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-zinc-500 mb-2 md:mb-3 shrink-0" />
            <h3 className="text-lg md:text-xl font-medium text-zinc-300">Descubre más</h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-1 md:mt-2 max-w-[90%] md:max-w-[80%] mx-auto line-clamp-2">Visita mi canal de YouTube para ver más contenido y lecciones.</p>
            <a href="https://www.youtube.com/@tresdeseptiembremusic" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-4 text-sky-500 hover:text-sky-400 font-medium text-sm md:text-base shrink-0">Ver Canal &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-zinc-400 text-lg">Para clases, colaboraciones o preguntas sobre los materiales didácticos.</p>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a href="https://www.youtube.com/@tresdeseptiembremusic" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:bg-sky-500 hover:border-sky-500 hover:text-zinc-950 rounded-full transition-all text-zinc-300 shadow-lg hover:-translate-y-1" aria-label="YouTube">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/tresdeseptiembre.music" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:bg-sky-500 hover:border-sky-500 hover:text-zinc-950 rounded-full transition-all text-zinc-300 shadow-lg hover:-translate-y-1" aria-label="Instagram">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@tresdeseptiembre.music" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:bg-sky-500 hover:border-sky-500 hover:text-zinc-950 rounded-full transition-all text-zinc-300 shadow-lg hover:-translate-y-1" aria-label="TikTok">
            <FaTiktok className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/cesartorresmusic" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:bg-sky-500 hover:border-sky-500 hover:text-zinc-950 rounded-full transition-all text-zinc-300 shadow-lg hover:-translate-y-1" aria-label="LinkedIn">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 md:p-10 border border-zinc-800 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8 pb-8 border-b border-zinc-800">
             <Mail className="w-6 h-6 text-sky-500" />
             <span className="text-xl text-zinc-200 font-medium">Formulario de Contacto</span>
          </div>
          
          <div className="w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden bg-zinc-950 relative">
             <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdgrpmFGQFzj2Hnz-yY_HBTbXz80B8xdsNQuENncWjiepTSkw/viewform?embedded=true" 
                className="w-full h-full border-0 absolute inset-0"
                title="Formulario de contacto"
             >
                Cargando…
             </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-center py-6 selection:bg-sky-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-zinc-500">
            <p className="font-medium text-white/90">
              César Torres 
            </p>
            <span className="hidden md:inline">|</span>
            <p>
              Copyright &copy; {currentYear}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-sky-500/30 selection:text-sky-200 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <BookPromo />
        <Biografia />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}