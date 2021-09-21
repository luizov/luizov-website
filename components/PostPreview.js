import Avatar from '../components/base/Avatar';
import DateFormatter from '../components/base/DateFormatter';
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
        <div className="group md:p-4 md:hover:bg-mauve-3 md:dark:hover:bg-mauveDark-3 rounded-md transition">
            <div className="mb-5">
                <CoverImage
                    slug={slug}
                    title={title}
                    src={coverImage}
                    height={278}
                    width={556}
                />
            </div>
            <h3 className="text-2xl text-mauve-12 dark:text-mauveDark-12 mb-3 leading-tight font-semibold">
                <Link as={`/articles/${slug}`} href="/articles/[slug]">
                    <a>{title}</a>
                </Link>
            </h3>
            <p className="text-lg leading-relaxed mb-6">{excerpt}</p>
            <PostMeta
                name={author.name}
                picture={author.picture}
                date={date}
                length={length}
            />
        </div>
    )
}
