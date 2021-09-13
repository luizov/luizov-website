import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import ThemeChanger from './ThemeChanger';


const links = [
    {
        name: 'Products',
        description: 'Showcase of current and past projects',
        href: '##',
    },
    {
        name: 'Articles',
        description: 'Blog articles page',
        href: '##',
    },
    {
        name: 'Playground',
        description: 'Showcase of designs from Dribbble and Instagram',
        href: '##',
    },
];

function NextLink(props) {
    const { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );
}

export default function NavMenu() {

    return (
        <Menu as="div" className="relative text-left">

            {({ open }) => (
                <>
                    <Menu.Button className="group cursor-pointer">
                        <div className="flex justify-center items-center">
                            {/*   text link here */}
                            <div className={`${open && 'translate-x-6 ease-out'} transition duration-300`}>
                                <div className={`${open && 'opacity-0'} font-headings font-medium text-lg text-mauve-11 dark:text-mauveDark-10 group-hover:translate-x-3 transition duration-300 ease-out`}>
                                    Menu
                                </div>
                            </div>
                            {/*  round button here */}
                            <div className={`flex relative w-12 h-12 rounded-full justify-center items-center ml-3 bg-transparent border border-mauve-7 dark:border-mauveDark-7 group-hover:bg-blue-500 dark:group-hover:bg-violetDark-4 group-hover:scale-50 group-hover:border-transparent transition duration-300 ease-out`}>

                                <svg xmlns="http://www.w3.org/2000/svg" className={`${open && 'rotate-90'} h-5 w-5 fill-current text-mauve-11 dark:text-mauveDark-10 group-hover:opacity-0 transition duration-150 ease-in`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                </svg>
                            </div>
                        </div>
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="opacity-0 -translate-y-10"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-10"
                    >
                        <Menu.Items className="absolute z-10 right-0 w-64 mt-6 origin-top-right bg-blue-500 text-white shadow-primary-xl divide-y divide-black divide-opacity-10 rounded focus:outline-none overflow-hidden dark:bg-violetDark-4 dark:text-violetDark-11 dark:shadow-none">
                            <div className="py-4">
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="/products" className={`${active && 'text-blue-300 dark:bg-violetDark-5 dark:text-white'} group flex items-center w-full px-8 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            <div className={`${active && 'translate-x-2'} transition duration-200 ease-in`}>
                                                Products
                                            </div>

                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="/articles" className={`${active && 'text-blue-300 dark:bg-violetDark-5 dark:text-white'} group flex items-center w-full px-8 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            <div className={`${active && 'translate-x-2'} transition duration-200 ease-in`}>
                                                Articles
                                            </div>

                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="/concepts" className={`${active && 'text-blue-300 dark:bg-violetDark-5 dark:text-white'} group flex items-center w-full px-8 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            <div className={`${active && 'translate-x-2'} transition duration-200 ease-in`}>
                                                Concepts
                                            </div>

                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="/bookmarks" className={`${active && 'text-blue-300 dark:bg-violetDark-5 dark:text-white'} group flex items-center w-full px-8 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            <div className={`${active && 'translate-x-2'} transition duration-200 ease-in`}>
                                                Bookmarks
                                            </div>

                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="/instagram" className={`${active && 'text-blue-300 dark:bg-violetDark-5 dark:text-white'} group flex items-center w-full px-8 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            <div className={`${active && 'translate-x-2'} transition duration-200 ease-in`}>
                                                Instagram
                                            </div>

                                        </NextLink>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="flex justify-between items-center pt-3 pb-4 px-8 pr-4 bg-black bg-opacity-5">
                                <span>Dark Mode</span>
                                <ThemeChanger />
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}