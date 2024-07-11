import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../public/hero.png';
import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from '../components/CartAdd';
import { RiHome5Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItemCount } = useCart();

  return (
    <header className="text-white py-4 md:text-2xl lg:text-4xl lg:px-6" style={{ backgroundColor: '#9E6924' }}>
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6 lg:py-6">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
          <Image src={Hero} alt='Hero' width={50} height={50} />
          <nav className="hidden md:flex space-x-6 ml-6 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/#products" className="underline">Products</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xl md:text-3xl lg:text-5xl"><CiSearch /></button>
          <Link href="/cart">
            <button className="relative text-xl md:text-3xl lg:text-5xl">
              <BsCartDash />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 md:h-7 md:w-7 lg:h-9 lg:w-9 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden text-white py-3 px-3 w-full z-10 h-full space-y-4 flex flex-col" style={{ backgroundColor: '#E08C39' }}>
          <Link href="/">
           <div className='flex items-center space-x-6'>
            <RiHome5Fill />
            <p>Home</p>
           </div>
          </Link>
          <Link href="#/products">
            <div className='flex items-center space-x-6'>
              <AiOutlineProduct />
              <p>Products</p>
            </div>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
