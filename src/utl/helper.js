const URLPHORO = "https://jsonplaceholder.typicode.com/photos";

export async function getDateFromUrl(url) {
    const responce = await fetch(url);
    let db = await responce.json();
    return db;
}

export async function getPhotos(id = 1) {
    if (id > 0) {
        let photos = await getDateFromUrl(`${URLPHORO}?albumId=${id}`);
        return photos;
    }
    return [];
}