import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../public/hero.png';
import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from '../components/CartAdd';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItemCount } = useCart();

  return (
    <header className="text-white py-4" style={{ backgroundColor: '#9E6924' }}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
          <Image src={Hero} alt='Hero' width={50} height={50} />
          <nav className="hidden md:flex space-x-6 ml-6 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/products" className="underline">Products</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xl md:text-3xl"><CiSearch /></button>
          <Link href="/cart">
            <button className="relative text-xl md:text-3xl">
              <BsCartDash />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden text-white  p-4 space-y-4 flex flex-col" style={{ backgroundColor: '#9E6924' }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
