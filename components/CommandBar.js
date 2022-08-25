import * as React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {
	KBarAnimator,
	KBarProvider,
	KBarPortal,
	useMatches,
	KBarPositioner,
	KBarSearch,
	KBarResults,
} from 'kbar';
import {
	IconHome,
	IconArticles,
	IconProducts,
	IconBookmarks,
	IconConcepts,
	IconSettings,
	IconGithub,
	IconDribbble,
	IconTwitter,
	IconInstagram
} from './base/Icons';
import cn from 'classnames';

export default function CommandBar({ children }) {
	const router = useRouter();
	const { setTheme } = useTheme();

	const actions = [
		{
			id: "home",
			name: "Home",
			shortcut: ["h"],
			keywords: "go-home",
			section: 'Go to',
			perform: () => router.push('/'),
			icon: <IconHome />
		},
		{
			id: "articles",
			name: "Articles",
			shortcut: ["a"],
			keywords: "go-articles",
			section: 'Go to',
			perform: () => router.push('/articles'),
			icon: <IconArticles />
		},
		{
			id: "products",
			name: "Products",
			shortcut: ["p"],
			keywords: "go-products",
			section: 'Go to',
			perform: () => router.push('/products'),
			icon: <IconProducts />
		},
		{
			id: "concepts",
			name: "Design Concepts",
			shortcut: ["c"],
			keywords: "go-concepts",
			section: 'Go to',
			perform: () => router.push('/concepts'),
			icon: <IconConcepts />
		},
		{
			id: "bookmarks",
			name: "Bookmarks",
			shortcut: ["b"],
			keywords: "go-bookmarks",
			section: 'Go to',
			perform: () => router.push('/bookmarks'),
			icon: <IconBookmarks />
		},
		{
			id: 'theme',
			name: 'Change Theme...',
			shortcut: ['t'],
			keywords: 'interface color dark light',
			section: 'Preferences',
			icon: <IconSettings />
		},
		{
			id: 'theme-light',
			name: 'Light',
			shortcut: ['t', 'l'],
			keywords: 'theme',
			perform: () => setTheme('light'),
			parent: 'theme',
		},
		{
			id: 'theme-dark',
			name: 'Dark',
			shortcut: ['t', 'd'],
			keywords: 'theme',
			perform: () => setTheme('dark'),
			parent: 'theme',
		},
		{
			id: 'github',
			name: 'Github',
			shortcut: ['c', 'g'],
			keywords: 'go-github',
			section: 'Connect',
			perform: () => window.open('https://github.com/luizov', '_blank'),
			icon: <IconGithub />,
		},
		{
			id: 'instagram',
			name: 'Instagram',
			shortcut: ['c', 'i'],
			keywords: 'go-instagram',
			section: 'Connect',
			perform: () => window.open('https://instagram.com/octa.theme', '_blank'),
			icon: <IconInstagram />,
		},
		{
			id: 'twitter',
			name: 'Twitter',
			shortcut: ['c', 't'],
			keywords: 'go-twitter',
			section: 'Connect',
			perform: () => window.open('https://twitter.com/dimitarluizov', '_blank'),
			icon: <IconTwitter />,
		},
		{
			id: 'dribbble',
			name: 'Dribbble',
			shortcut: ['c', 'd'],
			keywords: 'go-dtibbble',
			section: 'Connect',
			perform: () => window.open('https://dribbble.com/luizov', '_blank'),
			icon: <IconDribbble />,
		},
	];

	return (
		<KBarProvider actions={actions}>
			<KBarPortal>
				<KBarPositioner className="fixed inset-0 z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80">
					<KBarAnimator className="max-w-3xl w-full bg-slate-1 dark:bg-blueDark-2 rounded-md shadow-lg border border-solid border-slate-6 dark:border-blueDark-6 overflow-hidden">
						<KBarSearch
							className="appearance-none rounded-t-lg w-full py-5	dark:bg-blueDark-3 px-4 text-slate-9 dark:text-whiteA-12 leading-tight focus:outline-none focus:shadow-outline placeholder-slate-9 dark:placeholder-whiteA-11"
						/>
						<div className="px-0 border-t boder-slate-6 dark:border-blueDark-6">
							<RenderResults />
						</div>
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
			{children}
		</KBarProvider>
	)
}

function RenderResults() {
	const { results } = useMatches();

	return (
		<KBarResults
			items={results}
			onRender={({ item, handlers, active }) =>
				typeof item === "string" ? (
					<div className="border-l-2 border-transparent px-4 py-4 font-medium text-xs uppercase tracking-wider text-slate-11 dark:text-whiteA-11">
						{item}
					</div>
				) : (
					<ResultItem
						action={item}
						handlers={handlers}
						active={active}
					/>
				)
			}
		/>
	);
}

const ResultItem = React.forwardRef(({ action, handlers, active }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				active
					? 'border-blue-9 bg-slate-4 text-slate-12 dark:border-blueDark-9 dark:bg-blueDark-4 dark:text-whiteA-12'
					: '',
				'px-4 py-2 flex items-center justify-between border-l-2 border-transparent cursor-pointer text-slate-11 dark:text-whiteA-11'
			)}
			{...handlers}
		>
			{action.icon}
			<span className="ml-4">{action.name}</span>
			{action.shortcut?.length > 0 && (
				<span className="ml-auto space-x-2">
					{action.shortcut.map(sc => (
						<Kbd key={sc}>{sc}</Kbd>
					))}
				</span>
			)}
		</div>
	);
});

ResultItem.displayName = 'ResultItem';

function Kbd({ children }) {
	return (
		<kbd className="px-2.5 py-1 inline-flex items-center justify-center select-none text-base font-mono font-medium rounded text-slate-11 bg-slate-2 dark:text-whiteA-11 dark:bg-skyDark-5 shadow">
			{children}
		</kbd>
	);
}
