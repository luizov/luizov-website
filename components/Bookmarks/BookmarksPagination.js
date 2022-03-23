import Link from "next/link";

export default function Pagination(props) {
	const { totalPages, currentPage, prevDisabled, nextDisabled } = props;


	const prevPageUrl =
		currentPage === "2"
			? "/bookmarks"
			: `/bookmarks/page/${parseInt(currentPage, 10) - 1}`;

	const nextPageUrl = `/bookmarks/page/${parseInt(currentPage, 10) + 1}`;

	return (
		<section className="sticky inset-0 py-4 bg-slate-2 dark:bg-slateDark-2 border-t border:slate-7 dark:border-slateDark-7">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between">
					<div>
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
