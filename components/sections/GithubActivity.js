import { config } from '../../config';
import Image from 'next/image';

const RepoList = ({ repos, title, url }) => {
    return (
        <div className="mt-12">
            <h3 className="mt-1 text-2xl tracking-tight text-mauve-11 dark:text-mauveDark-11">
                {title}
            </h3>
            <ul className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 mb-8">
                {repos.map(({ id, name, url, description, owner }) => (
                    <li key={id}>
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="block my-4 p-4 sm:p-6 h-full sm:border border-mauve-7 dark:border-mauveDark-7 hover:bg-mauve-4 dark:hover:bg-mauveDark-4 rounded-xl transition duration-200"
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 relative">
                                    <Image
                                        src={owner.avatarUrl}
                                        alt={`${owner.login} avatar`}
                                        className="rounded-lg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <span className="text-mauve-12 dark:text-violetDark-11">
                                    {owner.login}/
                                </span>
                                <span className="text-blue-500 dark:text-mauveDark-12 truncate">
                                    {name}
                                </span>
                            </div>
                            <div className="text-mauve-11 dark:text-mauveDark-11">
                                {description}
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
        <section className="relative py-20 pb-56 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-mauve-12 dark:text-mauveDark-12 font-semibold tracking-tight">
                    GitHub Activity
                </h2>

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
        </section>
    )
};