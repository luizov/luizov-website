import { config } from '../../config';

const RepoList = ({ repos, title, url }) => {
    return (
        <div>
            <h3 className="mt-1 text-2xl font-headings tracking-tight text-electric-300">
                {title}
            </h3>
            <ul>
                {repos.map(({ id, name, url, description, owner }) => (
                    <li key={id}>
                        <a
                            href={url}
                            className="block my-4 p-4 -mx-4 border border-transparent hover:border-electric-150 hover:shadow-card rounded-md transition duration-150"
                        >
                            <div className="font-headings">
                                <span className="text-blue-500">{owner.login}/</span>
                                <span className="text-blue-500">{name}</span>
                            </div>
                            <div>{description}</div>
                        </a>
                    </li>
                ))}
            </ul>
            <a href={url} className="flex items-center space-x-1 text-blue-500 text-sm">
                <span>View more on</span>
                <span className="font-semibold">GitHub</span>
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
        <section className="relative py-16 pb-48 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-4xl text-electric-800 font-headings font-semibold tracking-tight">
                    GitHub Activity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
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