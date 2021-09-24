const meta = require("meta-grabber");


export async function getOpenGraphImage(url) {
    const response = await meta(url);
    const imageUrl = response.image;

    if (imageUrl.startsWith('/')) {
        return `${url}${imageUrl}`
    }

    return imageUrl;
}