import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import {
	IconCopyright,
	IconDribbble,
	IconGithub,
	IconInstagram,
	IconTwitter
} from '../components/base/Icons';

const FooterLink = ({ href, children }) => {
	return (
		<Link href={href}>
			<a className="flex items-center font-base text-slate-11 dark:text-slateDark-11 hover:text-slate-12 dark:hover:text-slateDark-12 hover:bg-slate-4 dark:hover:bg-slateDark-4 rounded-lg px-3 py-2 transition-all">
				{children}
			</a>
		</Link>
	)
};

const ExternalLink = ({ href, children }) => {
	return (
		<a
			className="flex items-center font-base text-slate-11 dark:text-slateDark-11 hover:text-slate-12 dark:hover:text-slateDark-12 hover:bg-slate-4 dark:hover:bg-slateDark-4 rounded-lg px-3 py-2 transition-all"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	)
};

export default function Footer() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	let logoMark;

	switch (resolvedTheme) {
		case 'light':
			logoMark = '/logo.svg';
			break;
		case 'dark':
			logoMark = '/logo-dark.svg';
			break;
		default:
			logoMark = '/logo.svg';
	}

	useEffect(() => setMounted(true), [])

	if (!mounted) return null;

	return (
		<footer className="relative py-20 border-t border-slate-6 dark:border-slateDark-6">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:justify-between">
				<div className="flex items-center space-x-3">
					<Link href="/">
						<a className="flex items-center">
							<Image
								src={logoMark}
								alt="Luizov logo"
								width={36}
								height={36}
								quality={100}
							/>
						</a>
					</Link>
					<div className="flex items-center space-x-1">
						<IconCopyright />
						<span>
							{new Date().getFullYear()}&nbsp;Dimitar Luizov
							{' · '}
							<a
								className="underline uppercase text-xs font-semibold text-slate-11 hover:text-slate-12 dark:text-slateDark-11 dark:hover:text-slateDark-12 transition ease-in"
								href="https://github.com/luizov/luizov-website"
								target="_blank"
								rel="noreferrer"
							>
								Source
							</a>
						</span>
					</div>
				</div>

				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
					<div className="grid grid-cols-2 gap-12 sm:gap-8">
						<div className="flex flex-col space-y-1">
							<h4 className="pl-3 mb-2 uppercase text-xs font-headings tracking-wider text-slate-10 dark:text-slateDark-11">
								Menu
							</h4>
							<FooterLink href="/">
								Home
							</FooterLink>
							<FooterLink href="/products">
								Products
							</FooterLink>
							<FooterLink href="/articles">
								Articles
							</FooterLink>
							<FooterLink href="/bookmarks">
								Bookmarks
							</FooterLink>
						</div>

						<div className="flex flex-col space-y-1">
							<h4 className="pl-3 mb-2 uppercase text-xs font-headings tracking-wider text-slate-10 dark:text-slateDark-11">Socials</h4>
							<ExternalLink href="https://github.com/luizov">
								<IconGithub className="mr-2" />
								GitHub
							</ExternalLink>
							<ExternalLink href="https://dribbble.com/luizov">
								<IconDribbble className="mr-2" />
								Dribbble
							</ExternalLink>
							<ExternalLink href="https://twitter.com/dimitarluizov">
								<IconTwitter className="mr-2" />
								Twitter
							</ExternalLink>
							<ExternalLink href="https://instagram.com/octa.theme">
								<IconInstagram className="mr-2" />
								Instagram
							</ExternalLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
