import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Hello world! I am Andy, a Software Developer with an Engineering background. I have extensive experience in building reliable web applications using a variety of frameworks and technologies, including React, Node.js, etc. I have a strong enthusiasm for acquiring new skills. I am continuously seeking new challenges to further my growth in the field.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/geekHarp', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/andyngboonhou/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:ngbhandy@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
