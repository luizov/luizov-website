import Avatar from '../components/base/Avatar';
import DateFormatter from '../components/base/DateFormatter';
import CoverImage from '../components/CoverImage';

export default function PostHeader({ title, coverImage, date, author }) {
    return (
        <>
            <h1 className="text-5xl sm:text-6xl text-electric-900 dark:text-blue-150 font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {title}
            </h1>
            <p className="mb-6 text-lg">
                Published on <DateFormatter dateString={date} />
            </p>
{/*             <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture} />
            </div> */}
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage} height={620} width={1240} />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
            </div>
        </>
    )
}
