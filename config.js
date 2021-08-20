const githubToken = process.env.GITHUB_TOKEN;
const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const mailchimpToken = process.env.MAILCHIMP_API_KEY;
const mailchimpServer = process.env.MAILCHIMP_API_SERVER;
const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;

/* if (!githubToken) {
    throw new Error("Missing environment variable GITHUB_TOKEN.");
} */

export const config = {
    githubUsername: 'luizov',
    githubToken,
    notionToken,
    notionDatabaseId,
    mailchimpToken,
    mailchimpServer,
    mailchimpAudienceId
};