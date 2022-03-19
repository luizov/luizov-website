import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

export default function CoverImage({ title, src, slug, height, width }) {
	const image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('rounded-lg shadow-sm', {
				'hover:shadow-md transition-shadow duration-200': slug,
			})}
			layout="responsive"
			width={width}
			height={height}
		/>
	)
	return (
		<div className="sm:mx-0 bg-slate-3 dark:bg-slateDark-3 rounded-lg border border-slate-6 dark:border-slateDark-6 overflow-hidden">
			{slug ? (
				<Link as={`/articles/${slug}`} href="/articles/[slug]">
					<a
						aria-label={title}
						className="relative">
						{image}
					</a>
				</Link>
			) : (
				image
			)}
		</div>
	)
}
