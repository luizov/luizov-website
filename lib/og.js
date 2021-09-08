import { rog } from 'rog';
import { rogImage } from 'rog-plugin-image';

export async function getOpenGraphImage(url) {
    rog(url, {
        image: rogImage
    }).then(data => {
        console.log(data.image); // => <meta property="og:image">
    }).catch(error => {
        console.error(error);
    });
}