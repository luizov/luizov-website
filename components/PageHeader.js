export default function PageHeader({ title, description, children }) {
    return (
        <section className="relative pt-48 pb-16 border-b border-electric-150 overflow-hidden">
            <div className="absolute z-0 top-0 inset-x-1 md:inset-x-8 block h-full bg-gradient-radial-to-t from-blue-150">
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col">
                    <h1 className="text-5xl text-electric-700 font-headings font-bold tracking-tight leading-tight">{title}
                    </h1>
                    {description && <p className="mt-3 font-headings text-xl md:text-2xl text-electric-400 sm:mt-5 sm:max-w-2xl lg:mx-0">{description}</p>}
                    {children}
                </div>
            </div>
        </section>
    )
}