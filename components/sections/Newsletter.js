import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import LoadingSpinner from '../../components/base/LoadingSpinner';
import ErrorMessage from '../../components/base/ErrorMessage';
import SuccessMessage from '../../components/base/SuccessMessage';
import { NewsletterSVG } from '../../components/base/Backgrounds';

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
		<section className="section bg-slate-2 dark:bg-slateDark-2">
			<div className="absolute z-0 top-0 inset-x-0 md:inset-x-4 block h-full bg-gradient-radial-to-t from-blue-4 dark:from-blueDark-4">
			</div>
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				{/* CTA box */}
				<div className="relative bg-white dark:bg-slateDark-2 border border-slate-6 dark:border-slateDark-7 shadow-xl shadow-sky-9/20 dark:shadow-none rounded-lg -mt-56 py-10 px-8 md:py-16 md:px-12 overflow-hidden">

					{/* Background illustration */}
					<div className="absolute -top-20 -right-24 pointer-events-none hidden lg:block dark:opacity-90" aria-hidden="true">
						<NewsletterSVG />
					</div>

					<div className="relative flex flex-col lg:flex-row justify-between items-center">

						{/* CTA content */}
						<div className="text-center lg:text-left lg:max-w-lg">
							<h3 className="h2 font-headings mb-2 text-slate-12 dark:text-slateDark-12">
								Subscribe to my newsletter
							</h3>
							<p className="text-slate-11 dark:text-slateDark-11 text-lg mb-6">
								Get access to free design assets, new articles about web development and tech.
							</p>

							{/* CTA form */}
							<form className="w-full lg:w-auto" onSubmit={subscribe}>
								<div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
									<input
										ref={inputEl}
										type="email"
										className="w-full form-input mb-2 sm:mb-0 sm:mr-2"
										placeholder="Enter your email to join"
										aria-label="Email for newsletter"
										autoComplete="email"
										required
									/>
									<button
										type="submit"
										className="btn btn-primary btn-shadow"
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
								<p className="text-sm text-slate-10 dark:text-slateDark-10 mt-3">
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
