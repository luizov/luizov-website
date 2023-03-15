const cheerio = require('cheerio');
const axios = require('axios');

export const metaGrabber = async (url) => {

	const res = await axios.get(url);
	const body = res.data;
	const statusCode = res.status;

	let $ = cheerio.load(body);

	var title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content');
	var description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content');
	var url = $('meta[property="og:url"]').attr('content');
	var site_name = $('meta[property="og:site_name"]').attr('content');
	var image = $('meta[name="twitter:image"]').attr('content') || $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content');
	var icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');
	var keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content');

	let json = {
		statusCode,
		title: title,
		description: description,
		url: url,
		site_name: site_name,
		image: image,
		icon: icon,
		keywords: keywords
	};

	return json;
}


export async function getOpenGraphImage(url) {
	const response = await metaGrabber(url);
	let imageUrl = response.image;

	if (typeof imageUrl === 'undefined') {
		return 'https://a.storyblok.com/f/125390/800x421/289bdb8cf8/bookmark-default-image.jpg';
	}

	/** image.png */
	if (!imageUrl.startsWith('https://') && !imageUrl.startsWith('http://') && !imageUrl.startsWith('/')) {
		return `${url}/${imageUrl}`;
	}

	/** /image.png */
	if (imageUrl.startsWith('/')) {
		return `${url}${imageUrl}`;
	}

	return imageUrl;
}
