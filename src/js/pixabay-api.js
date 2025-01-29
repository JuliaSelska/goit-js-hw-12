import axios from 'axios';

export const fetchPhotosByQuery = (searchedEl, currentPage) => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '48482195-738aed504c51f4c8c5e491b18',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`, searchParams);

};
