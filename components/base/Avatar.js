import Image from 'next/image';

export default function Avatar({ name, picture }) {
	return (
		<div className="flex items-center">
			<div className="relative w-12 h-12 mr-3">
				<Image
					src={picture}
					alt={name}
					className="rounded-full"
					layout="fill"
				/>
			</div>
			<div className="text-xl font-medium text-slate-12 dark:text-whiteA-12">
				{name}
			</div>
		</div>
	)
}
