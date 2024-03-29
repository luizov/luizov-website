import { useKBar } from 'kbar';
import { IconDown, IconSearch } from '@/components/base/Icons';

export default function HomeHeader({ title, description, children }) {
	const { query } = useKBar();

	function handleClick(e) {
		e.preventDefault();
		const element = document.getElementById('products');
		element.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	}

	return (
		<section className="section">
			<div className="relative max-w-5xl mx-auto px-4 sm:px-6">
				<div className="flex flex-col sm:items-center sm:text-center gap-y-12">
					<h1 className="display-4 text-slate-12 dark:text-whiteA-12 sm:max-w-3xl">
						{title}
					</h1>
					{description &&
						<p className="text-slate-11 dark:text-whiteA-11 text-xl lg:text-2xl sm:max-w-4xl leading-8 lg:leading-9">
							{description}
						</p>
					}
					{children}
					<div className="sm:flex sm:justify-center lg:justify-start sm:space-x-6">

						<button
							onClick={handleClick}
							className="w-full sm:w-auto btn btn-xl btn-primary btn-shadow"
						>
							<IconDown className="-ml-2 mr-2" aria-hidden="true" />
							See my products
						</button>

						<button className="hidden sm:flex w-full sm:w-96 items-center text-left space-x-3 btn btn-xl btn-form btn-shadow" onClick={query.toggle}>
							<IconSearch className="flex-none" aria-hidden="true" />
							<span className="flex-auto dark:text-whiteA-12">
								Quick search...
							</span>
							<kbd className="font-sans no-underline text-blackA-9 dark:text-whiteA-10">
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
