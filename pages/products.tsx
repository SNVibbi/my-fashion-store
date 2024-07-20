import { useCart } from '../components/CartAdd';
import Link from 'next/link';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import { BsCartDash } from 'react-icons/bs';
import axios from 'axios';
import Image from 'next/image';

interface Product {
  photo: { url: string }[];
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
}

const Products = () => {
  const { addToCart } = useCart();
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const data_url = `${API_URL}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(data_url, {
          params: {
            page: currentPage,
            limit: 10,
            Appid: process.env.NEXT_PUBLIC_API_ID,
            Apikey: process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        setData(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
      }
    };
    getProducts();
  }, [currentPage, data_url]);

  return (
    <Layout>
      <section id="products" className="py-8">
        <div className="flex justify-between mb-4 px-4">
          <h2 className="text-2xl font-semibold">Trending Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {error ? (
            <p>Error: {error}</p>
          ) : data.length > 0 ? (
            data.map((product) => (
              <div key={product.id} className="px-2 py-2 text-center">
                <Link href={`/product/${product.id}`}>
                  <button>
                    <Image src={`https://api.timbu.cloud/images/${product.photo[0]?.url}`} alt={product.name} width={200} height={200} className="mx-auto" />
                    <div className="py-3 px-4 rounded-3xl mt-1 bg-yellow-700">
                      <div className="flex justify-between mb-2">
                        <p className="text-wrap">{product.name}</p>
                        <p>{product.size}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>${product.price}</p>
                        <button
                          className="flex items-center bg-slate-100 text-orange-300 py-1 px-3 rounded-full"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart({
                              id: product.id,
                              name: product.name,
                              size: product.size,
                              price: product.price,
                              image: product.photo[0]?.url,
                              quantity: 1,
                              photo: []
                            });
                          }}
                        >
                          <span className="hidden md:inline">+</span>
                          <span className="hidden md:inline">Add to cart</span>
                          <BsCartDash className="md:hidden text-lg" />
                        </button>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`mx-1 px-3 py-1 rounded-full ${page === currentPage ? 'bg-yellow-700 text-white' : 'bg-white text-amber-900'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
