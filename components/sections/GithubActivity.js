import { config } from '../../config';
import Image from 'next/image';

const RepoList = ({ repos, title, url }) => {
	return (
		<div className="mt-12">
			<h3 className="mt-1 text-2xl tracking-tight text-slate-11 dark:text-slateDark-11">
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
							className="flex flex-col my-4 sm:p-6 h-full sm:bg-white sm:dark:bg-slateDark-4 sm:hover:dark:bg-slateDark-5 sm:border border-slate-7 dark:border-slateDark-7 hover:border-slate-8 dark:hover:border-slateDark-8 sm:shadow-sm sm:hover:-translate-y-1 rounded-lg sm:transition-all"
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
								<span className="text-blue-8 dark:text-blueDark-12">
									{owner.login}&nbsp;/&nbsp;
								</span>
								<span className="font-medium text-blue-9 dark:text-blueDark-9 truncate">
									{name}
								</span>
							</div>

							{/* <!-- Card body --> */}
							<div className="text-slate-11 dark:text-slateDark-11">
								{description}
							</div>

						</a>

					</li>
				))}
			</ul>
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center space-x-1 text-blue-9 dark:text-blueDark-11 text-sm"
			>
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
		<section className="section pb-56 overflow-hidden bg-slate-2 dark:bg-slateDark-2">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-12">
					<h2 className="h3 font-headings text-slate-12 dark:text-slateDark-12">
						GitHub Activity
					</h2>
				</header>

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
