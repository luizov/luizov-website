import Image from 'next/image';
import DateFormatter from '../components/base/DateFormatter';
import readingTime from 'reading-time';

export default function PostMeta({ name, picture, date, length }) {
	const stats = readingTime(length);

	return (
		<div className="flex items-center">
			<div className="relative w-8 h-8 rounded-full mr-3 select-none">
				<Image
					src={picture}
					alt={name}
					layout="fill"
				/>
			</div>
			<div>
				<span className="block font-headings font-medium text-slate-12 dark:text-whiteA-12">
					{name}
				</span>
				<div className="dark:text-whiteA-11">
					<DateFormatter dateString={date} />
					<span className="mx-2">&middot;</span>
					<span>{stats.text}</span>
				</div>
			</div>
		</div>
	)
}
