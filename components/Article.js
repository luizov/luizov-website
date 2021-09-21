import Link from "next/link";

const Article = ({ title, summary, slug }) => {
    return (
        <Link href={`/articles/${slug}`}>
            <a className="w-full">
                <div className="mb-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-mauve-11 dark:text-mauveDark-11">
                            {title}
                        </h4>
                        <p className="text-mauve-11 text-left md:text-right w-32 mb-4 md:mb-0">
                            {/*   {`${views ? new Number(views).toLocaleString() : '–––'} views`} */}
                            Some views here
                        </p>
                    </div>
                    <p className="text-mauve-11 dark:text-mauveDark-11">{summary}</p>
                </div>
            </a>
        </Link>
    )
}