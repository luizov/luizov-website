import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Logo() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	let logoMark;
	let logoType;

	switch (resolvedTheme) {
		case 'light':
			logoMark = '/logo.svg';
			logoType = '/logotype.svg';
			break;
		case 'dark':
			logoMark = '/logo-dark.svg';
			logoType = '/logotype-dark.svg';
			break;
		default:
			logoMark = '/logo.svg';
			logoType = '/logotype.svg';
	}

	useEffect(() => setMounted(true), [])

	if (!mounted) return null;

	return (
		<div className="flex items-center space-x-2">

			{/* <!-- Logomark --> */}
			<Link href="/">
				<a className="relative flex items-center z-10">
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
