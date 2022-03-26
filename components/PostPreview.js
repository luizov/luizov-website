import CoverImage from './CoverImage';
import PostMeta from '../components/PostMeta';
import Link from 'next/link'

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	length
}) {
	return (
		<article className="group flex flex-col md:p-5 md:hover:bg-slate-4 md:dark:hover:bg-slateDark-4 rounded-lg transition duration-200 ease-in">
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					src={coverImage}
					height={278}
					width={556}
				/>
			</div>
			<h3 className="h4 font-headings mb-3 text-slate-12 dark:text-slateDark-12">
				<Link as={`/articles/${slug}`} href="/articles/[slug]">
					<a>{title}</a>
				</Link>
			</h3>
			<p className="flex flex-grow text-lg leading-relaxed mb-8">{excerpt}</p>
			<PostMeta
				name={author.name}
				picture={author.picture}
				date={date}
				length={length}
			/>
		</article>
	)
}
