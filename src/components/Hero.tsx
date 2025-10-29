import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-stone-300 shadow-2xl">
              <img
                src="/photo.jpeg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
              Bonjour, je m'appelle <span className="text-stone-600">ISSAF Ilias</span>
            </h1><br></br>            
            
            <p className="text-lg text-stone-700 mb-8 leading-relaxed max-w-2xl">
              Je suis étudiant en <strong>Big Data</strong> et <strong>Intelligence Artificielle</strong>, passionné par les systèmes intelligents, l’analyse de données et le développement d’applications innovantes.
              Mon parcours combine une solide base en ingénierie informatique et un intérêt marqué pour la science des données, le machine learning, et les architectures distribuées.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail size={20} />
                Me contacter
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-800 border-2 border-stone-800 rounded-full hover:bg-stone-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Download size={20} />
                Télécharger mon CV
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/ilias-issaf-7aba74387/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-stone-800 hover:text-white transition-all"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/ilias8649"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-stone-800 hover:text-white transition-all"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:ilias.issaf@uir.ac.ma"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-stone-800 hover:text-white transition-all"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
