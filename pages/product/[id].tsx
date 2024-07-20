import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { fetchProductById } from '../../utils/api';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photos: { url: string }[];
  image: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        try {
          const data = await fetchProductById(parseInt(id as string));
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
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
          <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt={product.name} className="w-full h-auto mb-4" />
          <p className="text-xl mb-4">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </main>
    </Layout>
  );
};

export default ProductDetails;
