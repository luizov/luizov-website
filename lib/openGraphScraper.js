const meta = require("meta-grabber");
import Image from 'next/image';


export async function getOpenGraphImage(url) {
    const response = await meta(url);
    const title = response.title;
    const desc = response.description;
    const imageUrl = response.image;

    if (typeof imageUrl === 'undefined') {
        return 'https://a.storyblok.com/f/125390/800x421/289bdb8cf8/bookmark-default-image.jpg';
    }

    if (imageUrl.startsWith('/')) {
        return `${url}${imageUrl}`;
    }


    return imageUrl;
}