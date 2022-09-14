import readingTime from 'reading-time';
import Avatar from '@/components/base/Avatar';
import DateFormatter from '@/components/base/DateFormatter';
import CoverImage from '@/components/CoverImage';

export default function PostHeader({ title, coverImage, date, author, length }) {
	const stats = readingTime(length);
	return (
		<>
			<h1 className="display-4 text-slate-12 dark:text-whiteA-12 mb-12 text-center md:text-left">
				{title}
			</h1>
			<p className="hidden md:block mb-6 text-lg">
				Published on <DateFormatter dateString={date} />
				<span className="mx-2">&middot;</span>
				<span>{stats.text}</span>

			</p>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage
					title={title}
					src={coverImage}
					height={620}
					width={1240}
				/>
			</div>
			<div className="max-w-2xl mx-auto px-4 sm:px-6">
				<div className="block md:hidden mb-6">
					<p className="mb-6 text-lg text-slate-11 dark:text-whiteA-11">
						Published on <DateFormatter dateString={date} />
						<span className="mx-2">&middot;</span>
						<span>{stats.text}</span>
					</p>
				</div>
			</div>
		</>
	)
}
