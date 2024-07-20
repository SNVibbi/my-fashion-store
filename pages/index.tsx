import Layout from '../components/Layout';
import EasyShopping from '../public/easy-shopping.jpg';
import FastDelivery from '../public/fast-delivery.jpg';
import GoodExperience from '../public/good-experience.jpg';
import HeroContainer from '../public/hero-container.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import { IoIosArrowRoundForward } from "react-icons/io";
// import { useCart } from '../components/CartAdd';
import Link from 'next/link';
import { BsCartDash } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useCart } from '@/components/CartContext';

interface Product {
  photo: { url: string }[];
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
}

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(currentPage, 10);
        console.log('Fetched products:', data); 
        if (data && data.products) {
          setProducts(data.products);
          setTotalPages(data.totalPages);
        } else {
          setError('Failed to fetch products: No products data');
        }
      } catch (error) {
        console.error('Error fetching products:', error); 
        setError('Failed to fetch products: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <section className="relative flex flex-col justify-center bg-cover bg-center bg-yellow-700" style={{ backgroundImage: `url(${HeroContainer.src})` }}>
        <div className="relative z-10 pt-8 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto bg-opacity-75 bg-amber-900 p-6 rounded-lg">
          <div className="max-w-2xl py-20 px-4 flex flex-col gap-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">GET YOUR FASHIONABLE DRESSES HERE AT A DISCOUNTED PRICE</h1>
            <p className="text-xl md:text-2xl text-gray-200">Your No 1 fashion online store is here at your service.</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <section className="flex flex-wrap justify-center gap-10 py-8">
          <div className="text-center m-4">
            <Image src={FastDelivery} alt="Fast Delivery" className="mx-auto" />
            <p>Fast and safe delivery</p>
          </div>
          <div className="text-center m-4">
            <Image src={EasyShopping} alt="Easy Shopping" className="mx-auto" />
            <p>Easy shopping</p>
          </div>
          <div className="text-center m-4">
            <Image src={GoodExperience} alt="Good Experience" className="mx-auto" />
            <p>Good experience</p>
          </div>
        </section>
        <section className="py-8">
          <div className="flex justify-between mb-4 px-4">
            <h2 className="text-2xl font-semibold">Trending Products</h2>
            <Link href="/products">
              <button className="flex items-center space-x-1 text-orange-300 text-xl">
                <span>See all products</span>
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="px-2 py-2 text-center">
                  <Link href={`/product/${product.id}`}>
                    <button>
                      <Image src={`/api.timbu.cloud/images/${product.photo[0]?.url}`} alt={product.name} width={200} height={200} className="mx-auto" />
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
                                image: product.photo[0]?.url,
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
              <p>No products available</p>
            )}
          </div>
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`mx-1 px-3 py-1 rounded-full ${page === currentPage ? 'bg-amber-900 text-white' : 'bg-white text-amber-900'}`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
