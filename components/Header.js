import Link from 'next/link';
import Image from 'next/image';
import Progress from './Progress';
import Logotype from './Logotype';
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center py-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 border-b border-mauve-6 dark:border-mauveDark-6">
                <div className="flex items-center space-x-2">
                    <Progress />
                    <Logotype />
                </div>



                {/*               <ul className="flex">
                    <NavItem href="/products">Products</NavItem>
                    <NavItem href="/articles">Articles</NavItem>
                    <NavItem href="/concepts">Concepts</NavItem>
                </ul> */}
                <NavMenu />


            </nav>
        </header>

    )
}