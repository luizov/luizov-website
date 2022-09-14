import Image from 'next/image';

export default function SnippetHeader({ title, description, logo }) {
	return (
		<div className="md:flex md:items-start md:justify-between gap-24 pb-8 border-b border-slate-6 dark:border-blueDark-6 mb-12">
			<div className='flex-1 min-w-0 space-y-8'>
				<h1 className="max-w-4xl h2 font-headings text-slate-12 dark:text-whiteA-12">
					{title}
				</h1>
				<p className="text-xl dark:text-whiteA-11">
					{description}
				</p>
			</div>
			<div className="mt-8 flex md:mt-0">
				<Image
					alt={title}
					height={48}
					width={48}
					src={`/logos/${logo}`}
					className="rounded-full"
				/>
			</div>
		</div>
	)
}
