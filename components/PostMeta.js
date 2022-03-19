import Image from 'next/image';
import DateFormatter from '../components/base/DateFormatter';
import readingTime from 'reading-time';

export default function PostMeta({ name, picture, date, length }) {
    const stats = readingTime(length);

    return (
        <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full mr-3">
                <Image
                    src={picture}
                    alt={name}
                    layout="fill"
                />
            </div>
            <div>
                <div className="font-headings font-medium text-slate-12 dark:text-slateDark-12">
                    {name}
                </div>
                <DateFormatter dateString={date} />
                <span className="mx-2">&middot;</span>
                <span>{stats.text}</span>
            </div>
        </div>
    )
}
