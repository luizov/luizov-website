import { config } from '../../config';
import Image from 'next/image';

const RepoList = ({ repos, title, url }) => {
    return (
        <div>
            <h3 className="mt-1 text-2xl font-headings tracking-tight text-mauve-11 dark:text-mauveDark-11">
                {title}
            </h3>
            <ul>
                {repos.map(({ id, name, url, description, owner }) => (
                    <li key={id}>
                        <a
                            href={url}
                            className="block my-4 p-4 border bg-mauve-2 border-mauve-7 hover:bg-mauve-4 hover:border-mauve-8 dark:bg-violetDark-2 dark:border-violetDark-6 dark:hover:border-violetDark-7 dark:hover:bg-violetDark-3 hover:shadow-sm rounded transition duration-200"
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 relative">
                                    <Image
                                        src={owner.avatarUrl}
                                        alt={`${owner.login} avatar`}
                                        className="rounded-full"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <span className="text-blue-500 dark:text-violetDark-11">
                                    {owner.login}/
                                </span>
                                <span className="text-blue-500 dark:text-mauveDark-12">
                                    {name}
                                </span>
                            </div>
                            <div className="text-electric-400 dark:text-mauveDark-11">      {description}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            <a href={url} className="flex items-center space-x-1 text-blue-500 dark:text-violetDark-11 text-sm">
                <span>View more on</span>
                <span className="font-medium">GitHub</span>
                <svg
                    className="inline-flex ml-1 fill-current w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
                </svg>
            </a>
        </div>
    )

};

export const GithubActivity = ({ starredRepos, contributedRepos }) => {
    return (
        <section className="relative py-16 pb-56 bg-white dark:bg-mauveDark-1 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-mauve-12 dark:text-mauveDark-12 font-semibold tracking-tight">
                    GitHub Activity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
                    <RepoList
                        title="Repos I Contributed to"
                        url={`https://github.com/${config.githubUsername}`}
                        repos={contributedRepos}
                    />
                    <RepoList
                        title="Repos I Like"
                        repos={starredRepos}
                        url={`https://github.com/${config.githubUsername}?tab=stars`}
                    />
                </div>
            </div>
        </section>
    )
};