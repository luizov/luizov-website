export const BookmarkCard = ({ title, description, image, alt, href }) => {
    return (
        <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img src={image} alt={alt} className="w-full h-full object-center object-cover sm:w-full sm:h-full" />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href={href}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {title}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">
                    {description}
                </p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-sm italic text-gray-500">8 colors</p>
                    <p className="text-base font-medium text-gray-900">$256</p>
                </div>
            </div>
        </div>
    )
}

export const Bookmarks = () => {
    return (
        <section className="relative py-20 bg-mauve-2 border-t border-b border-mauve-6 overflow-hidden dark:bg-mauveDark-2 dark:border-mauveDark-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="relative rounded border border-gray-300 bg-white px-6 py-8 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 dark:bg-mauveDark-3 dark:border-mauveDark-7 dark:hover:border-mauveDark-8">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                <p className="text-sm font-medium text-gray-900">
                                    Leslie Alexander
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    Co-Founder / CEO
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}