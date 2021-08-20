import Link from 'next/link';
import Image from 'next/image';
import Progress from './Progress';
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-6 container">

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

        {/*        <Progress /> */}


        {/* 
      <ul className="flex">
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/work">Projects</NavItem>
        <NavItem href="/work">Playground</NavItem>
      </ul> */}

        <NavMenu />

      </nav>
    </header>

  )
}