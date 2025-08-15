import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${API_KEY}`
        },
        params: {
            query: term,
        }

    });
    console.log(response)
    return response.data.results;
}

export default searchImages;