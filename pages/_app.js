import '../styles/main.scss';
import { ThemeProvider } from 'next-themes';
import {
	AnimatePresence,
	LazyMotion,
	domAnimation
} from 'framer-motion';
import CommandBar from '../components/CommandBar';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider
			attribute="class"
			disableTransitionOnChange
		>
			<CommandBar>
				<LazyMotion features={domAnimation}>
					<AnimatePresence
						exitBeforeEnter
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</LazyMotion>
			</CommandBar>
		</ThemeProvider>
	)
}

export default MyApp
