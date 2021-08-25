import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import LoadingSpinner from '../../components/base/LoadingSpinner';
import ErrorMessage from '../../components/base/ErrorMessage';
import SuccessMessage from '../../components/base/SuccessMessage';

export default function Newsletter() {
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    const [form, setForm] = useState(false);
    const { data } = useSWR('/api/subscribers', fetcher);
    const subscriberCount = new Number(data?.count);

    const subscribe = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading' });

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();
        if (error) {
            setForm({
                state: 'error',
                message: error
            });
            return;
        }

        inputEl.current.value = '';
        setForm({
            state: 'success',
            message: `Hooray! You're now on the list.`
        });
    };

    return (
        <section className="relative py-16 pb-32 bg-electric-100 border-t border-electric-150">
            <div className="absolute z-0 top-0 inset-x-1 md:inset-x-8 block h-full bg-gradient-radial-to-t from-blue-250">
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA box */}
                <div className="relative bg-gradient-to-t from-blue-100 to-white dark:from-electric-950 dark:to-electric-700 border border-electric-150 dark:border-electric-800 shadow-card rounded-lg -mt-48 py-10 px-8 md:py-16 md:px-12 overflow-hidden">

                    {/* Background illustration */}
                    <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                        <svg width="438" height="328" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient cx="35.542%" cy="34.553%" fx="28.542%" fy="32.553%" r="94.0%" id="ni-a">
                                    <stop stopColor="#76F8FF" offset="0%" />
                                    <stop stopColor="#3D91FF" offset="44.317%" />
                                    <stop stopColor="#C27DF2" offset="68.48%" />
                                    <stop stopColor="#873EBA" offset="100%" />
                                </radialGradient>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <g fill="#F8F8F8">
                                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                                </g>
                                <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                            </g>
                        </svg>
                    </div>

                    <div className="relative flex flex-col lg:flex-row justify-between items-center">

                        {/* CTA content */}
                        <div className="text-center lg:text-left lg:max-w-xl">
                            <h3 className="h2 text-electric-800 dark:text-blue-100 mb-2">
                                Subscribe to my newsletter
                            </h3>
                            <p className="text-electric-400 dark:text-blue-150 text-lg mb-6">
                                Get emails from me about web development, tech, and early access to new articles.
                            </p>

                            {/* CTA form */}
                            <form className="w-full lg:w-auto" onSubmit={subscribe}>
                                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                    <input
                                        ref={inputEl}
                                        type="email"
                                        className="w-full appearance-none bg-blue-150 dark:bg-electric-700 border border-blue-250 dark:border-electric-600 focus:border-blue-400 dark:focus:border-electric-500 rounded px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-electric-800 dark:text-white placeholder-electric-300"
                                        placeholder="tim@apple.com"
                                        aria-label="Email for newsletter"
                                        autoComplete="email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-btn-primary"
                                    >
                                        {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
                                    </button>
                                </div>
                            </form>
                            {/* Form State Messages */}
                            {form.state === 'error' ? (
                                <ErrorMessage>{form.message}</ErrorMessage>
                            ) : form.state === 'success' ? (
                                <SuccessMessage>{form.message}</SuccessMessage>
                            ) : (
                                <p className="text-sm text-electric-300 mt-3">
                                    <span> {`${subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
                                        } subscribers – `}
                                    </span>
                                    <Link href="/newsletter" passHref>
                                        <a>
                                            5 issues
                                        </a>
                                    </Link>
                                </p>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}