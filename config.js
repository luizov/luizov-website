const githubToken = process.env.GITHUB_TOKEN;
const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

/* if (!githubToken) {
    throw new Error("Missing environment variable GITHUB_TOKEN.");
} */

export const config = {
    githubUsername: 'luizov',
    githubToken,
    notionToken,
    notionDatabaseId
};