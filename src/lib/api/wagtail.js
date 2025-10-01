import axios from 'axios';

const API_URL = import.meta.env.PUBLIC_WAGTAIL_API_URL || 'http://localhost:8000/api/v2';

export async function getPages() {
  try {
    const response = await axios.get(`${API_URL}/pages/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return { items: [] };
  }
}

export async function getPageBySlug(slug) {
  try {
    const response = await axios.get(`${API_URL}/pages/`, {
      params: {
        slug: slug,
        fields: '*'
      }
    });
    
    if (response.data.items && response.data.items.length > 0) {
      return response.data.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageBySlugUpdated(slug) {
  try {
    const response = await axios.get(`${API_URL}/page-by-slug/`, {
      params: {
        slug: slug
      }
    });
    
    console.log('API response for slug:', slug, response.data);

    if (response.data) {
      return response.data;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageById(id) {
  try {
    const response = await axios.get(`${API_URL}/pages/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching page by ID:', error);
    return null;
  }
}