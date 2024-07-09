import Image from 'next/image';
import Link from 'next/link';
import Hero from '../public/hero.png'


const Header = () => (
  <header className="bg-orange-500 h-full text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <nav className='flex items-center space-x-7 font-bold'>
        <Image src={Hero} alt='Hero' />
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/products" className="mx-2 underline">Products</Link>
      </nav>
      <div className="flex items-center">
        <button className="mx-2">Search</button>
        <Link href="/cart" className="mx-2">Cart</Link>
      </div>
    </div>
  </header>
);

export default Header;
