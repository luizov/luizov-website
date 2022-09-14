import '@/styles/fonts.scss';
import '@/styles/main.scss';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import {
	AnimatePresence,
	LazyMotion,
	domAnimation
} from 'framer-motion';
import CommandBar from '@/components/CommandBar';
import SEO from '@/components/Seo';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const Layout = Component.layout || (({ children }) => children);

	return (
		<ThemeProvider
			attribute="class"
			disableTransitionOnChange
		>
			<SEO />
			<CommandBar>
				<LazyMotion features={domAnimation}>
					<AnimatePresence
						mode="wait"
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Layout key={router.route}>
							<Component {...pageProps} />
						</Layout>
					</AnimatePresence>
				</LazyMotion>
			</CommandBar>
		</ThemeProvider>
	)
}

export default MyApp;
