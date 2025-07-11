import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kevin Yin - Software Developer',
	description:
		'Hi! I\'m Kevin, a masters student at the University of Michigan majoring in Computer Engineering, specifically in Digital Image/Signal Processing and Machine Learning!',
	keywords: [
		'Kevin Yin',
		'AR/VR Developer'
	],
	authors: [{ name: 'Kevin Yin' }],
	creator: 'Kevin Yin',
	openGraph: {
		title: 'Kevin Yin - Software Developer Portfolio',
		description: 'Hi! I\'m Kevin, a masters student at the University of Michigan majoring in Computer Engineering, specifically in Digital Image/Signal Processing and Machine Learning!',
		url: 'https://your-domain.com',
		siteName: 'Kevin Yin - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kevin Yin - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kevin Yin - Software Developer',
		description: 'Hi! I\'m Kevin, a masters student at the University of Michigan majoring in Computer Engineering, specifically in Digital Image/Signal Processing and Machine Learning!',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
