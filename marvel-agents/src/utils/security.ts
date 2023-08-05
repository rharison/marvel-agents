import md5 from 'js-md5';
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY


export const getApiCredentials = () => {
    const timeStamp = new Date().getTime();
    const hash = md5.create();
    hash.update(timeStamp + PRIVATE_KEY + PUBLIC_KEY);

    return {
        ts: timeStamp,
        apikey: PUBLIC_KEY,
        hash: hash.hex()
    }
}