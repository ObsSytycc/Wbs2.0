import { pngs } from '../assets';
import { dateFormat } from '../utils';

export const blogPost = [
	{
		title: 'Scientists Discover The Cure Of SCD With The Help Of A Sophisticated Software',
		content:
			'Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: pngs.blog1Img,
		category: 'Health',
		author: {
			name: 'Oranu Peculiar',
			image: pngs.author1Img
		},
		published: `${dateFormat.localDate('2022, 6, 27', 'en-us', dateFormat.longFormat)}`
	},
	{
		title: 'Scientists Discover The Cure Of SCD With The Help Of A Sophisticated Software',
		content:
			'Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: pngs.blog2Img,
		category: 'Engineering',
		author: {
			name: 'Jude Spire',
			image: pngs.author2Img
		},
		published: `${dateFormat.localDate('2022, 6, 27', 'en-us', dateFormat.longFormat)}`
	},
	{
		title: 'Scientists Discover The Cure Of SCD With The Help Of A Sophisticated Software',
		content:
			'Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: pngs.blog3Img,
		category: 'Space',
		author: {
			name: 'Stanley Ifeanyi',
			image: pngs.author3Img
		},
		published: `${dateFormat.localDate('2022, 6, 27', 'en-us', dateFormat.longFormat)}`
	}
];

export const categoryList = [
	{
		id: '1',
		name: 'All'
	},
	{
		id: '2',
		name: 'Technology'
	},
	{
		id: '3',
		name: 'Science'
	},
	{
		id: '4',
		name: 'Space'
	},
	{
		id: '5',
		name: 'Engineering'
	},
	{
		id: '6',
		name: 'Fashion'
	},
	{
		id: '7',
		name: 'Health'
	}
];
