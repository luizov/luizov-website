import Avatar from '../components/base/Avatar';
import DateFormatter from '../components/base/DateFormatter';
import CoverImage from '../components/CoverImage';
import readingTime from 'reading-time';

export default function PostHeader({ title, coverImage, date, author, length }) {
    const stats = readingTime(length);
    return (
        <>
            <h1 className="text-5xl sm:text-6xl text-electric-900 dark:text-mauveDark-12 font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {title}
            </h1>
            <p className="hidden md:block mb-6 text-lg">
                Published on <DateFormatter dateString={date} />
                <span className="mx-2">&middot;</span>
                <span>{stats.text}</span>

            </p>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage} height={620} width={1240} />
            </div>
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="block md:hidden mb-6">
                    <p className="mb-6 text-lg">
                        Published on <DateFormatter dateString={date} />
                        <span className="mx-2">&middot;</span>
                        <span>{stats.text}</span>
                    </p>
                </div>
            </div>
        </>
    )
}
