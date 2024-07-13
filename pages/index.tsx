import Image, { StaticImageData } from 'next/image';
import Layout from '../components/Layout';
import BlueHoodie from '../public/blue-hoodie.jpg';
import BrandedShirt from '../public/branded-shirt.jpg';
import DinnerDress from '../public/dinner-dress.jpg';
import EasyShopping from '../public/easy-shopping.jpg';
import FastDelivery from '../public/fast-delivery.jpg';
import GoodExperience from '../public/good-experience.jpg';
import HeroContainer from '../public/hero-container.jpg';
import NeckTop from '../public/neck-top.jpg';
import PrettyGown from '../public/pretty-gown.jpg';
import HalfFlowerTop from '../public/half-flower-top.jpg';
import FlowerTop from '../public/flower-top.jpg';
import BlueDinner from '../public/blue-dinner.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsCartDash } from "react-icons/bs";
import { useCart } from '../components/CartAdd';

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: StaticImageData; 
}

const products: Product[] = [
  { id: 1, image: BrandedShirt, name: 'Warning branded Shirt', price: 10, size: 'XXL' },
  { id: 2, image: DinnerDress, name: 'Black dinner dress', price: 25, size: 'M' },
  { id: 3, image: HalfFlowerTop, name: 'One-sided flower top', price: 15, size: 'M' },
  { id: 4, image: NeckTop, name: 'White halter neck top', price: 25, size: 'XL' },
  { id: 5, image: PrettyGown, name: 'Flowery pattern gown', price: 25, size: 'S' },
  { id: 6, image: BlueHoodie, name: 'Blue Hoodie', price: 10, size: 'XXL' },
  { id: 7, image: FlowerTop, name: 'Flowery Top', price: 10, size: 'XL' },
  { id: 8, image: BlueDinner, name: 'Blue Dinner gown', price: 10, size: 'L' },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <Layout>
      <section className="relative flex flex-col justify-center bg-cover bg-center bg-yellow-700 bg-transparent bg-opacity-40" style={{ backgroundImage: `url(${HeroContainer.src})`}}>
        <div className="relative z-10 pt-8 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto b p-6 rounded-lg bg-opacity-75 bg-yellow-700">
          <div className="max-w-2xl py-20 px-4 flex flex-col gap-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">GET YOUR FASHIONABLE DRESSES HERE AT A DISCOUNTED PRICE</h1>
            <p className="text-xl md:text-2xl text-gray-200">Your No 1 fashion online store is here at your service.</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-2 items-center gap-7 md:py-8">
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
            <div>
              <button className="flex items-center space-x-1 text-orange-300 text-xl">
                <span>See all products</span>
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {products.map((product) => (
              <div key={product.id} className="px-2 py-2 text-center">
                <Image src={product.image} alt={product.name} className="mx-auto" />
                <div className="py-4 px-4 rounded-3xl mt-1 bg-yellow-700">
                  <div className="flex justify-between mb-2">
                    <p className="text-wrap">{product.name}</p>
                    <p>{product.size}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>${product.price}</p>
                    <button
                      className="flex items-center bg-slate-100 text-orange-300 py-1 px-3 rounded-full"
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        size: product.size,
                        price: product.price,
                        image: product.image,
                        quantity: 1,
                      })}
                    >
                      <span className="hidden md:inline">+</span>
                      <span className="hidden md:inline">Add to cart</span>
                      <BsCartDash className="md:hidden text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
