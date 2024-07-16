import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { fetchProductById } from '../../utils/api';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        try {
          const data = await fetchProductById(parseInt(id as string));
          setProduct(data);
        } catch (error) {
          console.error(error);
        }
      };
      getProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <main className="min-h-screen p-5" style={{ backgroundColor: '#9E6924' }}>
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <Image src={product.image} alt={product.name} width={600} height={400} className="w-full h-auto mb-4" />
          <p className="text-xl mb-4">${product.price}</p>
          <p>{product.description}</p>
          <button
            className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full"
            onClick={() => addToCart({ ...product, size: 'M', quantity: 1 })}
          >
            Add to Cart
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default ProductDetails;
