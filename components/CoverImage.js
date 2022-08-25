import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, src, slug, height, width }) {
	const image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			layout="responsive"
			width={width}
			height={height}
		/>
	)

	return (
		<div className="relative bg-slate-3 dark:bg-slateDark-3 rounded-md border border-slate-6 dark:border-slateDark-6 overflow-hidden shadow-sm">
			{slug ? (
				<Link as={`/articles/${slug}`} href="/articles/[slug]">
					<a className="relative" aria-label={title}>
						<span aria-hidden="true" className="absolute inset-0" />
						<div className="relative">
							{image}
							<div className="absolute inset-0 rounded-[.45rem] shadow-inset"></div>
						</div>
					</a>
				</Link>
			) : (
				<div className="relative">
					{image}
					<div className="absolute inset-0 rounded-[.45rem] shadow-inset"></div>
				</div>
			)}
		</div>
	)
}
