import { Brain, Database, Code, Cpu } from 'lucide-react';

const skillCategories = [
	{
		icon: Brain,
		title: 'Intelligence Artificielle & NLP',
		skills: [
			'Machine Learning',
			'Deep Learning',
			'Natural Language Processing (NLP)',
			'Computer Vision',
		],
	},
	{
		icon: Database,
		title: 'Big Data & Cloud',
		skills: [
			'Apache Spark',
			'Kafka / Kafka Streams',
			'Hadoop / YARN / MapReduce',
			'Elasticsearch & Kibana',
		],
	},
	{
		icon: Code,
		title: 'Développement & Frameworks',
		skills: [
			'Python',
			'Java',
			'Flask / Spring Boot',
			'HTML / CSS / JavaScript',
		],
	},
	{
		icon: Cpu,
		title: 'IoT & Data Engineering',
		skills: [
			'Arduino / Node-RED / MQTT',
			'ETL Pipelines & APIs',
			'SQL / NoSQL Databases',
			'Docker & Linux Environments',
		],
	},
];

const tools = [
	'PyTorch',
	'Scikit-learn',
	'TensorFlow',
	'Pandas',
	'NumPy',
	'Hadoop',
	'Spark',
	'Kafka',
	'Elasticsearch',
	'Kibana',
	'Flask',
	'Spring Boot',
	'Node-RED',
	'Arduino',
	'MySQL',
	'MongoDB',
	'Docker',
	'Apache Airflow',
	'Apache Pulsar',
	'Apache Nifi',
	'Azure',
	'Jupyter',
];

export default function Skills() {
	return (
		<section id="competences" className="py-24 px-6 bg-stone-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
						Compétences
					</h2>
					<p className="text-lg text-stone-600 max-w-2xl mx-auto">
						Une expertise à la croisée de l'Intelligence Artificielle, du Big Data
						et de l'IoT
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{skillCategories.map((category, idx) => {
						const Icon = category.icon;
						return (
							<div
								key={idx}
								className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="p-3 bg-stone-800 text-white rounded-lg">
										<Icon size={28} />
									</div>
									<h3 className="text-2xl font-bold text-stone-800">
										{category.title}
									</h3>
								</div>

								<div className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <p
                                            key={skill}
                                            className="text-stone-700 font-medium"
                                        >
                                            • {skill}
                                        </p>
                                    ))}
                                </div>
							</div>
						);
					})}
				</div>

				<div className="bg-white p-8 rounded-xl shadow-lg">
					<h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
						Outils & Technologies
					</h3>
					<div className="flex flex-wrap gap-3 justify-center">
						{tools.map((tool) => (
							<span
								key={tool}
								className="px-5 py-2.5 bg-stone-100 text-stone-800 rounded-full font-medium hover:bg-stone-800 hover:text-white transition-colors cursor-default"
							>
								{tool}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
