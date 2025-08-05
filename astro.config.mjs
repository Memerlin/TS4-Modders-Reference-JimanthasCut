// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: 'favicon.png',
			customCss: [
				'./src/style/site.css',
			],
			title: 'The Sims 4 Modders Reference',
			social: [
				{
					icon: 'discord',
					label: 'Join the Creator Musings Discord',
					href: 'https://discord.com/invite/qxz5Kn5'
				},
				{
					icon: 'github',
					label: 'Source for this website on GitHub',
					href: 'https://github.com/Llama-Logic/TS4-Modders-Reference'
				},
			],
			sidebar: [
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About This Site', slug: 'about/about' },
						{ label: 'Contributors', slug: 'about/contributors' },
					]
				},
			],
		}),
	],
});
