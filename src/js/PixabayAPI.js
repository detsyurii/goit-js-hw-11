import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31666644-bae50b9e8708dc3dd7c98b43c';
export const ITEMS_PER_PAGE = 40;

export async function getSearchImage({ value, page = 1 }) {
  const options = {
    params: {
      key: API_KEY,
      q: value,
      page: page,
      per_page: ITEMS_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
}
