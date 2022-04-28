import { remark } from 'remark';
import remarkHtml from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
	const result = await remark().use(prism).use(remarkHtml, { sanitize: false }).process(markdown);
	return result.toString();
}
