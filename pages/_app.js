import '../styles/main.scss';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import CommandBar from '../components/CommandBar';

function MyApp({ Component, pageProps }) {
	return (
		<CommandBar>
			<ThemeProvider attribute="class" disableTransitionOnChange>
				<LazyMotion features={domAnimation}>
					<AnimatePresence
						exitBeforeEnter
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Component {...pageProps} />
					</AnimatePresence>
				</LazyMotion>
			</ThemeProvider>
		</CommandBar>
	)
}

export default MyApp
