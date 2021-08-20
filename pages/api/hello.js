import { Client } from "@notionhq/client";
import { config } from '../../config';

const notion = new Client({
  auth: config.notionToken,
});

export default async function handler(req, res) {
  const response = await notion.databases.query({
    database_id: config.notionDatabaseId,
  });
  res.status(200).json({ response })
}
