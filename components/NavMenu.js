import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MenuAlt4Icon } from '@heroicons/react/solid';


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
                                <div className={`${open && 'opacity-0'} font-headings font-medium text-lg text-electric-700 group-hover:translate-x-3 transition duration-300 ease-out`}>
                                    Menu
                                </div>
                            </div>
                            {/*  round button here */}
                            <div className={`flex relative w-12 h-12 rounded-full justify-center items-center ml-3 bg-transparent border border-electric-200 group-hover:bg-blue-500 group-hover:scale-50 group-hover:border-transparent transition duration-300 ease-out`}>
                                <MenuAlt4Icon className={`${open && 'rotate-90'} h-5 w-5 text-electric-700 group-hover:opacity-0 transition duration-150 ease-in`}
                                />
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
                        <Menu.Items className="absolute z-10 right-0 w-64 mt-6 origin-top-right bg-blue-500 text-white divide-y divide-gray-100 rounded focus:outline-none">
                            <div className="py-4 px-6">
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="products" className={`${active && 'text-blue-300 translate-x-2'} group flex rounded-md items-center w-full px-2 py-2 text-xl font-headings transition duration-200 ease-in`}
                                        >
                                            Products
                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="articles" className={`${active && 'text-blue-250 translate-x-2'} group flex rounded-md items-center w-full px-2 py-2 text-xl font-headings transition duration-200`}
                                        >
                                            Articles
                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="playground" className={`${active && 'text-blue-250 translate-x-2'} group flex rounded-md items-center w-full px-2 py-2 text-xl font-headings transition duration-200`}
                                        >
                                            Concepts
                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="bookmarks" className={`${active && 'text-blue-250 translate-x-2'} group flex rounded-md items-center w-full px-2 py-2 text-xl font-headings transition duration-200`}
                                        >
                                            Bookmarks
                                        </NextLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NextLink href="articles" className={`${active && 'text-blue-250 translate-x-2'} group flex rounded-md items-center w-full px-2 py-2 text-xl font-headings transition duration-200`}
                                        >
                                            Instagram
                                        </NextLink>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}