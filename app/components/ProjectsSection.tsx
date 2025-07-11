'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const personal_projects = [
	{
		id: 1,
		title: 'In Field Sensor Calibration Algorithm',
		description: 'A low cost machine learning algorithm for in-field calibration of low cost sensors',
		image: '/code.jpg',
		project_link: '',
		github_link: 'https://github.com/virident/sensor_cal',
		paper_link: 'http://arxiv.org/abs/2506.15840',
		show_github: true,
		show_project: false,
		show_paper: true,
	},
	{
		id: 2,
		title: 'HaptiGlove',
		description: 'A wearable haptic feedback glove for virtual reality applications',
		image: '/haptic_glove.png',
		project_link: 'https://drive.google.com/drive/folders/13iLKyWtURrnvAWHi34l8h944HDGJKr95?usp=drive_link',
		github_link: '',
		paper_link:'',
		show_github: false,
		show_project: true,
		show_paper: false,
	},
];



export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{personal_projects.map((personal_projects) => (
					<motion.div
						key={personal_projects.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: personal_projects.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={personal_projects.image} alt={personal_projects.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{personal_projects.title}</h3>
							<p className="text-gray-300 mb-4">{personal_projects.description}</p>
							<div className="flex gap-4">
								{personal_projects.show_project && personal_projects.project_link && (
									<Link href={personal_projects.project_link} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										View Project
									</Link>
								)}
								{personal_projects.show_github && personal_projects.github_link && (
									<Link href={personal_projects.github_link} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										GitHub
									</Link>
								)}
								{personal_projects.show_paper && personal_projects.paper_link && (
									<Link href={personal_projects.paper_link} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										Paper
									</Link>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
			
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center mt-20"
			>
				More in the works!
			</motion.h2>
		</section>
		

		
	);
}
