import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import cn from 'classnames';

export function ThemeChanger() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Switch
			checked={theme}
			onChange={toggleTheme}
			className={cn(
				theme === 'light'
					? 'bg-blackA-3'
					: 'bg-blackA-5',
				'relative inline-flex flex-shrink-0 h-[32px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
			)}
		>
			<span className="sr-only">Enable Dark mode</span>
			<span
				aria-hidden="true"
				className={cn(
					theme === 'dark'
						? 'translate-x-5 bg-blueDark-9'
						: 'translate-x-0 bg-blue-9',
					'pointer-events-none inline-flex h-[28px] w-[28px] justify-center items-center rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200'
				)}
			>
				{mounted && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="currentColor"
						className="w-4 h-4 text-blue-3 dark:text-blueDark-12 transition ease-in-out duration-200"
					>
						{theme === 'dark' ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						)}
					</svg>
				)}
			</span>
		</Switch>
	)
}

export function ThemeChangerDesktop() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Switch
			checked={theme}
			onChange={toggleTheme}
			className={cn(
				theme === 'light'
					? 'bg-blue-2'
					: 'bg-blackA-8',
				'relative group inline-flex items-center flex-shrink-0 h-[33px] w-[56px] border border-blue-7 dark:border-none dark:highlight-inner rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
			)}
		>
			<span className="sr-only">Enable Dark mode</span>
			<span
				aria-hidden="true"
				className={cn(
					theme === 'dark'
						? 'translate-x-[26px] bg-blueDark-5'
						: 'translate-x-[4px] bg-blue-9',
					'pointer-events-none flex h-[25px] w-[25px] justify-center items-center rounded-full transform highlight-white/20 dark:highlight-white/10 ring-0 transition ease-in-out duration-200'
				)}
			>
			</span>
		</Switch>
	)
}
