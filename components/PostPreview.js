import Avatar from '../components/base/Avatar';
import DateFormatter from '../components/base/DateFormatter';
import CoverImage from './CoverImage';
import Link from 'next/link'

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}) {
    return (
        <div className="group md:p-8 md:hover:bg-mauve-3 md:dark:hover:bg-mauveDark-3 rounded-md transition">
            <div className="mb-5">
                <CoverImage
                    slug={slug}
                    title={title}
                    src={coverImage}
                    height={278}
                    width={556}
                />
            </div>
            <h3 className="text-3xl text-mauve-12 dark:text-mauveDark-12 mb-3 leading-tight">
                <Link as={`/articles/${slug}`} href="/articles/[slug]">
                    <a>{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    )
}
