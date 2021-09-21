import Link from 'next/link';
import Image from 'next/image';
import Progress from './Progress';
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-6 sm:py-8 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Luizov logo"
                width={48}
                height={48}
                priority="true"
              />
            </a>
          </Link>
          <span className="text-lg text-mauve-11 dark:text-mauveDark-10 tracking-tight font-medium hidden sm:block">
            Dimitar Luizov
          </span>
        </div>

        {/*        <Progress /> */}



 {/*        <ul className="flex">
          <NavItem href="/products">Products</NavItem>
          <NavItem href="/articles">Articles</NavItem>
          <NavItem href="/concepts">Concepts</NavItem>
        </ul> */}
        <NavMenu />


      </nav>
    </header>

  )
}