import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => (
    <footer className="text-white w-full h-full py-5 px-2">
        <div className="flex  mb-4 space-x-9  justify-between items-center md:flex:justify-between">
              <p className="text-sm lg:text-4xl md:text-2xl font-semibold  ">Subscribe to our news letter</p>
              <div className="flex flex-row-reverse">
              <input type="email" placeholder="Email" className="text-slate-100 rounded-2xl absolute px-3 md:px-10 lg:px-12"/>
              <button className=" rounded-2xl relative px-3 md:px-6 lg:px-8" style={{backgroundColor: '#9E6924'}} >Subscribe</button>
              </div>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex space-x-4 text-3xl mb-4 md:text-5xl lg:text-6xl">
            <li><FaSquareInstagram /></li>
            <li><BsTwitterX /></li>
            <li className="text-blue-800"><BsFacebook /></li>
          </ul>
          <p className="text-xl font-bold md:text-4xl lg:text-6xl">Dressavenue</p>
        </div>
    </footer>
  );
  
  export default Footer;
  
