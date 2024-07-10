import Layout from '../components/Layout';
import { useState } from 'react';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('4, Ajanelokoko street, Obalende, Ikeja, Lagos state.');
  const [contactInfo, setContactInfo] = useState('+234 567 8933 444');
  const [deliveryType, setDeliveryType] = useState('Express');
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const [cartItems] = useState([
    { id: 1, name: 'Warning branded Shirt', size: 'M', quantity: 1, price: 10, image: '/product1.jpg' },
    { id: 2, name: 'Flowery pattern gown', size: 'S', quantity: 1, price: 25, image: '/product2.jpg' },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 4.5;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="container mx-auto w-screen py-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="flex flex-wrap space-x-8 ">
          <div className="flex-1 bg-white border-t border-amber-400 p-4 mr-4">
            <div className="mb-8">
              <h2 className="font-bold text-2xl mt-8 mb-4">Shipping Address</h2>
              <p className='rounded-full border-amber-400 border text-balance px-8 py-4'>{shippingAddress}</p>
            </div>
            <div className="mb-4 border-t mt-6 border-amber-400">
              <h2 className="font-bold text-2xl mt-8 mb-4">Contact Info</h2>
              <p className='rounded-full border-amber-400 border mt-4 text-balance px-8 py-4'>{contactInfo}</p>
            </div>
            <div className="border-t mt-6 border-amber-400 mb-4">
              <h2 className="font-bold text-2xl mt-8 mb-4">Delivery Type</h2>
              <select className="border border-amber-400 mb-4 rounded-full w-full px-8 py-4" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                <option value="Express">Express</option>
                <option value="Standard">Standard</option>
                <option value="Pickup">Pickup</option>
              </select>
            </div>
            <div className=" mb-4 mt-6 border-t border-amber-400 ">
              <h2 className="font-bold text-2xl mt-8 mb-4">Payment Method</h2>
              <select className="border border-amber-400 w-full rounded-full px-8 py-4" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="Paypal">Paypal</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
          </div>
          <div className="w-full h-1/3 md:w-1/3 text-white font-semibold py-8 px-7" style={{backgroundColor: '#9E6924'}}>
            <h2 className="font-bold">Order Summary</h2>
            <ul className='border-t border-amber-400 mt-4'>
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between my-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-amber-400 mt-4 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-amber-400 mb-4 font-bold">
                <span className='mt-4'>Total</span>
                <span className='mt-4'>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="bg-white text-amber-700 py-2 px-1 mt-4 w-3/4">Proceed</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
