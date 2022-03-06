import { useRouter } from 'next/router';
import {
	KBarAnimator,
	KBarProvider,
	KBarPortal,
	useDeepMatches,
	KBarPositioner,
	KBarSearch,
	KBarResults,
} from 'kbar';

export default function CommandBar({ children }) {
	const router = useRouter();

	const actions = [
		{
			id: "home",
			name: "Home",
			shortcut: ["h"],
			keywords: "go-home",
			perform: () => router.push('/'),
		},
		{
			id: "articles",
			name: "Articles",
			shortcut: ["a"],
			keywords: "go-articles",
			perform: () => router.push('/articles'),
		},
		{
			id: "products",
			name: "Products",
			shortcut: ["p"],
			keywords: "go-products",
			perform: () => router.push('/products'),
		},
		{
			id: "concepts",
			name: "Design Concepts",
			shortcut: ["c"],
			keywords: "go-concepts",
			perform: () => router.push('/concepts'),
		},
	];

	return (
		<KBarProvider actions={actions}>
			<KBarPortal>
				<KBarPositioner>
					<KBarAnimator>
						<KBarSearch />
						<RenderResults />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
			{children}
		</KBarProvider>
	)
}

function RenderResults() {
	const { results } = useDeepMatches();

	return (
		<KBarResults
			items={results}
			onRender={({ item, active }) =>
				typeof item === "string" ? (
					<div>{item}</div>
				) : (
					<div
						style={{
							background: active ? "#eee" : "transparent",
						}}
					>
						{item.name}
					</div>
				)
			}
		/>
	);
}
