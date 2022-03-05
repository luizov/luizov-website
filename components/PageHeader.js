export default function PageHeader({ title, description, children }) {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col">
                    <h1 className="h1 text-mauve-12 dark:text-mauveDark-12">
                        {title}
                    </h1>
                    {description &&
                        <p className="mt-3 text-xl md:text-2xl sm:mt-5 sm:max-w-2xl lg:mx-0">
                            {description}
                        </p>
                    }
                    {children}
                </div>
            </div>
        </section>
    )
}