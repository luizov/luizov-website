import Link from 'next/link';
import Image from 'next/image';

const PRODUCT_LIST = [
    {
        name: 'Octatheme',
        description: 'Coming soon',
        imageSrc: '/products/1.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/octatheme',
    },
    {
        name: 'Lograpid',
        description: 'Coming soon',
        imageSrc: '/products/2.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'https://lograpid.com',
    },
    {
        name: 'Tipsterwise',
        description: 'Coming soon',
        imageSrc: '/products/3.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://tipsterwise.com',
    },
];

export const Product = ({ title, image, alt, href, description }) => {
    if (href.startsWith('/')) {
        return (
            <Link href={href} passHref>
                <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-90 group-hover:scale-95 sm:aspect-w-16 sm:aspect-h-9 transition duration-500 ease-in-out">
                        <Image
                            src={image}
                            alt={alt}
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <h3 className="mt-6 text-3xl font-medium text-electric-900">
                        <a href="##">
                            <span className="absolute inset-0" />
                            {title}
                        </a>
                    </h3>
                    <p className="text-base text-electric-400">
                        {description}
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-90 group-hover:scale-95 sm:aspect-w-16 sm:aspect-h-9 transition duration-500 ease-in-out">
                <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <h3 className="mt-6 text-3xl font-medium text-electric-900">
                <a href={href} className="flex items-center">
                    <span className="absolute inset-0" />
                    {title}
                    <svg
                        className="inline-flex ml-2 fill-current w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
                    </svg>
                </a>
            </h3>
            <p className="text-base text-electric-400">
                {description}
            </p>
        </div>
    )
}

export default function Products() {
    return (
        <section className="relative py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-electric-700 font-headings font-semibold tracking-tight">
                    Products
                </h2>
                <div className="mt-1 text-2xl font-headings tracking-tight text-electric-300">Things I Have Made in the Past
                </div>
                <div className="mt-12 space-y-16 lg:grid lg:grid-cols-1 lg:gap-x-6">
                    {PRODUCT_LIST.map((entry) => (
                        <Product
                            key={entry.name}
                            title={entry.name}
                            image={entry.imageSrc}
                            alt={entry.imageAlt}
                            href={entry.href}
                            description={entry.description}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}