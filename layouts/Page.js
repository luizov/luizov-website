import { m } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const variants = {
	initial: { opacity: 0, y: 64 },
	enter: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -64 },
}

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<m.main
				variants={variants}
				initial="initial"
				animate="enter"
				exit="exit"
				transition={{ type: 'linear' }}
				role="main"
			>
				{children}
			</m.main>
			<Footer />
		</>
	)
}
