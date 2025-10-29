import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-stone-400">
              Étudiant Ingénieur en Big Data & IA
            </p>
          </div>

          <div className="flex items-center gap-2 text-stone-400">
            <span>Créé avec</span>
            <Heart size={18} className="text-red-400 fill-red-400" />
            <span>en {currentYear}</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-400 text-sm">
          <p>Tous droits réservés - Portfolio professionnel</p>
        </div>
      </div>
    </footer>
  );
}
