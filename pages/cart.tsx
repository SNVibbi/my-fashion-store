import Image from 'next/image';
import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Warning branded Shirt', size: 'M', quantity: 1, price: 10, image: '/branded-shirt.jpg' },
    { id: 2, name: 'Flowery pattern gown', size: 'S', quantity: 1, price: 25, image: '/pretty-gown.jpg' },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          {cartItems.map(item => (
            <div key={item.id} className="border-t border-orange-300 border-spacing-1 mt-2 flex space-x-5 items-center mb-4">
              <Image 
                src={item.image} width={100}
                height={100} alt={item.name} className=" mt-5" />
              <div className="flex flex-col">
                <p className='text-3xl mb-8 font-semibold'>{item.name}</p>
                <div className="flex flex-c items-center space-x-3 mt-2">
                  <label className="mr-2">Size</label>
                  <select className="border rounded px-2 py-1" value={item.size}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                <div className="flex items-center border">
                  <button className="px-2" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="px-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              </div>
              <p>${item.price * item.quantity}</p>
              <button className="ml-4 text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="flex  justify-between w-1/3 items-center border-t border-orange-300 pt-4 mt-4">
            <div>
              <p>Subtotal</p>
              <p>Discount</p>
              <p>Total</p>
            </div>
            <div>
              <p>${subtotal}</p>
              <p>$0</p>
              <p>${subtotal}</p>
            </div>
          </div>
          <Link href="/checkout">
          <button className="bg-orange-500 text-white py-2 px-4 mt-4 w-1/3 font-semibold text-xl">Checkout</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
