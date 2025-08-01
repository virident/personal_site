'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ReadingList from './components/ReadingList';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
			<ReadingList />
		</div>
	);
}
