const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_APPID;
const API_KEY = process.env.NEXT_PUBLIC_APIKEY;

export const fetchProducts = async (page: number, limit: number) => {
  const res = await fetch(`${API_URL}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data;
};

export const fetchProductById = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await res.json();
  return data;
};
