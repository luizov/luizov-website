export default function HomeHeader({ title, description, children }) {
    return (
        <section className="relative pt-16 sm:pt-32 pb-16 border-b-2 border-spiro-200 overflow-hidden">
            <div className="absolute z-0 top-0 inset-x-1 md:inset-x-8 block h-full bg-gradient-radial-to-t from-blue-200">
            </div>

            {/*             <object
                className="absolute inset-0 h-full opacity-30 w-auto"
                type="image/svg+xml"
                data="/utility/home-bg.svg">
            </object> 

     {/*        <div className="absolute top-0 inset-0 block h-full bg-home bg-center">
            </div> */}
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col">
                    <div className="mb-6">
                        <span className="px-3 py-1 text-xl text-electric-400 tracking-tight border border-electric-200 rounded-md">
                            Dimitar Luizov
                        </span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl text-electric-800 font-headings font-bold tracking-tight">
                        {title}
                    </h1>
                    {description && <p className="mt-3 text-electric-400 sm:mt-5 text-lg sm:text-2xl sm:max-w-2xl md:mt-5 md:text-2xl lg:mx-0">{description}</p>}
                    {children}
                </div>
            </div>
        </section>
    )
}