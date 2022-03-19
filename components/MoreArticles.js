import PostPreview from './PostPreview';

export default function MoreArticles({ posts }) {
	return (
		<section className="section pb-56">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-8">
					<h2 className="h3 font-headings text-slate-12 dark:text-slateDark-12">
						More Articles
					</h2>
				</header>
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-0 gap-y-20 md:gap-y-0 md:-mx-4 lg:grid-cols-2">
					{posts.map((post) => (
						<PostPreview
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							slug={post.slug}
							excerpt={post.excerpt}
							length={post.content}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
