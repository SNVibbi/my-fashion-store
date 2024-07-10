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
import HalfFlowerTop from '../public/half-flower-top.jpg'
import FlowerTop from '../public/flower-top.jpg'
import BlueDinner from '../public/blue-dinner.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <Layout>
        {/* <section className="relative w-full max-h-screen flex flex-col justify-center">
          <Image 
            fill
            priority
            quality={100}
            className='pointer-events-none select-none'
            src={HeroContainer} 
            alt='Hero Container'
            style={{ objectFit: 'cover', objectPosition: '75%'}}
          />
          <div className='relative z-10 pt-32 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto '>
            <div className='max-w-2xl py-20 px-4 flex flex-col gap-8 md:max-xl md:max-xl:rounded-1xl'>
              <h1 className="text-xl text-white -ml-10 md:6xl sm:-ml-6 sm:text-lg  font-semibold  lg:-ml-10 lg:text-5xl md:text-5xl lg-justify-normal ">GET YOUR FASHIONABLE DRESSES HERE AT A DISCOUNTED PRICE</h1>
              <p className='-ml-20 sm:-ml-4 text-gray-200 text-xl max-w-xl lg:-ml-10 lg-justify-normal'>Your No 1 fashion online store is here at your service.</p>
            </div>
          </div>
        </section> */}
        <div className="container mx-auto">
        <section className="flex flex-wrap  mt-4 mb-4 justify-center gap-10 py-8 sm:gap-5">
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
            <h2 className="text-2xl font-semibold px-10 sm:px-5">Trending Products</h2>
            <div className='flex items-center space-x-1 px-10'>
             <button className="text-orange-300 text-xl">See all products</button>
             <p className='text-2xl text-orange-300'><IoIosArrowRoundForward /></p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" px-2 py-2 text-center">
              <Image src={BrandedShirt} alt="Product 1" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Warning  branded Shirt</p>
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
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Black dinner dress</p>
                <p>M</p>
              </div>
              <div className='flex justify-between '>
                <p>$25</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={HalfFlowerTop} alt="Product 3" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>One-sided flower  top</p>
                <p>M</p>
              </div>
              <div className='flex justify-between '>
                <p>$15</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={NeckTop} alt="Product 4" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>White halter  neck top</p>
                <p>XL</p>
              </div>
              <div className='flex justify-between '>
                <p>$25</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={PrettyGown} alt="Product 5" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Flowery  pattern gown</p>
                <p>S</p>
              </div>
              <div className='flex justify-between '>
                <p>$25</p>
                <button className="flex space-x-4 bg-slate-100 text-orange-300 py-1 px-3 rounded-full">
                   <p>+</p>
                   <p>Add to cart</p>
                </button>
              </div>
              </div>
            </div>
            <div className=" px-2 py-2 text-center">
              <Image src={BlueHoodie} alt="Product 6" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Blue Hoodie</p>
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
              <Image src={FlowerTop} alt="Product 7" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Flowery Top</p>
                <p>XL</p>
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
              <Image src={BlueDinner} alt="Product 8" className="mx-auto" />
              <div className='py-3 px-4 rounded-3xl mt-1' style={{background: '#9E6924'}}>
              <div className='flex justify-between mb-2'>
                <p className='text-wrap'>Blue Dinner gown</p>
                <p>L</p>
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
            <button className='text-2xl font-semibold underline text-orange-400'>See more</button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
