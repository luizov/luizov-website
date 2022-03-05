import { m } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const variants = {
    initial: { opacity: 0, y: 64 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -64 },
}

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen overflow-x-hidden">
            <Header />
            <m.main
                className="flex-grow"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                role="main"
            >
                {children}
            </m.main>
            <Footer />
        </div>
    )
}