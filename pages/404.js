import Head from 'next/head';
import Image from 'next/image';


export default function Page404() {
    return (
        <>
            <Head>
                <title>404 · Luizov</title>
            </Head>
            <div className="relative flex items-center py-10 overflow-hidden min-h-screen">
                <div className="container">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="flex border-r border-electric-200 pr-6 select-none">
                            <Image
                                src="/utility/404.svg"
                                alt="404"
                                width={86}
                                height={86}
                            />
                        </div>
                        <div className="flex">
                            <h2 className="tracking-tight text-mauve-12">
                                This page could not be found.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}