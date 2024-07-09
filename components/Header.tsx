import Image from 'next/image';
import Link from 'next/link';
import Hero from '../public/hero.png'
import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";

const Header = () => (
  <header className="bg-orange-500 h-full text-white py-8 px-4">
    <div className="container mx-auto sm:w-full md:w-full flex justify-between items-center">
      <nav className='flex items-center space-x-7 font-bold'>
        <Image src={Hero} alt='Hero' />
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/products" className="mx-2 underline">Products</Link>
      </nav>
      <div className="flex items-center space-x-10">
        <button className="mx-2 size-5 text-2xl font-semibold"><CiSearch /></button>
        <div className='flex justify-between items-center'>
          <p><BsCartDash /></p>
          <Link href="/cart" className="mx-2 text-xl font-semibold"> Cart </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
