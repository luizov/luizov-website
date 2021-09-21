import Image from 'next/image';
import DateFormatter from '../components/base/DateFormatter';
import readingTime from 'reading-time';

export default function PostMeta({ name, picture, date, length }) {
    const stats = readingTime(length);

    return (
        <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full mr-3">
                <Image
                    src={picture}
                    alt={name}
                    layout="fill"
                />
            </div>
            <div>
                <div className="text-lg font-medium text-mauve-12 dark:text-mauveDark-12">
                    {name}
                </div>
                <DateFormatter dateString={date} />
                <span className="mx-2">&middot;</span>
                <span>{stats.text}</span>
            </div>
        </div>
    )
}