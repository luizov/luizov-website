import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('rounded shadow-sm', {
                'hover:shadow-md transition-shadow duration-200': slug,
            })}
            layout="responsive"
            width={width}
            height={height}
        />
    )
    return (
        <div className="sm:mx-0 bg-gray-200 rounded border border-black border-opacity-10 overflow-hidden">
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
