import Image from 'next/image';

export default function PageError({ children }) {
    return (
        <div className="relative flex items-center py-10 overflow-hidden min-h-screen bg-bg">
            <div className="container">
                <div className="flex items-center justify-center space-x-5">
                    <div className="flex border-r border-electric-400 pr-6 select-none">
                        <Image
                            src="/utility/404.svg"
                            alt="404"
                            width={86}
                            height={86}
                        />
                    </div>
                    <div className="flex">
                        <h2 className="tracking-tight text-electric-900">
                            This page could not be found.
                        </h2>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}