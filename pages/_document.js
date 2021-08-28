import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/SpaceGrotesk/SpaceGrotesk-var.woff2"
                        as="font"
                        crossOrigin="anonymous"
                        type="font/woff2"
                    />
                    <link href="/favicons/site.webmanifest" rel="manifest" />
                    <link rel="shortcut icon" href="/favicons/favicon.ico" />
                    <link
                        href="/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#bae6fd"
                        href="/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#603cba" name="msapplication-TileColor" />
                    <meta
                        content="/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                </Head>
                <body className="bg-white dark:bg-electric-900 text-electric-400 dark:text-electric-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;