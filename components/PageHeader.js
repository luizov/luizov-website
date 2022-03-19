export default function PageHeader({ title, description, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto py-20 px-4 sm:px-6 border-b border-slate-6 dark:border-slateDark-6">
        {/* 				<div className="absolute z-0 top-0 inset-x-0 md:inset-x-4 block h-full bg-gradient-radial-to-t from-slate-3 dark:from-slateDark-3">
				</div> */}
        <div className="relative flex flex-col">
          <h1 className="h2 font-headings text-slate-12 dark:text-slateDark-12">
            {title}
          </h1>
          {description &&
            <p className="mt-3 text-xl md:text-2xl sm:mt-5 sm:max-w-2xl lg:mx-0">
              {description}
            </p>
          }
          {children}
        </div>
      </div>
    </section>
  )
}
