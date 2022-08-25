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
					<DynamicSvgLogotype className="h-auto" />
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
			viewBox="0 0 856 150"
			fill="none"
			className={cn(
				'text-slate-12 dark:text-white',
				className
			)}
			{...props}
		>
			<path d="M6.656 122H26.24V29.84H6.656V122ZM81.646 92.688C81.646 101.52 76.782 108.176 69.23 108.176C62.318 108.176 58.99 103.824 58.99 94.992V53.136H39.406V98.96C39.406 116.112 49.006 124.048 62.062 124.048C70.382 124.048 77.166 120.464 81.646 112.784V122H101.23V53.136H81.646V92.688ZM114.531 46.224H134.115V29.84H114.531V46.224ZM114.531 122H134.115V53.136H114.531V122ZM144.465 122H205.009V107.152H167.633L202.961 67.984V53.136H145.873V67.984H179.793L144.465 107.152V122ZM244.504 124.048C264.984 124.048 278.424 110.864 278.424 87.568C278.424 65.04 265.368 50.96 244.504 50.96C224.024 50.96 210.712 64.144 210.712 87.568C210.712 110.224 223.64 124.048 244.504 124.048ZM244.504 108.176C235.672 108.176 230.808 100.88 230.808 87.568C230.808 74.128 235.544 66.832 244.504 66.832C253.464 66.832 258.328 74.256 258.328 87.568C258.328 101.008 253.592 108.176 244.504 108.176ZM304.701 122H328.893L353.213 53.136H333.117L319.037 98.704L317.245 107.024L315.453 98.704L301.501 53.136H280.381L304.701 122Z" fill="currentColor" />
		</svg>
	)
}
