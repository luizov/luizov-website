import { Client } from '@notionhq/client';
import { config } from '../config';

const QUANTITY = 10;

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
		has_more: response.has_more,
		next_cursor: response.next_cursor
	};
};

export const getBookmarks = async (databaseId, cursor) => {
	const response = await notion.databases.query({
		database_id: databaseId,
		start_cursor: cursor ? cursor : undefined,
	});

	return {
		data: response.results,
		total: response.results.length,
		has_more: response.has_more,
		next_cursor: response.next_cursor
	};
};

export const getPage = async (pageId) => {
	const response = await notion.pages.retrieve({ page_id: pageId });
	return response;
};

export const getPageProperties = async (pageId, propertyId) => {
	const response = await notion.pages.properties.retrieve({
		page_id: pageId,
		property_id: propertyId
	});

	return response;
};

export const getBlocks = async (blockId) => {
	const response = await notion.blocks.children.list({
		block_id: blockId,
		page_size: 50,
	});
	return response.results;
};
