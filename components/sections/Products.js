import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

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
			<article className="relative sm:h-full group bg-white dark:bg-slateDark-4 rounded-lg overflow-hidden ring-2 ring-black ring-opacity-5 dark:ring-0">

				{/* Card Decorative background image and gradient */}
				<div aria-hidden="true" className="absolute inset-0">
					<Image
						className="w-full h-full object-center object-cover group-hover:scale-150 duration-500 transition-transform"
						layout="fill"
						src={imageSrc}
						alt={imageAlt}
					/>
					<div className="absolute inset-0 bg-white bg-opacity-40 dark:bg-slateDark-4 dark:bg-opacity-30"></div>
					<div className="absolute inset-0 bg-gradient-to-t from-white via-white dark:from-slateDark-4 dark:via-slateDark-4"></div>
					<div className="absolute inset-0 rounded-[.5rem] shadow-inset"></div>
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
							<h3 className="h4 font-headings text-slate-12 dark:text-slateDark-12">
								<Link href={href}>
									<a>
										<span className="absolute inset-0" />
										{name}
									</a>
								</Link>
							</h3>
							<p className="text-lg lg:max-w-xs">{description}</p>
						</div>

						{tags && (
							<ul role="list" className="flex gap-2 flex-wrap">
								{tags.map(tag => (
									<li key={tag}>
										<span
											className="inline-flex py-1 pb-1.5 px-3 text-sm text-slate-12 bg-slate-2 rounded-md border border-slate-6 dark:text-slateDark-12 dark:bg-white dark:bg-opacity-5 dark:border-white dark:border-opacity-10 whitespace-nowrap select-none">
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
		<article className="relative sm:h-full group bg-white dark:bg-slateDark-4 rounded-lg overflow-hidden ring-2 ring-black ring-opacity-5 dark:ring-0">

			{/* Card Decorative background image and gradient */}
			<div aria-hidden="true" className="absolute inset-0">
				<Image
					className="w-full h-full object-center object-cover group-hover:scale-150 duration-500 transition-transform"
					layout="fill"
					src={imageSrc}
					alt={imageAlt}
				/>
				<div className="absolute inset-0 bg-white bg-opacity-40 dark:bg-slateDark-4 dark:bg-opacity-30"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-white via-white dark:from-slateDark-4 dark:via-slateDark-4"></div>
				<div className="absolute inset-0 rounded-[.5rem] shadow-inset"></div>
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
						<h3 className="h4 font-headings text-slate-12 dark:text-slateDark-12">
							<a href={href} target="_blank" rel="noreferrer">
								<span className="absolute inset-0" />
								{name}
							</a>
						</h3>
						<p className="text-lg lg:max-w-xs">{description}</p>
					</div>

					{tags && (
						<ul role="list" className="flex gap-2 flex-wrap">
							{tags.map(tag => (
								<li key={tag}>
									<span
										className="inline-flex py-1 pb-1.5 px-3 text-sm text-slate-12 bg-slate-2 rounded-md border border-slate-6 dark:text-slateDark-12 dark:bg-white dark:bg-opacity-5 dark:border-white dark:border-opacity-10 whitespace-nowrap select-none">
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
		<section className="section bg-slate-2 border-t border-slate-6 dark:bg-slateDark-1 dark:border-slateDark-6 overflow-hidden">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-8">
					<h2 id="products" className="h3 font-headings text-slate-12 dark:text-slateDark-12">
						Products
					</h2>
					<div className="mt-1 text-2xl tracking-tight">
						Most recent and interesting projects
					</div>
				</header>
				<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8">
					{products.map((entry) => (
						<Product
							key={entry.name}
							name={entry.name}
							href={entry.href}
							description={entry.description}
							tags={entry.tags}
							imageSrc={entry.imageSrc}
							imageAlt={entry.imageAlt}
							backgroundSrc={entry.backgroundSrc}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
