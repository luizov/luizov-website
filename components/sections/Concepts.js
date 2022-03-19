import Link from 'next/link';
import Image from 'next/image';

const IMAGE_LIST = [
	{
		imageSrc: '/playground/1.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/3.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/4.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/5.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/6.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/7.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/8.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/9.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/10.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/13.jpg',
		imageAlt: 'Alt text.',
	},
];

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

export const PlaygroundImage = ({ src, alt }) => {
	return (
		<div className="relative w-full h-80 bg-slate-4 dark:bg-slateDark-4 rounded-md overflow-hidden sm:aspect-w-16 sm:aspect-h-12 transition">
			<Image
				src={src}
				alt={alt}
				layout="fill"
				className="w-full h-full object-center object-cover"
				placeholder="blur"
				blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1200))}`}
			/>
		</div>
	)
}

export default function Concepts() {
	return (
		<section className="section border-t border-slate-6 dark:border-slateDark-6 overflow-hidden">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<header className="mb-12">
					<h2 className="h3 font-headings text-slate-12 dark:text-slateDark-12">
						Design Concepts
					</h2>
				</header>
				<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[56rem] lg:max-h-[56rem]">
					{IMAGE_LIST.slice(0).reverse().map((entry, index) => (
						<PlaygroundImage
							key={index}
							src={entry.imageSrc}
							alt={entry.imageAlt}
						/>
					))}
				</div>
				<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-2 pt-80 pb-8 pointer-events-none dark:from-slateDark-2 absolute">
					<Link href="/concepts" passHref>
						<a type="button" className="relative btn btn-xl btn-dark btn-shadow pointer-events-auto">
							Show more designs
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}
