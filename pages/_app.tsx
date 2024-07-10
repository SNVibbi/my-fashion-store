// These styles apply to every route in the application
import { CartProvider } from '@/components/CartAdd'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return(
    <CartProvider>
       <Component {...pageProps} />
    </CartProvider>
  ) 
}