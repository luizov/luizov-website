import { useKBar } from 'kbar';
import { IconDown, IconSearch } from './base/Icons';

export default function HomeHeader({ title, description, children }) {
	const { query } = useKBar();

	return (
		<section className="relative py-20 pb-24 overflow-hidden">
			{/* 			<div aria-hidden="true" className="absolute inset-0">
				<div className="absolute inset-0 overflow-hidden">
					<img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" className="w-full h-full object-center object-cover" />
				</div>
				<div className="absolute inset-0 bg-white bg-opacity-75"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-slate-2 via-white"></div>
			</div> */}
			<div className="relative max-w-4xl mx-auto px-4 sm:px-6">
				<div className="flex flex-col sm:items-center text-center gap-y-8">
					<h1 className="display-4 text-slate-12 dark:text-slateDark-12 sm:max-w-3xl">
						{title}
					</h1>
					{description &&
						<p className="text-xl leading-relaxed sm:max-w-2xl lg:mx-0 tracking-normal">
							{description}
						</p>
					}
					{children}
					<div className="sm:flex sm:justify-center lg:justify-start sm:space-x-6">
						<a href="#products" className="w-full sm:w-auto btn btn-xl btn-primary btn-shadow">
							<IconDown className="-ml-2 mr-2" aria-hidden="true" />
							See my products
						</a>
						<button className="hidden sm:flex w-full sm:w-96 items-center text-left space-x-3 btn btn-xl btn-form shadow" onClick={query.toggle}>
							<IconSearch className="flex-none" aria-hidden="true" />
							<span className="flex-auto">
								Quick search...
							</span>
							<kbd className="font-sans no-underline">
								<abbr title="Control" className="no-underline">Ctrl </abbr>
								K
							</kbd>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
