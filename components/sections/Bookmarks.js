import Link from 'next/link';
import Image from 'next/image';
/* import { dateFormatter } from "../../core/utils"; */

export const BookmarkCard = ({ title, description, alt, href}) => {
    return (
        <div className={`group relative flex flex-row justify-between rounded-md overflow-hidden shadow-inset transition duration-500 ease-in-out`}>

            {/* Left Side */}
            <div className="flex flex-col max-w-sm p-8">
                <h3 className={`text-3xl font-bold`}>
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
                <p className={`text-opacity-60 text-xl`}>
                    {description}
                </p>
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