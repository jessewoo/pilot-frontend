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

    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    if (error.response?.status === 404) {
      console.warn(`Page not found for slug: ${slug}`);
    } else {
      console.error('Error fetching page:', error.message);
    }
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

// Fetch navigation menus from Wagtail API
export async function getNavigationMenus() {
  try {
    const response = await axios.get(`${API_URL}/navigation_menus/`);
    // console.log('Fetched navigation menus:', response);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      console.warn('Navigation menus endpoint not found');
    } else {
      console.error('Error fetching navigation menus:', error.message);
    }
    return { items: [] };
  }
}