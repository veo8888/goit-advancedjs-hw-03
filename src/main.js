import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay.js';

import { renderGallery, clearGallery } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.searchQuery.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'The field must not be empty',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  toggleLoader(true);

  await new Promise(resolve => setTimeout(resolve, 1000)); // Тестовая задержка визуализации загрузчика

  try {
    const data = await fetchImages(query);
    toggleLoader(false);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    toggleLoader(false);
    iziToast.error({
      message: `Error: ${error.message}`,
      position: 'topRight',
    });
  }

  form.reset();
});

function toggleLoader(show) {
  const loader = document.querySelector('#loader');
  if (loader) {
    if (show) {
      loader.classList.remove('hidden');
    } else {
      loader.classList.add('hidden');
    }
  }
}
