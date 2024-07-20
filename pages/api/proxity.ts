import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_APPID;
const API_KEY = process.env.NEXT_PUBLIC_APIKEY;

const ProductFetch = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page = 1, limit = 10 } = req.query;
  const url = `${API_URL}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export default ProductFetch;
