export default function SnippetBody({ content }) {
	return (
		<div
			className="max-w-5xl mx-auto prose prose-lg dark:prose-dark"
			dangerouslySetInnerHTML={{ __html: content }}
		>
		</div>
	)
}
