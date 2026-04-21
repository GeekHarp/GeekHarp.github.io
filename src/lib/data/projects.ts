import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import fjJobPortalImg from '$lib/assets/Screenshot-fj-job-portal.png'
import fjDashboardImg from '$lib/assets/Screenshot-fj-dashboard.png'
import guessTheWordImg from '$lib/assets/Screenshot-guess-the-words.png'

const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#ff3e00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Job portal created with Next.js with Express API integration and server-side rendering.',
		links: [
			{ to: 'https://findjobs.asia/', label: 'Findjobs Job Portal' },
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Reporsitory' },
			// { to: 'https://svelte.dev/', label: 'Svelte' },
			// { to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.AWS,
		name: 'Findjobs Job Portal',
		period: {
			from: new Date()
		},
		skills: getSkills('ts', 'nextjs', 'nodejs', 'expressjs', 'bootstrap'),
		type: 'Website Template',
		thumbnail: fjJobPortalImg
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#5e95e3',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'An Employer Dashboard where employers can post job openings, review applicant profiles and streamline the hiring process. A React app integrated with Express backend, Hasura (GraphQL), etc.',
		links: [{ to: 'https://dashboard.findjobs.asia', label: 'Findjobs Employer Dashboard' }],
		logo: Assets.Svelte,
		name: 'Findjobs Employer Dashboard',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'reactjs', 'nodejs', 'expressjs'),
		type: 'Website Template',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ],
		thumbnail: fjDashboardImg
	},
	{
		slug: '',
		color: '#ff3e00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Test your ability in recognizing Scrambled word or play a game of Hangman with friends with Guess the WORDs. This project is written using pure HTML, CSS and Javascript for DOM Manipulation.',
		links: [{ to: 'https://geekharp.github.io/word-guessing-game/', label: 'Word Guessing Game' }],
		logo: Assets.Unknown,
		name: 'Guess the WORDs',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css', 'js'),
		type: 'Website Template',
		thumbnail: guessTheWordImg
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
