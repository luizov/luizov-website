import { Fragment } from 'react';
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
									? 'text-blue-9 dark:text-blueDark-9 bg-blue-4 dark:bg-blueDark-4'
									: 'text-slate-11 dark:text-whiteA-11',
								'inline-block px-4 py-2 rounded-md font-medium hover:bg-blue-4 hover:text-blue-9 dark:hover:bg-blueDark-4 dark:hover:text-blueDark-9 active:bg-blue-5 dark:active:bg-blueDark-5 dark:Active:text-blueDark-11 transition-all'
							)}
						>
							<span>More</span>
							<IconDownSmall
								className={cn(
									open
										? '-rotate-90'
										: 'text-slate-11',
									'-mt-0.5 ml-2 group-hover:text-blue-11 dark:group-hover:text-blueDark-11 transition-all'
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
							<Popover.Panel className="absolute z-30 right-0 mt-6 px-2 w-screen max-w-sm sm:px-0 rounded-md shadow-lg bg-white dark:bg-blueDark-3 border border-slate-6 dark:border-blueDark-6 overflow-hidden">
								<div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-6">
									{resources.map((item) => (
										<Link
											key={item.name}
											href={item.href}
										>
											<a
												className="group -m-3 p-3 flex items-start rounded-md hover:bg-blue-4 dark:hover:bg-whiteA-4 active:bg-blue-5 dark:active:bg-whiteA-6"
											>
												<div className="ml-0">
													<p className="text-base font-medium text-slate-12 dark:text-whiteA-12 group-hover:text-blue-11 dark:group-hover:text-blueDark-11">
														{item.name}
													</p>
													<p className="mt-1 text-sm text-slate-11 dark:text-whiteA-11 group-hover:text-blue-11 dark:group-hover:text-blueDark-11">
														{item.description}
													</p>
												</div>
											</a>
										</Link>
									))}
								</div>

								<div className="bg-white dark:bg-transparent border-t border-slate-6 dark:border-blueDark-6">
									<div className="flex justify-between items-center pt-3 pb-4 px-6 pr-4">
										<span className="font-medium text-slate-11 dark:text-slateDark-12 select-none">
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
