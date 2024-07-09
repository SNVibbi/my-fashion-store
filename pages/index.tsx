import Image from 'next/image';
import Layout from '../components/Layout';
import BlueHoodie from '../public/blue-hoodie.jpg'
import BrandedShirt from '../public/branded-shirt.jpg'
import DinnerDress from  '../public/dinner-dress.jpg'
import EasyShopping from '../public/easy-shopping.jpg'
import FastDelivery from '../public/fast-delivery.jpg'
import GoodExperience from '../public/good-experience.jpg'
import HeroContainer from '../public/hero-container.jpg'
import NeckTop from '../public/neck-top.jpg'
import PrettyGown from '../public/pretty-gown.jpg' 
import FlowerTop from '../public/flower-top.jpg'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="flex flex-wrap justify-around py-8">
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
          <div className='flex justify-between mb-4'>
            <h2 className="text-2xl font-semibold">Trending Products</h2>
            <button className="text-orange-300 text-xl">See all products</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" px-2 py-2 text-center">
              <Image src={BrandedShirt} alt="Product 1" className="mx-auto" />
              <div className='bg-orange-800 py-3 px-4 rounded-3xl mt-1'>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Warning <br /> branded Shirt</p>
                <p>XXL</p>
              </div>
              <div className='flex justify-between '>
                <p>$10</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={DinnerDress} alt="Product 2" className="mx-auto" />
              <div className='bg-orange-800 py-3 px-4 rounded-3xl mt-1'>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Black dinner <br />dress</p>
                <p>M</p>
              </div>
              <div className='flex justify-between '>
                <p>$10</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={FlowerTop} alt="Product 3" className="mx-auto" />
              <div className='bg-orange-800 py-3 px-4 rounded-3xl mt-1'>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>One-sided flower <br /> top</p>
                <p>M</p>
              </div>
              <div className='flex justify-between '>
                <p>$10</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={BrandedShirt} alt="Product 2" className="mx-auto" />
              <div className='bg-orange-800 py-3 px-4 rounded-3xl mt-1'>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Warning <br /> branded Shirt</p>
                <p>XXL</p>
              </div>
              <div className='flex justify-between '>
                <p>$10</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={BrandedShirt} alt="Product 2" className="mx-auto" />
              <div className='bg-orange-800 py-3 px-4 rounded-3xl mt-1'>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Warning <br /> branded Shirt</p>
                <p>XXL</p>
              </div>
              <div className='flex justify-between '>
                <p>$10</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}