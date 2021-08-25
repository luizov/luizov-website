export default function PageHeader({ title, description, children }) {
    return (
        <section className="relative py-16 border-b border-electric-150 overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col">
                    <h1 className="text-6xl text-electric-800 font-headings font-bold tracking-tight leading-tight">{title}
                    </h1>
                    {description &&
                        <p className="mt-3 font-headings text-xl md:text-2xl text-electric-400 sm:mt-5 sm:max-w-2xl lg:mx-0">
                            {description}
                        </p>
                    }
                    {children}
                </div>
            </div>
        </section>
    )
}