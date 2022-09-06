import { svgs } from '../assets';

export const footerSubNav = {
	title: 'Company',
	list: [
		{
			name: 'home',
			path: '/'
		},
		{
			name: 'Blog',
			path: '/blog'
		},
		{
			name: 'Teams',
			path: '/teams'
		},
		{
			name: 'FAQ',
			path: '/faqs'
		}
	]
};

export const socialLink = [
	{
		name: 'facebook',
		url: '',
		icon: () => svgs.facebook
	},
	{
		name: 'linkedin',
		url: '',
		icon: () => svgs.linkedin
	},
	{
		name: 'instagram',
		url: '',
		icon: () => svgs.instagram
	},
	{
		name: 'twitter',
		url: '',
		icon: () => svgs.twitter
	}
];
