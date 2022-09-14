import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products';

export function ProductCard({
	name,
	href,
	description,
	imageSrc,
	imageAlt,
}) {
	return (
		<article className="relative group overflow-hidden transition-all">

			<div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-slate-2">
				<Image
					className="w-full h-full object-center object-cover group-hover:scale-105 duration-300 transition-transform"
					layout="fill"
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
			<div className="mt-4 flex items-center justify-between text-base font-medium text-slate-12 dark:text-whiteA-12 space-x-8">
				<h3 className="h4 font-headings">
					<a href={href} target="_blank" rel="noreferrer">
						<span aria-hidden="true" className="absolute inset-0" />
						{name}
					</a>
				</h3>
			</div>
			<p className="mt-2 pr-16 text-xl lg:text-2xl dark:text-whiteA-11">{description}</p>
		</article>
	)
}

export function Product({
	name,
	href,
	description,
	tags,
	imageSrc,
	imageAlt,
	backgroundSrc
}) {

	if (href.startsWith('/')) {
		return (
			<article className="relative sm:h-full group bg-white dark:bg-slateDark-4 rounded-md overflow-hidden ring-2 ring-blue-9 ring-opacity-5 dark:ring-0 shadow-md hover:shadow-lg active:shadow-sm transition-all">

				{/* Card Decorative background image and gradient */}
				<div aria-hidden="true" className="absolute inset-0">
					<Image
						className="w-full h-full object-center object-cover group-hover:scale-150 duration-500 transition-transform"
						layout="fill"
						src={imageSrc}
						alt={imageAlt}
					/>
					<div className="absolute inset-0 bg-white bg-opacity-40 dark:bg-blueDark-4 dark:bg-opacity-30"></div>
					<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-blueDark-4 dark:via-blueDark-4/80"></div>
					{/* <div className="absolute inset-0 rounded-[.5rem] shadow-inset"></div> */}
				</div>

				{/* <!-- Card Content --> */}
				<div className="relative h-full flex flex-col justify-between py-8 px-6 lg:py-12 lg:px-10">
					{backgroundSrc && (
						<div className="relative mx-auto h-24 w-24 lg:w-24 lg:h-24 overflow-hidden group-hover:scale-105 group-hover:-rotate-2 group-hover:-translate-x-1 transition-transform duration-300">
							<Image
								layout="fill"
								src={backgroundSrc}
								alt={imageAlt}
								quality="100"
							/>
						</div>
					)}

					<div className="flex flex-col space-y-8 justify-center items-center text-center pt-12">
						<div className="space-y-1">
							<h3 className="h4 font-headings text-slate-12 dark:text-whiteA-12">
								<Link href={href}>
									<a>
										<span className="absolute inset-0" />
										{name}
									</a>
								</Link>
							</h3>
							<p className="text-lg lg:max-w-xs dark:text-whiteA-11">
								{description}
							</p>
						</div>

						{tags && (
							<ul role="list" className="flex gap-2 flex-wrap">
								{tags.map(tag => (
									<li key={tag}>
										<span
											className="inline-flex py-1 pb-1.5 px-3 text-sm text-slate-12 bg-slate-2 rounded-md border border-slate-6 dark:text-whiteA-12 dark:bg-white dark:bg-opacity-5 dark:border-blueDark-6 dark:border-opacity-10 whitespace-nowrap select-none">
											{tag}
										</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</article>
		)
	}

	return (
		<article className="relative sm:h-full group bg-white dark:bg-blueDark-4 rounded-md overflow-hidden ring-2 ring-blue-9 ring-opacity-5 dark:ring-0 shadow-md hover:shadow-lg active:shadow-sm transition-all">

			{/* Card Decorative background image and gradient */}
			<div aria-hidden="true" className="absolute inset-0">
				<Image
					className="w-full h-full object-center object-cover group-hover:scale-150 duration-300 transition-transform"
					layout="fill"
					src={imageSrc}
					alt={imageAlt}
				/>
				<div className="absolute inset-0 bg-white bg-opacity-40 dark:bg-blueDark-4 dark:bg-opacity-30"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-blueDark-4 dark:via-blueDark-4/80"></div>
				{/* <div className="absolute inset-0 rounded-[.5rem] shadow-inset"></div> */}
			</div>

			{/* <!-- Card Content --> */}
			<div className="relative h-full flex flex-col justify-between py-8 px-6 lg:py-12 lg:px-10">
				{backgroundSrc && (
					<div className="relative mx-auto h-24 w-24 lg:w-24 lg:h-24 overflow-hidden group-hover:scale-105 group-hover:-rotate-2 group-hover:-translate-x-1 transition-transform duration-300">
						<Image
							layout="fill"
							src={backgroundSrc}
							alt={imageAlt}
							quality="100"
						/>
					</div>
				)}

				<div className="flex flex-col space-y-8 justify-center  pt-24">
					<div className="space-y-1">
						<h3 className="h4 font-headings text-slate-12 dark:text-whiteA-12">
							<a href={href} target="_blank" rel="noreferrer">
								<span className="absolute inset-0" />
								{name}
							</a>
						</h3>
						<p className="text-lg lg:max-w-xs dark:text-whiteA-11">
							{description}
						</p>
					</div>

					{tags && (
						<ul role="list" className="flex gap-2 flex-wrap">
							{tags.map(tag => (
								<li key={tag}>
									<span
										className="inline-flex py-1 pb-1.5 px-3 text-sm text-slate-12 bg-slate-2 rounded-md border border-slate-6 dark:text-whiteA-12 dark:bg-white dark:bg-opacity-5 dark:border-blueDark-6 dark:border-opacity-10 whitespace-nowrap select-none">
										{tag}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</article>
	)
}

export default function Products() {
	return (
		<section className="section bg-transparent dark:bg-transparent overflow-hidden">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-8 pb-8 border-b border-slate-6 dark:border-blueDark-6">
					<h2 id="products" className="h2 font-headings text-slate-12 dark:text-whiteA-12 mb-2">
						Products
					</h2>
					<p className="text-xl lg:text-2xl">
						Recent projects that I loved working on
					</p>
				</header>
				<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-6 lg:gap-y-14">
					{products.map((entry) => (
						<ProductCard
							key={entry.name}
							name={entry.name}
							href={entry.href}
							description={entry.description}
							imageSrc={entry.imageSrc}
							imageAlt={entry.imageAlt}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
