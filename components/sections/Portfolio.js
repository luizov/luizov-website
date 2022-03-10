import Image from 'next/image';

export default function PortfolioCTA() {
	return (
		<div className="relative bg-slate-2 dark:bg-slateDark-2 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
			<div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:max-w-6xl">
				<div>
					<h2 className="text-base font-semibold tracking-wider text-blue-9 dark:text-blueDark-9 uppercase">
						Serverless
					</h2>
					<p className="h2 font-headings mt-2 text-slate-12 dark:text-slateDark-12">
						No server? No problem.
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-slate-11 dark:text-slateDark-11">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
					</p>
				</div>
				<div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
					<img className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg" alt="" />
				</div>
			</div>
		</div>
	)
}
