import Link from 'next/link';
import { classNames } from '../../lib/utils';

const BUTTON_VARIANTS = [
    
];

export default function Button({ children, type, href, variant, onClick, disabled }) {

    if (onClick || !href) {
        return (
            <button
                className={classes}
                type={type === 'submit' ? 'submit' : 'button'}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }

    if (href.startsWith('/')) {
        return (
            <Link href={href} passHref>
                <a>
                    <button
                        className={classNames()}
                        type={type === 'submit' ? 'submit' : 'button'}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                </a>
            </Link>
        )
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
        >
            {children}
        </a>
    )
}