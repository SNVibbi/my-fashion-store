import Layout from '../components/Layout';
import { useState } from 'react';
import { BsCartDash } from "react-icons/bs";

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
      <main className="min-h-screen md:flex md:justify-between md:text-2xl" style={{ backgroundColor: '#9E6924'}}>
        <div className="container px-3 mx-auto w-screen py-8">
        <div className='bg-white p-6 rounded-lg shadow-lg md:2/3'>
          <h1 className="text-2xl font-bold mb-4 md:text-4xl">Checkout</h1>
          <div className="flex flex-wrap space-x-8 ">
            <div className="flex-1 border-t border-amber-400 p-4 mr-4">
              <div className="mb-8">
                <h2 className="font-bold text-2xl mt-8 mb-4">Shipping Address</h2>
                <input
                      type="text"
                      value={shippingAddress}
                      onChange={handleAddressChange}
                      className="w-full rounded-full border border-amber-400 py-2 px-4"
                      placeholder="Enter your shipping address"
                      required
                    />
              </div>
              <div className="mb-4 border-t mt-6 border-amber-400">
                <h2 className="font-bold text-2xl mt-8 mb-4">Contact Info</h2>
                <input
                      type="text"
                      value={contactInfo}
                      onChange={handleContactChange}
                      className="w-full rounded-full border border-amber-400 py-2 px-4"
                      placeholder="Enter your contact info"
                      required
                    />
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
        </div>
        </div>
        <div className='bg-white p-6 text-amber-800 rounded-lg shadow-lg mt-4'>
          <div className="w-full mt-4 bg-white h-1/3  font-semibold py-8 px-7 ">
              <h2 className="font-bold md:text-3xl">Order Summary</h2>
              <div className='flex justify-between py-4 items-center border-t border-amber-400 mt-4'>
                  <div className='flex space-x-2 items-center'>
                    <BsCartDash />
                    <p>{totalQuantity}</p>
                    <p>item(s) in cart</p>
                  </div>
                  <p>Edit</p>
              </div>
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
              <button className="text-white py-2 px-1 mt-4 w-full"style={{backgroundColor: '#9E6924'}}>Proceed</button>
            </div>
          </div>
      </div>
      </main>
    </Layout>
  );
};

export default Checkout;