import { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Logo() {
	const [loading, setLoading] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	let logoMark;
	let logoType;

	switch (theme) {
		case 'light':
			logoMark = '/logo.svg';
			logoType = '/logotype.svg';
			break;
		case 'dark':
			logoMark = '/logo-dark.svg';
			logoType = '/logotype-dark.svg';
			break;
		default:
			logoMark = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
			logoType = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	}

	useEffect(() => setMounted(true), [])

	useEffect(() => {
		const updateLoadingStatus = () => setLoading(!loading);

		Router.events.on("routeChangeStart", updateLoadingStatus);
		Router.events.on("routeChangeComplete", updateLoadingStatus);

		return () => {
			Router.events.off("routeChangeStart", updateLoadingStatus);
			Router.events.off("routeChangeComplete", updateLoadingStatus);
		};
	}, [loading])

	if (!mounted) return null;

	return (
		<div className="flex items-center space-x-2">

			{/* <!-- Logomark --> */}
			<Link href="/">
				<a className="relative flex items-center z-10">
					<div className={`${loading && `opacity-100`} absolute -inset-x-1 rounded-full w-7 h-7 border-r-2 border-blue-400 border-opacity-40 animate-spin-slow z-0 opacity-0`}>
					</div>
					<div className={`${loading && `opacity-100`} absolute -inset-x-1 rounded-full w-7 h-7 border-r-2 border-blue-500 animate-spin z-0 opacity-0`}>
					</div>
					<Image
						src={logoMark}
						alt="Luizov logomark"
						width={24}
						height={24}
						priority="true"
						quality={100}
					/>
				</a>
			</Link>

			{/* <!-- Logotype --> */}
			<Link href="/">
				<a className="relative flex items-center z-10">
					<Image
						src={logoType}
						alt="Luizov logotype"
						width={64}
						height={24}
						priority="true"
						quality={100}
					/>
				</a>
			</Link>

		</div>
	)
}
