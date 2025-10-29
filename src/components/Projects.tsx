import { Github } from 'lucide-react';

const projects = [
	{
		id: 1,
		title: 'Smart Subtitle Generator',
		description:
			"Application d’intelligence artificielle capable de générer automatiquement des sous-titres multilingues à partir de vidéos, basée sur Whisper, la traduction et le RAG avec une base vectorielle.",
		image:
			'https://images.pexels.com/photos/5077040/pexels-photo-5077040.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['Python', 'Whisper', 'RAG', 'Pinecone', 'Flask'],
		githubUrl: 'https://github.com/ilias8649/Projet-AI',
		liveUrl: '#',
	},
	{
		id: 2,
		title: 'AniPlanner',
		description:
			"Système de recommandation d’animés intelligent intégrant l’API AniList et Google Calendar pour planifier automatiquement les épisodes selon la disponibilité de l’utilisateur.",
		image:
			'https://images.pexels.com/photos/5081391/pexels-photo-5081391.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['OpenAI API', 'Python', 'Flask', 'Google Calendar API', 'AniList API'],
		githubUrl: 'https://github.com/ilias8649/Projet-Integre',
		liveUrl: '#',
	},
	{
		id: 3,
		title: 'Interactive Sound Game (IoT)',
		description:
			"Jeu sonore interactif basé sur Arduino utilisant un potentiomètre, un buzzer et un clavier pour tester les réflexes de l’utilisateur avec retour en temps réel via Node-RED.",
		image:
			'https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['Arduino', 'Node-RED', 'MQTT', 'Python', 'IoT'],
		liveUrl: '#',
	},
	{
		id: 4,
		title: 'Projet Big Data Séismes',
		description:
			"Pipeline temps réel collectant les données sismiques de l’API USGS, traitées via Kafka Streams, indexées dans Elasticsearch et visualisées dans Kibana.",
		image:
			'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['Kafka', 'Kafka Streams', 'Elasticsearch', 'Kibana', 'API USGS'],
		liveUrl: '#',
	},
	{
		id: 5,
		title: "Application de gestion d’un restaurant universitaire",
		description:
			"Développement d’un outil complet de gestion des commandes et des rôles (étudiant, admin, cuisine) au sein d’un restaurant universitaire, réalisé avec Java, HTML, CSS et Apache NetBeans.",
		image:
			'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['Java', 'HTML', 'CSS', 'Apache NetBeans'],
		githubUrl: 'https://github.com/ilyaslog/Uni-Eats',
		liveUrl: '#',
	},
	{
		id: 6,
		title: 'CV Parser',
		description:
			"Développement d’un outil intelligent d’extraction automatique d’informations depuis des CV. Le système identifie les sections clés à l’aide de modèles NLP, regex et heuristiques, puis structure les données dans une base JSON ou SQL.",
		image:
			'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
		tags: ['Python', 'NLP', 'Regex', 'Tesseract', 'Transformers'],
		githubUrl: 'https://github.com/ilias8649/CV_parser',
		liveUrl: '#',
	},
];

export default function Projects() {
	return (
		<section id="projets" className="py-24 px-6 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
						Mes Projets
					</h2>
					<p className="text-lg text-stone-600 max-w-2xl mx-auto">
						Découvrez mes réalisations en Intelligence Artificielle, Big Data et IoT
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<article
							key={project.id}
							className="group bg-stone-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-stone-800 mb-3">
									{project.title}
								</h3>
								<p className="text-stone-600 mb-4 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-stone-200 text-stone-700 text-sm rounded-full font-medium"
										>
											{tag}
										</span>
									))}
								</div>

								{project.githubUrl && (
									<div className="flex gap-3">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
										>
											<Github size={16} />
											Code
										</a>
									</div>
								)}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
