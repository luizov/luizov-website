export default function KeyboardKey({ children }) {
	let key = children || '';
	key = key.length > 0 ? key.toLowerCase() : key.toUpperCase();

	return (
		<kbd className="w-7 h-7 inline-flex items-center justify-center select-none text-base font-mono font-medium rounded text-slate-11 bg-slate-2 dark:text-whiteA-11 dark:bg-skyDark-5 shadow">
			{key}
		</kbd>
	)
}
