import Image from 'next/image';
import DateFormatter from "@/components/base/DateFormatter";

export default function BookmarkCard({
	title,
	description,
	image,
	alt,
	href,
	url,
	date
}) {
	return (
		<article className="group relative break-inside p-4 sm:p-6 md:border-r border-b border-slate-7 dark:border-blueDark-7 md:hover:bg-slate-5 md:dark:hover:bg-blueDark-5 transition ease-in">

			<div className="rounded-md overflow-hidden aspect-w-6 aspect-h-4 bg-slate-7 dark:bg-blueDark-7 sm:aspect-none">
				<img
					src={image}
					alt={alt}
					className="w-full h-full object-center object-cover"
					layout="fill"
				/>
			</div>

			<div className="flex-1 py-4 space-y-2 flex flex-col">
				<h3 className="h4 text-slate-12 dark:text-whiteA-12">
					<a href={href} target="_blank" rel="noreferrer">
						<span aria-hidden="true" className="absolute inset-0"></span>
						{title}
					</a>
				</h3>
				<p className="text-slate-11 dark:text-whiteA-11">
					{description}
				</p>
				<div className="flex-1 flex space-x-2 items-center text-sm">
					<p>{url}</p>
					<span className="mx-2">&middot;</span>
					<DateFormatter dateString={date} />
				</div>
			</div>
		</article>
	)
}
