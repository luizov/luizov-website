import Link from 'next/link';

export default function NavItem({ href, isActive, children }) {
    return (
        <li>
            <Link href={href}>
                <a className={`block px-4 py-2 mr-2 rounded-md font-headings font-medium text-electric-400 hover:text-electric-900 ${isActive ? 'bg-electric-100 text-electric-900' : ''}`} >
                    {children}
                </a>
            </Link>
        </li>
    )
}