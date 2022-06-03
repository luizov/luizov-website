import '../styles/fonts.scss';
import '../styles/main.scss';
import { ThemeProvider } from 'next-themes';
import {
	AnimatePresence,
	LazyMotion,
	domAnimation
} from 'framer-motion';
import CommandBar from '../components/CommandBar';
import SEO from '../components/Seo';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider
			attribute="class"
			disableTransitionOnChange
		>
			<SEO />
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

export default MyApp;
