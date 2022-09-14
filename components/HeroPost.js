import Link from 'next/link';
import Avatar from '@/components/base/Avatar';
import DateFormatter from '@/components/base/DateFormatter';
import CoverImage from '@/components/CoverImage';
import PostMeta from '@/components/PostMeta';

/**
 * Default Hero Post/Article
 */
export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage
					title={title}
					src={coverImage}
					slug={slug}
					height={620}
					width={1240}
				/>
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-5xl text-slate-12 dark:text-whiteA-12 leading-tight tracking-tight">
						<Link as={`/articles/${slug}`} href="/articles/[slug]">
							<a>{title}</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
				</div>
				<div>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					<Avatar name={author.name} picture={author.picture} />
				</div>
			</div>
		</section>
	)
}

/**
 * Alternative Styling for the Hero Post/Article
 */
export function HeroPostAlt({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	length
}) {
	return (
		<section className="pb-20">
			<article className="group md:p-8 md:-mx-8 md:hover:bg-slate-4 md:dark:hover:bg-blueDark-4 rounded-md transition duration-200 ease-in">
				<div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6">
					<div className="col-span-1 lg:col-span-2">
						<div className="mb-8 md:mb-0">
							<CoverImage
								title={title}
								src={coverImage}
								slug={slug}
								height={620}
								width={1240}
							/>
						</div>
					</div>
					<div>
						<h3 className="h3 font-headings mb-4 text-slate-12 dark:text-whiteA-12">
							<Link as={`/articles/${slug}`} href="/articles/[slug]">
								<a>{title}</a>
							</Link>
						</h3>
						<div className="mb-8 text-lg">
							<p className="text-lg leading-relaxed dark:text-whiteA-11">{excerpt}</p>
						</div>
						<PostMeta
							name={author.name}
							picture={author.picture}
							date={date}
							length={length}
						/>
					</div>
				</div>
			</article>
		</section>
	)
}
