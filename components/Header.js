import Logo from './Logo';
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export default function Header() {
	return (
		<header>
			<div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-2 flex justify-between items-center border-b border-slate-6 dark:border-slateDark-6">

				{/* <!-- Logo --> */}
				<Logo />

				{/* <!-- Mobile Menu --> */}
				<div className="md:hidden">
					<NavMenu />
				</div>

				{/* <!-- Desktop Nav --> */}
				<nav className="hidden md:flex items-center">
					<ul className="flex">
						<NavItem href="/products">Products</NavItem>
						<NavItem href="/articles">Articles</NavItem>
						<NavItem href="/concepts">Concepts</NavItem>
					</ul>
					{/* <NavMenu /> */}
				</nav>
			</div>
		</header>

	)
}
