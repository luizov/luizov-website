import Image from 'next/image';

export default function SnippetHeader({ title, description, logo }) {
  return (
    <div className="md:flex md:items-start md:justify-between">
      <div className='flex-1 min-w-0 space-y-1'>
        <h1 className="h2 font-headings text-slate-12 dark:text-slateDark-12">
          {title}
        </h1>
        <p className="text-xl">
          {description}
        </p>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <Image
          alt={title}
          height={48}
          width={48}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
      </div>
    </div>
  )
}
