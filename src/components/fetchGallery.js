import axios from "axios";

//Pixabay API
export const fetchGallery = async (q, page) => {
    const baseURL = `https://pixabay.com/api/?q=${q}&page=${page}&key=42474865-55c278fe0045234625bd75cd9&image_type=photo&orientation=horizontal&per_page=12`
    try {
      const response = await axios.get(baseURL);
      return response.data
    } catch (error) {
        console.error('Fetching error:', error)
    }
}