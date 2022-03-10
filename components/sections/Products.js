import Link from 'next/link';
import Image from 'next/image';

const PRODUCT_LIST = [
	{
		name: 'Temattic',
		description: 'Modern themes and templates for your next web project.',
		imageSrc: '/products/cover-temattic.jpg',
		imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
		href: '/temattic',
		color: 'text-white',
		background: 'bg-slate-5',
	},
	{
		name: 'Lograpid',
		description: 'Coming soon',
		imageSrc: '/products/coming-soon-2.jpg',
		imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
		href: 'https://lograpid.com',
		color: 'text-slate-11',
		background: 'bg-slate-4',
	},
	{
		name: 'Tipsterwise',
		description: 'Coming soon',
		imageSrc: '/products/3.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: 'https://tipsterwise.com',
		color: 'text-slate-3',
		background: 'bg-slate-12',
	},
];

export const Product = ({ title, image, alt, href, description, color, background }) => {
	if (href.startsWith('/')) {
		return (
			<div className="group relative sm:p-6 rounded-2xl sm:border border-slate-7 dark:border-slateDark-7 sm:hover:border-blue-9 sm:dark:hover:border-blueDark-9 dark:bg-slateDark-3 dark:hover:bg-slateDark-4 dark:active:bg-slateDark-5 sm:shadow-sm transition duration-300 ease-in-out">
				<div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-8 bg-slate-3 dark:bg-slateDark-3 rounded-xl overflow-hidden group-hover:scale-[0.98] transition duration-300 ease-in-out">
					<Image
						src={image}
						alt={alt}
						layout="fill"
						className="w-full h-full object-center object-cover group-hover:scale-110 transition duration-300 ease-in-out"
					/>
				</div>
				<h3 className="mt-6 h4 font-headings text-slate-12 dark:text-slateDark-12">
					<a href={href} className="flex items-center">
						<span className="absolute inset-0" />
						{title}
					</a>
				</h3>
				<p className="text-base text-slate-11 dark:text-slateDark-11">
					{description}
				</p>
			</div>
		)
	}

	return (
		<div className="group relative sm:p-6 rounded-2xl sm:border border-slate-7 dark:border-slateDark-7 sm:hover:border-blue-9 sm:dark:hover:border-blueDark-9 dark:bg-slateDark-4 dark:hover:bg-slateDark-5 dark:active:bg-slateDark-6 sm:shadow-sm transition duration-300 ease-in-out">
			<div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-8 bg-slate-3 dark:bg-slateDark-3 rounded-xl overflow-hidden group-hover:scale-[0.98] transition duration-300 ease-in-out">
				<Image
					src={image}
					alt={alt}
					layout="fill"
					className="w-full h-full object-center object-cover group-hover:scale-110 transition duration-300 ease-in-out"
				/>
			</div>
			<h3 className="mt-6 h4 font-headings text-slate-12 dark:text-slateDark-12">
				<a href={href} className="flex items-center">
					<span className="absolute inset-0" />
					{title}
					<svg
						className="inline-flex ml-2 fill-current w-7 h-7"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
					</svg>
				</a>
			</h3>
			<p className="text-base text-slate-11 dark:text-slateDark-11">
				{description}
			</p>
		</div>
	)
}

const ProductFull = ({ title, image, alt, href, description, color, background }) => {
	if (href.startsWith('/')) {
		return (
			<div className="group aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-1 rounded-md overflow-hidden hover:scale-95 transition duration-300 ease-in-out">

				{/* image */}
				<div className="bg-slate-3 dark:bg-slateDark-3 overflow-hidden">
					<Image
						src={image}
						alt={alt}
						layout="fill"
						className="w-full h-full object-center object-cover"
						quality="100"
					/>
				</div>
				{/* overlay */}
				<div aria-hidden="true" className={`${background} opacity-10`}></div>

				<div className="p-4 sm:py-6 sm:px-12 flex items-end">
					<div>
						<h3 className={`${color} text-3xl font-medium tracking-tight filter drop-shadow-md`}>
							<Link href={href} passHref>
								<a>
									<span className="absolute inset-0"></span>
									{title}
								</a>
							</Link>
						</h3>
						<p aria-hidden="true" className={`mt-1 text-base ${color} opacity-70 filter drop-shadow-sm`}>
							{description}
						</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="group relative sm:p-6 rounded-md sm:hover:bg-slate-4 transition duration-300 ease-in-out">
			<div className="relative w-full h-80 bg-slate-3 rounded-md overflow-hidden group-hover:opacity-90 group-hover:scale-95 sm:aspect-w-16 sm:aspect-h-6 transition duration-300 ease-in-out">
				<Image
					src={image}
					alt={alt}
					layout="fill"
					className="w-full h-full object-center object-cover group-hover:scale-105 transition duration-300 ease-in-out"
				/>
			</div>
			<h3 className="mt-6 text-3xl font-medium text-slate-12">
				<a href={href} className="flex items-center">
					<span className="absolute inset-0" />
					{title}
					<svg
						className="inline-flex ml-2 fill-current w-7 h-7"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
					</svg>
				</a>
			</h3>
			<p className="text-base">
				{description}
			</p>
		</div>
	)
}

const ProductCard = ({ title, image, alt, href, description, color, background }) => {
	return (
		<div className={`${background} group relative flex flex-row justify-between rounded-md overflow-hidden shadow-sm transition duration-500 ease-in-out`}>

			{/* Left Side */}
			<div className="flex flex-col max-w-sm p-8">
				<h3 className={`${color} text-3xl font-semibold`}>
					<a href={href} className="flex items-center">
						<span className="absolute inset-0" />
						{title}
						<svg
							aria-hidden="true"
							focusable="false"
							className="inline-flex ml-2 fill-current w-7 h-7"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
						</svg>
					</a>
				</h3>
				<p className={`${color} text-opacity-60 text-xl`}>
					{description}
				</p>
			</div>

			{/* Right Side */}
			<div className="absoulute bottom-0 flex p-8 pb-0">
				{/* Desktop */}
				<div className="relative w-96 h-full sm:aspect-w-16 sm:aspect-h-12 overflow-hidden">
					<Image
						src={image}
						alt={alt}
						layout="fill"
						className="w-full h-full object-bottom object-cover"
					/>
				</div>
			</div>
		</div>
	)
}

export default function Products() {
	return (
		<section id="products" className="relative py-20 bg-slate-2 border-t border-b border-slate-6 dark:bg-slateDark-1 dark:border-slateDark-6 overflow-hidden">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<h2 className="h2 font-headings text-slate-12 dark:text-slateDark-12">
					Products
				</h2>
				<div className="mt-1 text-2xl tracking-tight">
					Creations I Have Made in the Past
				</div>
				<div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-6">
					{PRODUCT_LIST.map((entry) => (
						<Product
							key={entry.name}
							title={entry.name}
							image={entry.imageSrc}
							alt={entry.imageAlt}
							href={entry.href}
							description={entry.description}
							color={entry.color}
							background={entry.background}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
