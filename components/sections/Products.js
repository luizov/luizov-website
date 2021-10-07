import Link from 'next/link';
import Image from 'next/image';

const PRODUCT_LIST = [
    {
        name: 'Octatheme',
        description: 'Description coming soon',
        imageSrc: '/products/coming-soon-2.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/octatheme',
        color: 'text-white',
        background: 'bg-mauve-5',
    },
    {
        name: 'Lograpid',
        description: 'Coming soon',
        imageSrc: '/products/coming-soon-2.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'https://lograpid.com',
        color: 'text-mauve-11',
        background: 'bg-mauve-4',
    },
    {
        name: 'Tipsterwise',
        description: 'Coming soon',
        imageSrc: '/products/3.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://tipsterwise.com',
        color: 'text-mauve-3',
        background: 'bg-mauve-12',
    },
];

export const Product = ({ title, image, alt, href, description, color, background }) => {
    if (href.startsWith('/')) {
        return (
            <div className="group relative sm:p-6 rounded-md sm:border border-mauve-7 dark:border-mauveDark-7 sm:hover:bg-mauve-4 sm:dark:hover:bg-mauveDark-4 transition duration-300 ease-in-out">
                <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-6 bg-mauve-3 dark:bg-mauveDark-3 rounded-md overflow-hidden group-hover:opacity-90 group-hover:scale-95 transition duration-300 ease-in-out">
                    <Image
                        src={image}
                        alt={alt}
                        layout="fill"
                        className="w-full h-full object-center object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>
                <h3 className="mt-6 text-3xl font-medium text-mauve-12 dark:text-mauveDark-12">
                    <a href={href} className="flex items-center">
                        <span className="absolute inset-0" />
                        {title}
                    </a>
                </h3>
                <p className="text-base text-mauve-11 dark:text-mauveDark-11">
                    {description}
                </p>
            </div>
        )
    }

    return (
        <div className="group relative sm:p-6 rounded-md sm:border border-mauve-7 dark:border-mauveDark-7 sm:hover:bg-mauve-4 sm:dark:hover:bg-mauveDark-4 transition duration-300 ease-in-out">
            <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-6 bg-mauve-3 dark:bg-mauveDark-3 rounded-md overflow-hidden group-hover:opacity-90 group-hover:scale-95 transition duration-300 ease-in-out">
                <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                />
            </div>
            <h3 className="mt-6 text-3xl font-medium text-mauve-12 dark:text-mauveDark-12">
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
            <p className="text-base text-mauve-11 dark:text-mauveDark-11">
                {description}
            </p>
        </div>
    )
}

const ProductFull = ({ title, image, alt, href, description, color, background }) => {
    if (href.startsWith('/')) {
        return (
            <div className="group aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-1 rounded-md overflow-hidden hover:scale-95 transition duration-300 ease-in-out">

                {/* image */}
                <div className="bg-mauve-3 dark:bg-mauveDark-3 overflow-hidden">
                    <Image
                        src={image}
                        alt={alt}
                        layout="fill"
                        className="w-full h-full object-center object-cover"
                        quality="100"
                    />
                </div>
                {/* overlay */}
                <div aria-hidden="true" className={`${background} opacity-10`}></div>

                <div className="p-4 sm:py-6 sm:px-12 flex items-end">
                    <div>
                        <h3 className={`${color} text-3xl font-medium tracking-tight filter drop-shadow-md`}>
                            <Link href={href} passHref>
                                <a>
                                    <span className="absolute inset-0"></span>
                                    {title}
                                </a>
                            </Link>
                        </h3>
                        <p aria-hidden="true" className={`mt-1 text-base ${color} opacity-70 filter drop-shadow-sm`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="group relative sm:p-6 rounded-md sm:hover:bg-mauve-4 transition duration-300 ease-in-out">
            <div className="relative w-full h-80 bg-mauve-3 rounded-md overflow-hidden group-hover:opacity-90 group-hover:scale-95 sm:aspect-w-16 sm:aspect-h-6 transition duration-300 ease-in-out">
                <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                />
            </div>
            <h3 className="mt-6 text-3xl font-medium text-mauve-12">
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
            <p className="text-base">
                {description}
            </p>
        </div>
    )
}

const ProductCard = ({ title, image, alt, href, description, color, background }) => {
    return (
        <div className={`${background} group relative flex flex-row justify-between rounded-md overflow-hidden shadow-sm transition duration-500 ease-in-out`}>

            {/* Left Side */}
            <div className="flex flex-col max-w-sm p-8">
                <h3 className={`${color} text-3xl font-bold`}>
                    <a href={href} className="flex items-center">
                        <span className="absolute inset-0" />
                        {title}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            className="inline-flex ml-2 fill-current w-7 h-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
                        </svg>
                    </a>
                </h3>
                <p className={`${color} text-opacity-60 text-xl`}>
                    {description}
                </p>
            </div>

            {/* Right Side */}
            <div className="absoulute bottom-0 flex p-8 pb-0">
                {/* Desktop */}
                <div className="relative w-96 h-full sm:aspect-w-16 sm:aspect-h-12 overflow-hidden">
                    <Image
                        src={image}
                        alt={alt}
                        layout="fill"
                        className="w-full h-full object-bottom object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default function Products() {
    return (
        <section id="products" className="relative py-20 bg-mauve-1 border-t border-b border-mauve-6 dark:bg-mauveDark-1 dark:border-mauveDark-6 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-mauve-12 dark:text-mauveDark-12 font-semibold tracking-tight">
                    Products
                </h2>
                <div className="mt-1 text-2xl font-headings tracking-tight">
                    Creations I Have Made in the Past
                </div>
                <div className="mt-12 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6">
                    {PRODUCT_LIST.map((entry) => (
                        <Product
                            key={entry.name}
                            title={entry.name}
                            image={entry.imageSrc}
                            alt={entry.imageAlt}
                            href={entry.href}
                            description={entry.description}
                            color={entry.color}
                            background={entry.background}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}