import Link from 'next/link';
import cn from 'classnames';

export default function LogoFooter() {
	return (
		<Link href="/">
			<a className="flex items-center">
				<DynamicSvgLogomark className="w-6" />
			</a>
		</Link>
	)
}

function DynamicSvgLogomark({ className, ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 150 150"
			className={cn(
				'text-blue-9 dark:text-blueDark-9',
				className
			)}
			fill="none"
			{...props}
		>
			<path fill="currentColor" fillRule="evenodd" d="M75 0C19.5 0 0 19.5 0 75s19.5 75 75 75 75-19.5 75-75S130.5 0 75 0Zm0 11c-47.36 0-64 16.64-64 64s16.64 64 64 64 64-16.64 64-64-16.64-64-64-64Z" clipRule="evenodd" />
		</svg>
	)
}
