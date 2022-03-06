import Link from 'next/link';

export default function NavItem({ href, isActive, children }) {
	return (
		<li>
			<Link href={href}>
				<a className={`block px-4 py-2 mr-2 rounded-md font-medium text-slate-11 dark:text-slateDark-11 hover:text-blue-500 dark:hover:text-blueDark-10 ${isActive ? 'bg-slate-3 text-slate-12' : ''}`} >
					{children}
				</a>
			</Link>
		</li>
	)
}
