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
							? 'text-slate-12 dark:text-whiteA-12'
							: 'text-slate-12 dark:text-whiteA-12',
						'inline-block px-4 py-2 rounded-md font-medium hover:bg-blue-4 hover:text-blue-9 dark:hover:bg-blueDark-4 dark:hover:text-blueDark-9 active:bg-blue-5 active:text-blue-11 dark:active:bg-blueDark-5 dark:active:text-blueDark-11'
					)}
				>
					{children}
				</a>
			</Link>
		</li>
	)
}
