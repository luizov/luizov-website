import Link from "next/link";
/* import { dateFormatter } from "../../core/utils"; */

export const Articles = ({ posts }) => {
    return (
        <section className="relative py-16 bg-electric-100 border-t border-b border-electric-150 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-electric-800 font-headings font-semibold tracking-tight">
                    Articles
                </h2>

                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}>
                                <a className="my-2 py-4 px-4 -mx-4 hover:bg-gray-100 rounded-md block">
                                    <div className="flex justify-between">
                                        <span className="text-blue-600">{post.properties.entry.title[0].plain_text}</span>
                                        <span className="text-gray-600">
                                            {/*     {new Date(post.date)} */}
                                        </span>
                                    </div>
                                    <div className="mt-1 text-gray-700 mr-4">{post.properties.summary.rich_text[0].plain_text}</div>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};