import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: '',
		company: 'Ufinity Pte Ltd',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		// location: 'Home',
		period: { from: new Date(2024, 1) },
		skills: getSkills('ts', 'js'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.Ufinity,
		shortDescription: `
		<p style="margin-bottom: 8px">- Collaborated with cross-functional teams to troubleshoot and resolve production incidents, reducing downtime and improving system reliability.</p>
		<p style="margin-bottom: 8px">- Upgraded Java, migrated from Apache Tiles to Thymeleaf and updating Maven dependencies, improving page load speeds and cut maintenance overhead.</p>
		<p style="margin-bottom: 8px">- Integrated new products into existing system, ensuring seamless interoperability with upstream/downstream systems.</p>
		<p>- Collaborated with cross-functional teams to refactor code and optimise system flows, improving performance through bulk updates, reduced database calls and fewer connection cycles by around 15%.</p>
		`
	},
	{
		slug: 'open-sourcer',
		company: 'Findjobs',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		// location: 'Home',
		period: { from: new Date(2019, 7), to: new Date(2023, 8) },
		skills: getSkills('ts', 'js'),
		name: 'Senior Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.Findjobs,
		shortDescription: `
		<p style="margin-bottom: 8px">- Collaborated with cross-functional team to gather requirements and understand the desired functionalities of the websites.</p>
		<p style="margin-bottom: 8px">- Developed user-facing features and components using Javascript frameworks like React.</p>
		<p style="margin-bottom: 8px">- Developed server-side APIs powering RESTful web services in Node.js, enabling seamless integration with frontend.</p>
		<p style="margin-bottom: 8px">- Performed Database Migration (MySQL -> PostgreSQL).</p>
		<p style="margin-bottom: 8px">- Used version control system (Git) to manage codebase changes and collaborate effectively with other developers.</p>
		<p style="margin-bottom: 8px">- Identified performance bottlenecks and optimised website speed.</p>
		<b>Skills:</b> React.js · TypeScript · JavaScript · PostgreSQL · GraphQL · Bootstrap · Cascading Style Sheets (CSS) · HTML5 · Node.js · Express.js · API Development · Github
		`
	},
	{
		slug: 'software-freelance',
		company: 'Applied Materials',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		// location: 'Home',
		period: { from: new Date(2017, 10), to: new Date(2019, 0) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Engineering Technician',
		color: 'red',
		links: [],
		logo: Assets.AppliedMaterials,
		shortDescription: `
		<p style="margin-bottom: 8px">- Assembled and tested products to ensure products met the required specifications while following production schedule.</p>
		<p style="margin-bottom: 8px">- Came up with corrective/preventive actions after diagnosis on production failure or product quality issue with Manufacturing Engineer.</p>
		<p style="margin-bottom: 8px">- Participated in continuous improvement projects to implement 5S in the workplace to improve work efficiency and implement order.</p>
		<p>- Provide training to other operators on product's assembly/testing process.</p>
		`
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
