import Head from 'next/head';
import Image from 'next/image';


export default function Page404() {
    return (
        <>
            <Head>
                <title>404 · Luizov</title>
            </Head>
            <div className="relative flex items-center overflow-hidden min-h-screen">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">

                        <div className="flex md:border-r border-slate-6 dark:border-slateDark-6 md:pr-6 select-none">
                            <Image
                                src="/utility/404.svg"
                                alt="404"
                                width={86}
                                height={86}
                            />
                        </div>

                        <div className="flex flex-col">
                            <h1 className="h1 font-headings text-slate-12 dark:text-slateDark-12">
                                Page not found
                            </h1>
                            <p className="mt-1 text-base">
                                Please check the URL in the address bar and try again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
