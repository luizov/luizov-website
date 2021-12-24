import { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Progress() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const updateLoadingStatus = () => setLoading(!loading);

        Router.events.on("routeChangeStart", updateLoadingStatus);
        Router.events.on("routeChangeComplete", updateLoadingStatus);

        return () => {
            Router.events.off("routeChangeStart", updateLoadingStatus);
            Router.events.off("routeChangeComplete", updateLoadingStatus);
        };
    }, [loading])

    return (
        <Link href="/">
            <a className="relative flex items-center z-10">
                <div className={`${loading && `opacity-100`} absolute -inset-x-1 rounded-full w-14 h-14 border-r-2 border-blue-400 border-opacity-40 animate-spin-slow z-0 opacity-0`}>
                </div>
                <div className={`${loading && `opacity-100`} absolute -inset-x-1 rounded-full w-14 h-14 border-r-2 border-blue-500 animate-spin z-0 opacity-0`}>
                </div>
                <Image
                    src="/logo.svg"
                    alt="Luizov logo"
                    width={48}
                    height={48}
                    priority="true"
                    quality={100}
                />
            </a>
        </Link>
    )
}