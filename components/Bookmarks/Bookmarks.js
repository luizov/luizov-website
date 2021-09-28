import BookmarkCard from './BookmarkCard';

export default function Bookmarks({ bookmarks }) {
    if (!bookmarks) {
        return (
            <section className="relative py-20 bg-mauve-1 border-t border-mauve-6 overflow-hidden dark:bg-mauveDark-2 dark:border-mauveDark-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <p>No bookmarks found.</p>
                </div>
            </section>
        )
    }
    
    return (
        <section className="relative py-20 bg-mauve-1 border-t border-mauve-6 overflow-hidden dark:bg-mauveDark-2 dark:border-mauveDark-6">
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