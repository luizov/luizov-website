import Head from 'next/head';
import PageError from "../layouts/PageError";

export default function Page404() {
    return (
        <PageError>
            <Head>
                <title>404 · Luizov</title>
            </Head>
        </PageError>
    )
}