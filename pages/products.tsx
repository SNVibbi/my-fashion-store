import { useCart } from '@/components/CartContext';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCartDash } from 'react-icons/bs';
import { fetchProducts } from '../utils/api';

interface Product {
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

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts(currentPage, 12);
        if (response && response.products) {
          setData(response.products);
          setTotalPages(response.totalPages);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        setError('Failed to fetch products');
      }
    };
    getProducts();
  }, [currentPage]);

  return (
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
                  <img src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
                  <div className="py-3 px-4 rounded-3xl mt-1" style={{ background: '#9E6924' }}>
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
                            image: product.image,
                            quantity: 1,
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
      <Link href='/' alt={"home"} className='bg-yellow-700 text-gray-200 rounded px-1 flex items-center'>Back Home</Link>
    </section>
  );
};

export default Products;
