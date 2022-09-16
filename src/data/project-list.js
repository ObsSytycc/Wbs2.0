import { pngs } from '../assets';
import { dateFormat } from '../utils';

export const projectList = [
	{
		name: 'NSPM',
		details: {
			launch: dateFormat.localDate('11-03-2023', 'en-US', dateFormat.longFormat),
			doneBy: 'TechX',
			image: pngs.project1
		},
		path: '/'
	},
	{
		name: 'ENTROVA',
		details: {
			launch: dateFormat.localDate('11-02-2023', 'en-US', dateFormat.longFormat),
			doneBy: 'Obsidian',
			image: pngs.project2
		},
		path: '/'
	},
	{
		name: 'SYTYCC',
		details: {
			launch: dateFormat.localDate('01-09-2023', 'en-US', dateFormat.longFormat),
			doneBy: 'Sapphire',
			image: pngs.project3
		},
		path: '/'
	}
];
