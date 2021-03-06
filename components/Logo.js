import Link from 'next/link';
import cn from 'classnames';

export default function Logo() {
	return (
		<div className="flex items-center space-x-2">

			{/* <!-- Logomark --> */}
			<Link href="/">
				<a className="relative flex items-center z-10">
					<DynamicSvgLogomark className="w-6" />
				</a>
			</Link>

			{/* <!-- Logotype --> */}
			<Link href="/">
				<a className="relative flex items-center z-10">
					<DynamicSvgLogotype className="h-4" />
				</a>
			</Link>
		</div>
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

function DynamicSvgLogotype({ className, ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 400 106"
			fill="none"
			className={cn(
				'text-slate-12 dark:text-white',
				className
			)}
			{...props}
		>
			<path fill="currentColor" d="M25.823 13.386V98H6.82V13.386h19.002Zm32.361 85.75c-4.078 0-7.434-.649-10.069-1.948-2.598-1.3-4.637-3.05-6.117-5.251-1.444-2.238-2.472-4.728-3.086-7.47a42.207 42.207 0 0 1-.866-8.608v-35.35h19.272v30.206c0 2.202.217 4.241.65 6.118.433 1.877 1.281 3.393 2.544 4.547 1.3 1.12 3.158 1.679 5.576 1.679 2.418 0 4.44-.668 6.063-2.003 1.624-1.372 2.852-3.104 3.682-5.197.866-2.13 1.299-4.35 1.299-6.659l4.439 4.33c0 3.79-.541 7.255-1.624 10.395-1.083 3.104-2.635 5.792-4.656 8.066-2.02 2.274-4.475 4.042-7.362 5.305-2.851 1.227-6.1 1.84-9.745 1.84ZM77.132 98V40.508h19.272V98H77.132Zm29.615 0V40.508h19.11V98h-19.11Zm9.528-65.558c-2.887 0-5.431-.758-7.633-2.274-2.165-1.515-3.248-3.663-3.248-6.442 0-2.815 1.083-4.962 3.248-6.442 2.202-1.516 4.746-2.273 7.633-2.273 2.923 0 5.468.757 7.633 2.273 2.166 1.48 3.248 3.627 3.248 6.442 0 2.815-1.082 4.98-3.248 6.497-2.165 1.48-4.71 2.22-7.633 2.22Zm37.906 50.833h30.261V98h-50.778V84.141l29.341-29.666.487.704h-28.8v-14.67h49.047v13.858l-29.071 29.558-.487-.65ZM221.492 99.3c-6.352 0-11.946-1.263-16.782-3.79-4.8-2.562-8.571-6.099-11.314-10.61-2.707-4.511-4.06-9.708-4.06-15.59 0-5.92 1.353-11.116 4.06-15.592 2.743-4.511 6.514-8.03 11.314-10.556 4.836-2.526 10.43-3.79 16.782-3.79s11.928 1.264 16.728 3.79c4.836 2.526 8.608 6.045 11.314 10.556 2.743 4.476 4.115 9.672 4.115 15.591 0 5.883-1.372 11.08-4.115 15.591-2.706 4.511-6.478 8.048-11.314 10.61-4.8 2.527-10.376 3.79-16.728 3.79Zm0-14.887c2.599 0 4.836-.632 6.713-1.895 1.877-1.263 3.32-3.013 4.331-5.25 1.01-2.274 1.516-4.927 1.516-7.959 0-3.067-.506-5.72-1.516-7.958-1.011-2.237-2.454-3.97-4.331-5.197-1.877-1.227-4.114-1.84-6.713-1.84-2.562 0-4.8.613-6.713 1.84-1.876 1.227-3.32 2.96-4.33 5.197-1.011 2.238-1.516 4.89-1.516 7.958 0 3.032.505 5.684 1.516 7.958 1.01 2.238 2.454 3.988 4.33 5.251 1.913 1.264 4.151 1.895 6.713 1.895Zm94.652-43.904L299.308 98h-26.147L256 40.508h19.922l11.856 52.35h-3.032l11.423-52.35h19.975Z" />
		</svg>
	)
}
