'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';



const currently_reading = [
	{
		id: 1,
		title: 'A visit from the goon squad',
		author: 'Jennifer Egan',
		image: '/goon_squad.jpg',
		review: 'gold flakes, huh...',
	},
	{
		id: 2,
		title: 'Fluent Python',
		author: 'Luciano Ramalho',
		image: '/fluentpython.jpg',
		review: 'I would love to get this book in a physical copy, but it is so expensive...',
	},
];

const previously_read = [
	{
		id: 1,
		title: 'Atomic Habits',
		author: 'James Clear',
		image: '/atomichabits.jpg',
		review: 'Well organized and digestable. I can imagine struggling to apply these lessons. I also bought this before finding out it is a performative read, so whenever I went to read in public I would leave the book cover at home...',
	},
	{
		id: 2,
		title: 'Metamorphosis',
		author: 'Kafka',
		image: '/metamorphisis.jpg',
		review: 'An interesting read. Maybe an analogy for disabilities?',
	},
    {
		id: 3,
		title: 'No Longer Human',
		author: 'Osamu Dazai',
		image: '/nolongerhuman.jpg',
		review: 'Kind of depressing, but I do enjoy novels about the human experience. Hopefully I never experience anything like this',
	},
    {
		id: 4,
		title: 'The Art of Happiness: A Handbook for Living',
		author: 'Dalai Lama and Howard Cutler',
		image: '/artofhappiness.jpg',
		review: 'Took me a while to get through, but very insightful. Resolute compassion is the answer.',
	},
    {
		id: 5,
		title: 'The Underground Railroad',
		author: 'Colson Whitehead',
		image: '/underground_railroad.jpg',
		review: 'An immensely powerful read, made me understand the horrors of the era in a way history classes never could convey',
	},
    {
		id: 6,
		title: 'Never Let Me Go',
		author: 'Kazuo Ishiguro',
		image: '/neverletmego.jpg',
		review: 'A friend told me he cried when he finished this book, so I gave it a read. I didnt end up crying, but it was a fun read nonetheless.',
	},
];

export default function ReadingList() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center"
			>
				Reading List
			</motion.h2>
			<p className="text-gray-400 text-center mb-8 md:mb-12">I like to document so I do not forget</p>

			{/* Currently Reading Section */}
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="text-2xl font-semibold mb-6 text-center"
			>
				Currently Reading
			</motion.h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{currently_reading.map((book) => (
					<motion.div
						key={book.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: book.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden h-full min-h-[18rem] md:min-h-[22rem]"
					>
						<div className="flex-1 p-6 flex flex-col justify-center">
							<h3 className="text-xl font-bold mb-2">{book.title}</h3>
							<p className="text-gray-300 mb-2">{book.author}</p>
							{book.review && (
								<p className="text-gray-400 text-sm">{book.review}</p>
							)}
						</div>
						<div className="relative w-full md:w-48 h-72 md:h-auto flex-shrink-0">
							<Image src={book.image} alt={book.title} fill className="object-contain" />
						</div>
					</motion.div>
				))}
			</div>

			{/* Previously Read Section */}
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="text-2xl font-semibold mb-6 text-center"
			>
				Previously Read
			</motion.h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{previously_read.map((book) => (
					<motion.div
						key={book.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: book.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden h-full min-h-[18rem] md:min-h-[22rem]"
					>
						<div className="flex-1 p-6 flex flex-col justify-center">
							<h3 className="text-xl font-bold mb-2">{book.title}</h3>
							<p className="text-gray-300 mb-2">{book.author}</p>
							{book.review && (
								<p className="text-gray-400 text-sm">{book.review}</p>
							)}
						</div>
						<div className="relative w-full md:w-48 h-72 md:h-auto flex-shrink-0">
							<Image src={book.image} alt={book.title} fill className="object-contain" />
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
