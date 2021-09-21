import Avatar from '../components/base/Avatar';
import DateFormatter from '../components/base/DateFormatter';
import CoverImage from '../components/CoverImage';
import PostMeta from '../components/PostMeta';
import Image from 'next/image';
import Link from 'next/link';
import readingTime from 'reading-time';

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
                    <h3 className="mb-4 text-4xl lg:text-5xl text-mauve-12 dark:text-mauveDark-12 leading-tight tracking-tight">
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
    const stats = readingTime(length);

    return (
        <section className="pb-20">
            <div className="group md:p-8 md:-mx-8 md:hover:bg-mauve-3 md:dark:hover:bg-mauveDark-3 rounded-md transition">
                <div className="md:grid md:grid-cols-3 md:gap-x-8 lg:gap-x-6">
                    <div className="col-span-2">
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
                        <h3 className="mb-4 text-3xl lg:text-4xl text-mauve-12 dark:text-mauveDark-12 leading-tight tracking-tight font-semibold">
                            <Link as={`/articles/${slug}`} href="/articles/[slug]">
                                <a>{title}</a>
                            </Link>
                        </h3>
                        <div className="mb-8 text-lg">
                            <p className="text-lg leading-relaxed">{excerpt}</p>
                        </div>
                        <PostMeta
                            name={author.name}
                            picture={author.picture}
                            date={date}
                            length={length}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
