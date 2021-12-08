import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('rounded-2xl shadow-sm', {
                'hover:shadow-md transition-shadow duration-200': slug,
            })}
            layout="responsive"
            width={width}
            height={height}
        />
    )
    return (
        <div className="sm:mx-0 bg-mauve-3 dark:bg-mauveDark-3 rounded-2xl border border-mauve-6 dark:border-mauveDark-6 overflow-hidden">
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
