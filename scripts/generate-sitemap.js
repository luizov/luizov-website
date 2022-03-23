/* eslint-disable */
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

; (async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc');

	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby([
		'pages/**/*.{js,ts,jsx,tsx}', // All routes inside pages
		'data/**/*.{md, mdx}',
		'!data/examples',
		'!pages/**/[*.{js,ts,tsx}',// Ignore dynamic routes like  /pages/blog/[slug].js
		'!pages/_*.{js,ts,jsx,tsx}',
		'!pages/api',
		'!pages/404.{js,ts,jsx,tsx}'
	]);

	const products = [
		'/products/temattic'
	]; // hardcoded for now

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${[...pages, ...products]
			.map(page => {
				const path = page
					.replace('pages', '')
					.replace('/index', '')
					.replace('data', '')
					.replace('.js', '')
					.replace('.md', '');
				const route = path === '/index' ? '' : path;

				return `
					<url>
							<loc>${`https://luizov.com${route}`}</loc>
					</url>
        `;
			})
			.join('')}
        </urlset>
    `;

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	});

	// eslint-disable-next-line no-sync
	fs.writeFileSync('public/sitemap.xml', formatted);
})()
