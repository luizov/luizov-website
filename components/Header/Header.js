import Logo from '@/components/Logo';
import NavItem from '@/components/NavItem';
import NavMenu from '@/components/NavMenu';
import NavMenuDesktop from '@/components/NavMenuDesktop';

export default function Header() {
	return (
		<header>
			<div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 flex justify-between items-center border-b border-slate-6 dark:border-blueDark-6">

				{/* <!-- Logo --> */}
				<Logo />


				{/* <!-- Mobile Menu --> */}
				<div className="md:hidden">
					<NavMenu />
				</div>

				{/* <!-- Desktop Nav --> */}
				<nav className="hidden md:flex items-center">
					<ul className="flex space-x-1">
						<NavItem href="/products">Products</NavItem>
						<NavItem href="/concepts">Concepts</NavItem>
						<NavMenuDesktop />
					</ul>
				</nav>
			</div>
		</header>
	)
}
