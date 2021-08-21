import { NextSeo } from "next-seo";
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";

export default function BookmarksPage() {
    return (
        <Page>
            <NextSeo
                title="Bookmarks · Luizov"
                description="A short description goes here."
            />

            <PageHeader
                title="Bookmarks"
                description="This page contains a collection of my favourite articles/resources/websites that I've stumbled upon."
            />
        </Page>
    )
}