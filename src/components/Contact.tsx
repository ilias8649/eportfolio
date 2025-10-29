import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Contact
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Pour toute question, collaboration ou échange, je suis à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="flex flex-col items-center"> {/* Centrage horizontal */}
            <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
              Informations de contact
            </h3>

            <div className="space-y-6 mb-8 w-full max-w-md"> {/* Limite la largeur */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Email</h4>
                  <a
                    href="mailto:votre.email@example.com"
                    className="text-stone-600 hover:text-stone-800 transition-colors"
                  >
                    ilias.issaf@uir.ac.ma
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 text-white rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Téléphone</h4>
                  <a
                    href="tel:+33123456789"
                    className="text-stone-600 hover:text-stone-800 transition-colors"
                  >
                    06 41 37 99 33
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Localisation</h4>
                  <p className="text-stone-600">Rabat-Salé-Kénitra, Maroc</p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md">
              <h4 className="font-bold text-stone-800 mb-4 text-lg text-center">
                Retrouvez-moi sur
              </h4>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ilias-issaf-7aba74387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-stone-700 hover:text-stone-900"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/ilias8649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-stone-700 hover:text-stone-900"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
