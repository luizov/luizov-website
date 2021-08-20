export default function PageHeader({ title, description, children }) {
    return (
        <section className="relative pt-48 pb-16 border-b-2 border-spiro-200 overflow-hidden">
            <div className="absolute z-0 top-0 inset-x-1 md:inset-x-8 block h-full bg-gradient-radial-to-t from-spiro-200">
            </div>
            <div className="container relative">
                <div className="flex flex-col">
                    <h1 className="text-5xl text-electric-700 font-headings font-medium tracking-tight leading-tight">{title}
                    </h1>
                    {description && <p className="mt-3 font-headings text-base text-electric-400 sm:mt-5 sm:text-lg sm:max-w-2xl md:mt-5 md:text-xl lg:mx-0">{description}</p>}
                    {children}
                </div>
            </div>
        </section>
    )
}