import Link from 'next/link';
import LogoFooter from './LogoFooter';
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
			<a className="flex items-center font-base font-medium text-slate-11 dark:text-whiteA-11 hover:text-blue-9 dark:hover:text-blueDark-11 hover:bg-blue-4 dark:hover:bg-blueDark-4 rounded-md px-3 py-2 transition-all">
				{children}
			</a>
		</Link>
	)
};

const ExternalLink = ({ href, children }) => {
	return (
		<a
			className="flex items-center font-base font-medium text-slate-11 dark:text-whiteA-11 hover:text-blue-9 dark:hover:text-blueDark-11 hover:bg-blue-4 dark:hover:bg-blueDark-4 rounded-md px-3 py-2 transition-all"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	)
};

export default function Footer() {
	return (
		<footer className="section bg-white dark:bg-transparent border-t border-slate-7 dark:border-blueDark-7">
			<div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between">
				<div className="flex items-center space-x-3">
					<LogoFooter />
					<div className="flex items-center space-x-1 text-slate-11 dark:text-whiteA-12">
						<IconCopyright />
						<span>
							{new Date().getFullYear()}&nbsp;Dimitar Luizov
							{' · '}
							<a
								className="text-xs font-medium uppercase underline underline-offset-4 decoration-2 hover:decoration-4 decoration-blue-9 dark:decoration-yellowDark-9 text-slate-12 dark:text-whiteA-12 transition-all"
								href="https://github.com/luizov/luizov-website"
								target="_blank"
								rel="noreferrer"
							>
								Source
							</a>
						</span>
					</div>
				</div>

				<div className="mt-24 flex md:mt-0 md:flex-shrink-0">
					<div className="grid grid-cols-2 gap-12 sm:gap-8">
						<div className="flex flex-col space-y-1">
							<h4 className="pl-3 mb-2 uppercase text-sm font-headings font-medium tracking-wide text-slate-12 dark:text-whiteA-12">
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
							<h4 className="pl-3 mb-2 uppercase text-sm font-headings font-medium tracking-wide text-slate-12 dark:text-whiteA-12">
								Socials
							</h4>
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
