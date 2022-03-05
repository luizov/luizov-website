export default function HomeHeader({ title, description, children }) {
    return (
        <section className="relative py-20 pb-24 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center gap-y-8">
                    <h1 className="display-4 text-mauve-12 dark:text-mauveDark-12 sm:max-w-3xl">
                        {title}
                    </h1>
                    {description &&
                        <p className="text-lg sm:text-2xl leading-relaxed sm:max-w-2xl lg:mx-0 tracking-normal">
                            {description}
                        </p>
                    }
                    {children}
                    <div className="sm:flex sm:justify-center lg:justify-start sm:space-x-6">
                        <a
                            href="#products"
                            className="w-full sm:w-auto btn btn-xl btn-primary btn-shadow">
                            <svg className="-ml-2 mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="currentColor" />
                            </svg>
                            See my products
                        </a>
                        <button className="hidden sm:flex w-full sm:w-72 btn btn-xl btn-secondary shadow">
                            <svg className="-ml-2 mr-2 h-6 w-6 flex-none text-mauve-8 dark:text-slate-400" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle>
                            </svg>
                            <span className="flex-auto text-mauve-8">
                                Quick search...
                            </span>
                            <kbd className="font-sans no-underline">
                                <abbr title="Control" className="no-underline text-mauve-8">Ctrl </abbr>
                                K
                            </kbd>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}