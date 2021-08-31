export default function PostBody({ content }) {
    return (
        <div
            className="max-w-2xl mx-auto px-4 sm:px-6 prose prose-lg dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
    )
}