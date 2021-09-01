import Avatar from '../components/base/Avatar'
import DateFormatter from '../components/base/DateFormatter'
import CoverImage from '../components/CoverImage'
import Link from 'next/link'

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
                    <h3 className="mb-4 text-4xl lg:text-5xl text-electric-900 dark:text-blue-150 leading-tight tracking-tight">
                        <Link as={`/articles/${slug}`} href="/articles/[slug]">
                            <a className="hover:underline">{title}</a>
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
