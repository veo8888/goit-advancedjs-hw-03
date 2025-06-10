const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50732849-21223ac287faa79ee0d00336e';

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 20,
  });

  const url = `${BASE_URL}?${params}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
