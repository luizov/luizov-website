import Link from 'next/link';
import Image from 'next/image';
import Progress from '../components/Progress';

export default function Logotype() {
    return (
        <Link href="/">
            <a className="relative flex items-center z-10">
                <Image
                    src="/logotype.svg"
                    alt="Luizov logotype"
                    width={64}
                    height={24}
                    priority="true"
                    quality={100}
                />
            </a>
        </Link>
    )
}