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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Index', slug: 'tutorials/contents' },
						{ label: 'Comparing Files with WinMerge', slug: 'tutorials/winmerge' },
						{ label: 'Custom Maps', slug: 'tutorials/custom-maps' },
						{ label: 'Modifying Sim Appearances', slug: 'tutorials/modifying-sim-appearances' },
						{ label: 'Using the Top Menu of Sims 4 Studio', slug: 'tutorials/s4s-top-menus' },
						{ label: 'XML Extractor', slug: 'tutorials/xml-extractor' },
						{ label: 'XML File Finder', slug: 'tutorials/xml-file-finder' },
						{ label: 'Links to Off-Site Tutorials', slug: 'tutorials/links-offsite' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'About',
					autogenerate: {directory: 'about' },
				},
			],
		}),
	],
});
