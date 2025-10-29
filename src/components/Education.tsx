import { GraduationCap, Award, Calendar, Briefcase, FileText } from 'lucide-react';

const education = [
	{
		degree: 'Cycle Ingénieur',
		field: 'Big Data & Intelligence Artificielle',
		institution: 'Université Internationale de Rabat (UIR)',
		location: 'Rabat, Maroc',
		period: '2024 – Présent',
		description:
			'Cycle ingénieur en informatique, spécialisation Big Data & IA : machine learning, deep learning, systèmes distribués et cloud.',
		highlights: [
			'Projets académiques en IA/Big Data',
			'Travaux pratiques en bases de données et cloud',
		],
	},
	{
		degree: 'Cycle Préparatoire en Informatique – ESIN',
		field: 'Mathématiques, Informatique & Sciences de l’Ingénieur',
		institution: 'Université Internationale de Rabat (UIR)',
		location: 'Rabat, Maroc',
		period: '2021 – 2023',
		description:
			'Fondamentaux en mathématiques, algorithmique, programmation et systèmes.',
		highlights: [
			'Projets logiciels et travaux pratiques',
			'Acquisition d’une base solide en développement',
		],
	},
];

const internships = [
	{
		role: 'Stage PFA',
		company: 'ATOMAS Ingénierie',
		location: 'Rabat, Maroc',
		period: 'Juin – Juillet 2025',
		attestationUrl: '/PFA.pdf', // <-- remplacer par le lien vers l'attestation
		bullets: [
			"Développement d’une application desktop d’extraction automatique de CV à l’aide du Traitement du Langage Naturel (NLP).",
			"Intégration du modèle CamemBERT-NER pour la détection des entités nommées (noms, adresses, compétences).",
			"Conception d’une interface moderne avec PyQt6 et d’une base de données MySQL pour la gestion des candidats.",
			"Automatisation du parsing et de la structuration des informations en données exploitables.",
		],
	},
	{
		role: 'Stage Technicien',
		company: 'CGI',
		location: 'Salé, Maroc',
		period: 'Juin – Juillet 2024',
		attestationUrl: '/Technicien.pdf', // <-- remplacer par le lien vers l'attestation
		bullets: [
			'Participation à la migration d’applications vers AWS pour TotalEnergies',
			'Automatisation de processus ETL avec AWS Glue',
			'Obtention de la certification AWS Cloud Practitioner',
		],
	},
	{
		role: 'Stage Ouvrier',
		company: 'CGI',
		location: 'Salé, Maroc',
		period: 'Juin 2023',
		attestationUrl: '/Ouvrier.pdf', // <-- remplacer par le lien vers l'attestation
		bullets: [
			'Développement d’un outil de visualisation des relations entre applications internes',
			'Participation à un workshop international et à des formations (cybersécurité, éthique, RGPD)',
		],
	},
];

const certifications = [
	{
		title: 'AWS Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: '2024',
		icon: Award,
		certificateUrl: '/Certificate.pdf', // <-- mettre le chemin réel dans public/
	},
	// ... ajouter d'autres certificats ici avec certificateUrl si disponible ...
];

export default function Education() {
	return (
		<section id="formation" className="py-24 px-6 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
						Formation
					</h2>
					<p className="text-lg text-stone-600 max-w-2xl mx-auto">
						Mon parcours académique, mes stages et mes certifications
					</p>
				</div>

				{/* Diplômes */}
				<div className="mb-16">
					<h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center gap-3">
						<GraduationCap size={32} className="text-stone-700" />
						Diplômes
					</h3>
					<div className="space-y-8">
						{education.map((edu, idx) => (
							<div
								key={idx}
								className="bg-stone-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-l-4 border-stone-800"
							>
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
									<div>
										<h4 className="text-2xl font-bold text-stone-800 mb-1">
											{edu.degree}
										</h4>
										<p className="text-lg text-stone-600 font-medium mb-2">
											{edu.field}
										</p>
										<p className="text-stone-700 font-medium">
											{edu.institution}
										</p>
										<p className="text-stone-600">{edu.location}</p>
									</div>
									<div className="flex items-center gap-2 text-stone-600 bg-white px-4 py-2 rounded-lg shadow-sm whitespace-nowrap">
										<Calendar size={18} />
										<span className="font-medium">{edu.period}</span>
									</div>
								</div>

								<p className="text-stone-700 mb-4 leading-relaxed">
									{edu.description}
								</p>

								<ul className="space-y-2">
									{edu.highlights.map((highlight, hIdx) => (
										<li
											key={hIdx}
											className="flex items-start gap-2 text-stone-700"
										>
											<span className="text-stone-800 mt-1">▪</span>
											{highlight}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Stages & Expériences */}
				<div className="mb-16">
					<h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center gap-3">
						<Briefcase size={32} className="text-stone-700" />
						Stages & Expériences
					</h3>
					<div className="space-y-8">
						{internships.map((exp, idx) => (
							<div
								key={idx}
								className="bg-stone-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-l-4 border-stone-800"
							>
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
									<div>
										<h4 className="text-2xl font-bold text-stone-800 mb-1">
											{exp.role} — {exp.company}
										</h4>
										<p className="text-stone-600">{exp.location}</p>
									</div>
									<div className="flex items-center gap-2 text-stone-600 bg-white px-4 py-2 rounded-lg shadow-sm whitespace-nowrap">
										<Calendar size={18} />
										<span className="font-medium">{exp.period}</span>
									</div>
								</div>

								<ul className="space-y-2">
									{exp.bullets.map((b, bIdx) => (
										<li
											key={bIdx}
											className="flex items-start gap-2 text-stone-700"
										>
											<span className="text-stone-800 mt-1">▪</span>
											{b}
										</li>
									))}
								</ul>

								{/* Bouton attestation (affiché seulement si attestationUrl est défini) */}
								{exp.attestationUrl && (
									<div className="mt-4">
										<a
											href={exp.attestationUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
										>
											<FileText size={16} />
											Attestation
										</a>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Certifications */}
				<div>
					<h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center gap-3">
						<Award size={32} className="text-stone-700" />
						Certifications
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{certifications.map((cert, idx) => {
							const Icon = cert.icon;
							return (
								<div
									key={idx}
									className="bg-stone-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-start gap-4"
								>
									<div className="p-3 bg-stone-800 text-white rounded-lg flex-shrink-0">
										<Icon size={24} />
									</div>
									<div>
										<h4 className="text-lg font-bold text-stone-800 mb-1">
											{cert.title}
										</h4>
										<p className="text-stone-600 font-medium mb-1">
											{cert.issuer}
										</p>
										<p className="text-sm text-stone-500">
											{cert.date}
										</p>

										{/* Bouton certificat (affiché seulement si certificateUrl est défini) */}
										{cert.certificateUrl && (
											<div className="mt-4">
												<a
													href={cert.certificateUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-3 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
												>
													<FileText size={16} />
													Certificat
												</a>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
