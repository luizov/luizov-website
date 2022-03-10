import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

export default function NavItem({ href, children }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<li>
			<Link href={href}>
				<a
					className={cn(
						isActive
							? 'text-slate-11 dark:text-slateDark-11'
							: 'text-slate-11 dark:text-slateDark-11',
						'inline-block px-4 py-2 rounded-lg font-medium hover:bg-slate-4 dark:hover:bg-slateDark-4 transition-all'
					)}
				>
					{children}
				</a>
			</Link>
		</li>
	)
}
