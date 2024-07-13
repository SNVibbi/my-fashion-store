import { StaticImageData } from 'next/image';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: StaticImageData;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  cartItemCount: number;
  alert: string;
  setAlert: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [alert, setAlert] = useState<string>('');

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItems => cartItems.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItems) =>
          cartItems.id === item.id ? { ...cartItems, quantity: cartItems.quantity + item.quantity} : cartItems
        );
      } else {
        return [...prevItems, item];
      }
    });
    setAlert(`${item.name} has been added to your cart`);
    setTimeout(() => setAlert(''), 3000);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + delta} : item
    )
  );
};

 const removeItem = (id: number) => {
   setCartItems(prevItems => prevItems.filter(item => item.id !== id));
 };

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, cartItemCount, alert, setAlert }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
