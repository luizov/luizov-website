import { Client } from "@notionhq/client";
import { config } from '../config';

const QUANTITY = 10;

const notion = new Client({
    auth: config.notionToken,
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        page_size: QUANTITY,
        filter: {
            and: [
                {
                    property: 'status',
                    select: {
                        equals: 'Published',
                    },
                },
                {
                    property: 'slug',
                    rich_text: {
                        is_not_empty: true,
                    },
                },
            ],
        }
    });

    return {
        data: response.results,
        has_more: response.has_more
    };
};

export const getPage = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};

export const getBlocks = async (blockId) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    return response.results;
};