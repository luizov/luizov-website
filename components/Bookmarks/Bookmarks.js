import BookmarkCard from './BookmarkCard';

export default function Bookmarks({ bookmarks }) {
	if (!bookmarks) {
		return (
			<section className="relative py-20 bg-slate-1 border-t border-slate-6 overflow-hidden dark:bg-slateDark-2 dark:border-slateDark-6">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<p>No bookmarks found.</p>
				</div>
			</section>
		)
	}

	return (
		<section className="relative py-20 bg-slate-2 dark:bg-slateDark-2 border-t border-slate-6 dark:border-slateDark-6 overflow-hidden">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="md:masonry-2-col lg:masonry-3-col box-border gap-x-0 mx-auto before:box-inherit after:box-inherit">
					{bookmarks.map((entry) => (
						<BookmarkCard
							key={entry.id}
							image={entry.image}
							title={entry.properties.Bookmark.title[0].plain_text}
							href={entry.properties.Url.url}
							description={entry.properties.Description.rich_text[0].plain_text}
							url={entry.properties.FriendlyUrl.url}
							date={entry.created_time}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
