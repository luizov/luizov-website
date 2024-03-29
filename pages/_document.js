import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Switzer-Regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Switzer-Medium.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Switzer-Semibold.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Switzer-Bold.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/JetBrainsMono-Regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
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
					<meta content="#FDFCFD" name="theme-color" />
					<meta content="#603cba" name="msapplication-TileColor" />
					<meta
						content="/favicons/browserconfig.xml"
						name="msapplication-config"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
