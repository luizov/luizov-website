import '@/styles/fonts.scss';
import '@/styles/main.scss';
import Script from 'next/script';
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
		<>
			<Script
				src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="066179c3-ac1f-458b-8282-4430a803ba86"
			/>
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
		</>
	)
}

export default MyApp;
