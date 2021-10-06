import { Client } from '@notionhq/client';
import { config } from '../config';

const QUANTITY = 24;

const notion = new Client({
    auth: config.notionToken,
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        page_size: QUANTITY,
    });

    return {
        data: response.results,
        has_more: response.has_more
    };
};

export const getBookmarks = async (databaseId, cursor) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        page_size: QUANTITY,
        start_cursor: cursor ? cursor : undefined,
    });

    return {
        data: response.results,
        next_cursor: response.next_cursor,
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