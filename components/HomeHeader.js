import Link from 'next/link';

export default function HomeHeader({ title, description, children }) {
    return (
        <section className="relative py-20 pb-24 overflow-hidden">
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl sm:text-6xl text-mauve-12 dark:text-mauveDark-12 font-headings font-bold tracking-tight sm:max-w-3xl">
                        {title}
                    </h1>
                    {description &&
                        <p className="mt-3 sm:mt-5 text-lg sm:text-2xl leading-relaxed sm:max-w-2xl md:mt-5 md:text-2xl lg:mx-0">
                            {description}
                        </p>
                    }
                    {children}
                    <div className="flex flex-col sm:flex-row items-center space-x-2 mt-8">
                        <a
                            href="#products"
                            className="btn btn-xl btn-primary">
                            <svg className="-ml-2 mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="currentColor" />
                            </svg>
                            See my products
                        </a>
                        <Link href="/concepts" passHref>
                            <a
                                className="btn btn-xl text-blue-500 hover:text-blue-600 dark:text-violetDark-10 dark:hover:text-violetDark-11">
                                Or design concepts
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}