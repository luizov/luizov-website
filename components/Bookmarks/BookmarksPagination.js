import Link from "next/link";

export default function Pagination(props) {
	const { totalPages, currentPage, prevDisabled, nextDisabled } = props;


	const prevPageUrl =
		currentPage === "2"
			? "/bookmarks"
			: `/bookmarks/page/${parseInt(currentPage, 10) - 1}`;

	const nextPageUrl = `/bookmarks/page/${parseInt(currentPage, 10) + 1}`;

	return (
		<section className="sticky inset-0 py-4 bg-slate-1 dark:bg-blueDark-2 border-t border-b border:slate-7 dark:border-blueDark-7">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between">
					<div className="text-slate-11 dark:text-whiteA-11">
						Page {currentPage} of {totalPages}
					</div>
					<div className="space-x-2">
						{!prevDisabled && (
							<Link href={prevPageUrl}>
								<a className="btn btn-dark btn-shadow">Previous page</a>
							</Link>
						)}
						{!nextDisabled && (
							<Link href={nextPageUrl}>
								<a className="btn btn-dark btn-shadow">Next page</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
