import '../styles/main.scss';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
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
  )
}

export default MyApp
