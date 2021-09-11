import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes';

const ThemeChangerButton = () => {
    return (
        <button
            type="button"
            aria-label="Toggle Dark Mode"
            className={`flex relative w-10 h-10 rounded-full justify-center items-center ml-3 bg-black bg-opacity-5 border border-blue-600 dark:border-electric-500 shadow-primary group-hover:bg-blue-500 dark:group-hover:bg-spiro-800 group-hover:scale-50 group-hover:border-transparent transition duration-300 ease-out`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {mounted && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-electric-700 dark:text-gray-200"
                >
                    {theme === 'dark' ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    )}
                </svg>
            )}
        </button>
    )
}

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null

    return (
        <Switch
            checked={theme}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`${theme === 'light' ? 'bg-black bg-opacity-20' : 'bg-black bg-opacity-30'}
          relative inline-flex flex-shrink-0 h-[32px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Enable Dark mode</span>
            <span
                aria-hidden="true"
                className={`${theme === 'dark' ? 'translate-x-5 bg-violetDark-5' : 'translate-x-0 bg-blue-500'}
            pointer-events-none inline-flex h-[28px] w-[28px] justify-center items-center rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
            >
                {mounted && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-4 h-4 text-blue-150 dark:text-gray-200 transition ease-in-out duration-200"
                    >
                        {theme === 'dark' ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        )}
                    </svg>
                )}
            </span>
        </Switch>


    )
}

export default ThemeChanger;
