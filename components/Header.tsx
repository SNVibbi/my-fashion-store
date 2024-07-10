import Image from 'next/image';
import Link from 'next/link';
import Hero from '../public/hero.png'
import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";

const Header = () => (
  <header className="text-white py-6 ">
    <div className="container text-sm mx-auto md:text-2xl flex justify-between items-center" style={{ backgroundColor: '#9E6924'}}>
      <nav className='flex items-center space-x-5 font-semibold md:space-x-9'>
        <Image src={Hero} alt='Hero' />
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/products" className="mx-2 underline">Products</Link>
      </nav>
      <div className="flex items-center justify-between md:space-x-8">
        <button className="mx-2 text-xl font-semibold md:text-3xl md:items-center "><CiSearch /></button>
        <div className='flex justify-between items-center md:text-3xl'>
          <Link href="/cart" className="mx-2 md:text-xl font-semibold"> <p><BsCartDash /></p> </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
