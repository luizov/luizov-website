import PostPreview from './PostPreview';

export default function MoreArticles({ posts }) {
    return (
        <section>
            <h2 className="mb-8 text-6xl text-mauve-12 dark:text-mauveDark-12 font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-0 gap-y-20 md:gap-y-0 mb-24 md:mb-32 md:-mx-4">
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
        </section>
    )
}