import Layout from '@/components/Layout';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <main className="min-h-screen md:p-5 lg:p-3 bg-yellow-700">
        <div className="container mx-auto px-4 py-4 md:px-8 md:py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg md:p-12 md:gap-3 lg:p-15 lg:gap-5">
            <h1 className="text-2xl font-bold mb-6 md:text-4xl lg:text-6xl">Cart</h1>
            {cartItems.map(item => (
              <div key={item.id} className="flex space-x-3 justify-between md:flex-row items-center md:justify-between border-t pt-4 mt-4 lg:mt-8 lg:pt-6 border-yellow-700">
                <Image 
                  src={item.image} width={100}
                  height={100} alt={item.name} className="mb-4 md:mb-10 lg:mb15" />
                <div>
                  <div className="flex flex-col md:flex md:justify-between ">
                    <p className='text-lg mb-4 md:mb-4 md:text-3xl lg:text-4xl font-semibold'>{item.name}</p>
                    <div className="flex items-center mb-4 md:mb-3 lg:mb-5">
                      <label className="mr-2 text-sm md:text-2xl lg:text-3xl">Size</label>
                      <select className="border rounded text-sm md:text-2xl md:px-3 lg:text-3xl lg:px-4 " value={item.size} disabled>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                    <div className="flex items-center text-sm ">
                      <label className="mr-2 md:text-2xl lg:text-3xl">Quantity</label>
                      <div className="flex border rounded">
                        <button className="px-1 md:px-3 lg:px-4 md:text-xl lg:text-2xl" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                        <span className="px-1 md:px-3 lg:px-4 md:text-xl lg:tex-2xl">{item.quantity}</span>
                        <button className="px-1 md:px-3 lg:px-4 md:text-xl lg:text-2xl" onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end md:flex-row md:space-x-4">
                  <div className='flex flex-col justify-between gap-7 text-sm font-semibold'>
                    <button className="mb-4 md:mb-3 md:text-3xl text-2xl" onClick={() => removeFromCart(item.id)}>X</button>
                    <p className="font-bold md:text-2xl">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='flex flex-col items-end gap-3 mt-4 border-t mb-2 space-x-6 md:gap-7 md:text-2xl border-yellow-700'>
              <div className='flex justify-between gap-12 mt-3'>
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className='flex justify-between gap-12'>
                <p>Discount</p>
                <p>$0</p>
              </div>
              <div className='flex justify-between gap-12 md:border-t border-yellow-700'>
                <p>Total</p>
                <p>${subtotal}</p>
              </div>
              <Link href="/checkout">
                <button className="text-white text-center py-2 px-10 mt-6 rounded-md font-semibold flex justify-items-end gap-3 bg-yellow-700">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
