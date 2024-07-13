import { useCart } from '@/components/CartAdd';
import Layout from '../components/Layout';
import { useState } from 'react';
import { BsCartDash } from "react-icons/bs";
import Modal from '@/components/Modal';
import Link from 'next/link';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('4, Ajanelokoko street, Obalende, Ikeja, Lagos state.');
  const [contactInfo, setContactInfo] = useState('+234 567 8933 444');
  const [deliveryType, setDeliveryType] = useState('Express');
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const { cartItems } = useCart();
  const [showModal, setshowModal] = useState(false);



  // const [cartItems] = useState([
  //   { id: 1, name: 'Warning branded Shirt', size: 'M', quantity: 1, price: 10, image: '/product1.jpg' },
  //   { id: 2, name: 'Flowery pattern gown', size: 'S', quantity: 1, price: 25, image: '/product2.jpg' },
  // ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 4.5;
  const total = subtotal + shipping;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress(e.target.value);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Shipping Address:', shippingAddress);
    console.log('Contact Info:', contactInfo);
  };

  return (
    <Layout>
      <main className="min-h-screen md:flex md:justify-between md:text-2xl bg-yellow-700">
        <div className="container px-3 mx-auto w-screen py-8">
        <div className='bg-white p-6 rounded-lg shadow-lg md:2/3'>
          <h1 className="text-2xl font-bold mb-4 md:text-4xl">Checkout</h1>
          <div className="flex flex-wrap space-x-8 ">
            <div className="flex-1 border-t border-yellow-700 p-4 mr-4">
              <div className="mb-8">
                <h2 className="font-bold text-2xl mt-8 mb-4">Shipping Address</h2>
                <input
                      type="text"
                      value={shippingAddress}
                      onChange={handleAddressChange}
                      className="w-full rounded-full border border-yellow-700 py-2 px-4"
                      placeholder="Enter your shipping address"
                      required
                    />
              </div>
              <div className="mb-4 border-t mt-6 border-yellow-700">
                <h2 className="font-bold text-2xl mt-8 mb-4">Contact Info</h2>
                <input
                      type="text"
                      value={contactInfo}
                      onChange={handleContactChange}
                      className="w-full rounded-full border border-yellow-700 py-2 px-4"
                      placeholder="Enter your contact info"
                      required
                    />
              </div>
              <div className="border-t mt-6 border-yellow-700 mb-4">
                <h2 className="font-bold text-2xl mt-8 mb-4">Delivery Type</h2>
                <select className="border border-yellow-700 mb-4 rounded-full w-full px-8 py-4" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                  <option value="Express">Express</option>
                  <option value="Standard">Standard</option>
                  <option value="Pickup">Pickup</option>
                </select>
              </div>
              <div className=" mb-4 mt-6 border-t border-yellow-700 ">
                <h2 className="font-bold text-2xl mt-8 mb-4">Payment Method</h2>
                <select className="border border-yellow-700 w-full rounded-full px-8 py-4" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="Paypal">Paypal</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
          </div>
        </div>
        </div>
        <div className='bg-white p-6 text-yellow-700 rounded-lg shadow-lg mt-4'>
          <div className="w-full mt-4 bg-white h-1/3  font-semibold py-8 px-7 ">
              <h2 className="font-bold md:text-3xl">Order Summary</h2>
              <div className='flex justify-between py-4 items-center border-t border-yellow-700 mt-4'>
                  <div className='flex space-x-2 items-center'>
                    <BsCartDash />
                    <p>{totalQuantity}</p>
                    <p>item(s) in cart</p>
                  </div>
                  <p>Edit</p>
              </div>
              <div className="border-t border-yellow-700 mt-4 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-yellow-700 mb-4 font-bold">
                  <span className='mt-4'>Total</span>
                  <span className='mt-4'>${total.toFixed(2)}</span>
                </div>
              </div>
              <button type="submit" className="text-white py-2 px-1 mt-4 w-full bg-yellow-700">Proceed</button>
            </div>
          </div>
      </div>
      </main>
      <Modal show={showModal} onClose={() => setshowModal(false)}>
        <div className='text-center'>
          <div className='flex items-center justify-center mb-4'>
            <svg className='w-16 h-16 text-green-500 fill="currentColor' viewBox='0 0 20 20'>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-9a1 1 0 00-.707 1.707l2.5 2.5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-1.793-1.793A1 1 0 008 9z" clipRule="evenodd" />
            </svg>
          </div>
          <h2>Your Payment is Successfully Made</h2>
        </div>
        <Link href="/">
          <button className='text-white py-2 px-4 mt-4 inline-block rounded-md bg-yellow-700'>Back Home</button>
        </Link>
      </Modal>
    </Layout>
  );
};

export default Checkout;