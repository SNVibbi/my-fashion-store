import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from './CartAdd';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const { alert } = useCart();

  return (
    <div>
    <Header />
    {alert && (
      <div className='fixed top-0 left-0 right-0 bg-yellow-900 text-white p-4 text-center'>
        {alert}
      </div>
    )}
    <main>{children}</main>
    <Footer />
  </div>
  )
}
  
export default Layout;
