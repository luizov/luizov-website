import Link from 'next/link';

export default function NavItem({ href, isActive, children }) {
    return (
        <li>
            <Link href={href}>
                <a className={`block px-4 py-2 mr-2 rounded-md font-headings font-medium text-mauve-11 hover:text-mauve-12 ${isActive ? 'bg-mauve-3 text-mauve-12' : ''}`} >
                    {children}
                </a>
            </Link>
        </li>
    )
}