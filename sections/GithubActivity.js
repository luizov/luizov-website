import { config } from '../../config';
import Image from 'next/image';

const RepoList = ({ repos, title, url, className = null }) => {
	return (
		<div className={className}>
			<h3 className="text-xl font-medium text-slate-11 dark:text-whiteA-11 pb-4 border-b border-slate-6 dark:border-slateDark-6">
				{title}
			</h3>
			<ul className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-6 mb-8">
				{repos.map(({ id, name, url, description, owner }) => (
					<li key={id}>

						{/* <!-- Card --> */}
						<a
							href={url}
							target="_blank"
							rel="noreferrer"
							className="flex flex-col my-4 sm:p-6 h-full sm:bg-white sm:dark:bg-blueDark-4 sm:hover:dark:bg-blueDark-5 sm:border border-slate-6 dark:border-blueDark-6 hover:border-slate-7 dark:hover:border-blueDark-7 sm:shadow-md sm:hover:shadow-lg rounded-md sm:transition-all"
						>

							{/* <!-- Card header --> */}
							<div className="flex mb-3">
								<div className="relative w-6 h-6 mr-2 flex-shrink-0">
									<Image
										src={owner.avatarUrl}
										alt={`${owner.login} avatar`}
										className="rounded"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<span className="text-slate-11 dark:text-whiteA-12">
									{owner.login}
								</span>
								<span>&nbsp;/&nbsp;</span>
								<span className="text-blue-11 dark:text-yellowDark-11 truncate">
									{name}
								</span>
							</div>

							{/* <!-- Card body --> */}
							<div className="text-slate-11 dark:text-whiteA-11">
								{description}
							</div>
						</a>
						{/* <!-- ./ Card --> */}

					</li>
				))}
			</ul>
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="underline underline-offset-4 decoration-2 hover:decoration-4 decoration-blue-9 dark:decoration-yellowDark-9 text-slate-12 dark:text-whiteA-12 inline-flex items-center space-x-1 text-sm hover:underline transition-all"
			>
				<span>View more on <strong>Github</strong></span>
			</a>
		</div>
	)

};

export const GithubActivity = ({ starredRepos, contributedRepos }) => {
	return (
		<section className="section pb-56 overflow-hidden bg-slate-2 dark:bg-skyDark-2">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-8">
					<h2 className="h1 font-headings text-slate-12 dark:text-whiteA-12">
						Featured Repositories
					</h2>
				</header>

				<RepoList
					title="Repos I Contributed to"
					url={`https://github.com/${config.githubUsername}`}
					repos={contributedRepos}
				/>
				<RepoList
					className="mt-24"
					title="Repos I Like"
					repos={starredRepos}
					url={`https://github.com/${config.githubUsername}?tab=stars`}
				/>

			</div>
		</section>
	)
};
