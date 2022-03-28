import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import cn from 'classnames';
import {
	IconDownSmall,
	IconOne,
	IconTwo
} from '../components/base/Icons';
import { ThemeChangerDesktop } from './ThemeChanger';

const resources = [
	{
		name: 'Articles',
		description: 'I write about development, design, React, CSS, animations and more.',
		href: '/articles',
		icon: IconTwo,
	},
	{
		name: 'Bookmarks',
		description: `A collection of favourite articles, websites and resources that I've stumbled upon.`,
		href: '/bookmarks',
		icon: IconOne,
	},
	{
		name: 'Snippets',
		description: `A collection of useful code snippets that solve common problems from JS functions to CSS tricks.`,
		href: '/snippets',
		icon: IconOne,
	},
];

export default function NavMenuDesktop() {
	return (
		<li>
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={cn(
								open
									? 'text-slate-11 dark:text-slateDark-11 bg-slate-5 dark:bg-slateDark-5'
									: 'text-slate-11 dark:text-slateDark-11',
								'inline-block px-4 py-2 rounded-lg font-medium hover:bg-slate-4 dark:hover:bg-slateDark-4 transition-all'
							)}
						>
							<span>More</span>
							<IconDownSmall
								className={cn(
									open
										? 'text-slate-11'
										: 'text-slate-11',
									'ml-2 group-hover:text-slate-11 dark:group-hover:text-slateDark-11'
								)}
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-30 right-0 mt-6 px-2 w-screen max-w-sm sm:px-0 rounded-lg shadow-lg shadow-blue-12/5 bg-white dark:bg-slateDark-2 border border-slate-7 dark:border-slateDark-7 overflow-hidden">
								<div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-6">
									{resources.map((item) => (
										<Link
											key={item.name}
											href={item.href}
										>
											<a
												className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-4 dark:hover:bg-slateDark-4"
											>
												{/* 						<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
														<item.icon aria-hidden="true" />
													</div> */}
												<div className="ml-0">
													<p className="text-base font-medium text-slate-12 dark:text-slateDark-12">{item.name}</p>
													<p className="mt-1 text-sm text-slate-11 dark:text-slateDark-11">{item.description}</p>
												</div>
											</a>
										</Link>
									))}
								</div>

								<div className="bg-white dark:bg-slateDark-3 border-t-2 dark:border-t border-slate-3 dark:border-slateDark-6">
									<div className="flex justify-between items-center pt-3 pb-4 px-6 pr-4">
										<span className="font-medium text-slate-11 dark:text-slateDark-11 select-none">
											Dark Mode
										</span>
										<ThemeChangerDesktop />
									</div>
								</div>

							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</li>
	)
}
