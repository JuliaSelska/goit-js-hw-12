import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
const lightbox = new SimpleLightbox('.js-gallery a');
const loader = document.querySelector('.loader');

let page = 1;
let searchedEl = '';
let perPage = 15;

loader.classList.add('hidden');
loadMoreBtn.classList.remove('hidden');

const onSearchFormSubmit = async event => {
  try {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.error({
      title: '',
      message: 'Please enter your request',
      messageColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });

    return;
    }

    page = 1;

    searchedEl = searchedQuery;

    
    loader.classList.remove('hidden');


    const {data} = await fetchPhotosByQuery(searchedQuery);
    if (data.total === 0) {
         iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }
      
  if (data.totalHits > perPage) {
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    } else {
      loadMoreBtn.classList.add('hidden');
    }

    
    const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
    galleryEl.innerHTML = galleryTemplate;
    lightbox.refresh();
  } 
  catch (err) {
    console.log(err);
  } 
  finally {
    
    loader.classList.add('hidden');
  }
};

const onLoadMoreBtnClick = async () => {
  try {
    page++;

   
    loader.classList.remove('hidden');

    const { data } = await fetchPhotosByQuery(searchedEl, page);

    const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    lightbox.refresh(); 

    const imgBox = galleryEl.getBoundingClientRect();
    let imgHeight = imgBox.height;

    window.scrollBy({
      top: imgHeight * 2,
      behavior: 'smooth',
    });

  
    if (page * perPage >= data.totalHits) {
      loadMoreBtn.classList.add('hidden');
      iziToast.show({
        title: '',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: 'blue',
      });

      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } 
  catch (err) {
    console.log(err);
  } 
  finally {
    loader.classList.add('hidden');
  }
};


searchFormEl.addEventListener('submit', onSearchFormSubmit);