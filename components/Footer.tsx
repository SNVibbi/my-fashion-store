import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => (
    <footer className="text-white w-full h-full py-5">
        <div className="flex flex-col  mb-4 space-x-9 py-2 px-2 justify-between items-center lg:justify-evenly lg:flex lg:flex-row lg:mb-4 md:flex md:flex-row md:text-2xl ">
              <p className="text-2xl mb-4 text-wrap lg:text-4xl md:text-3xl font-semibold  ">Subscribe to our news letter</p>
              <div className="flex flex-row-reverse items-center">
              <input type="email" placeholder="Email" className="text-slate-100 rounded-2xl absolute px-9 md:px-10 md:py-1 lg:py-1 lg:px-16"/>
              <button className=" rounded-2xl relative md:py-1  px-4 md:px-6 lg:px-10 lg:py-1" style={{backgroundColor: '#9E6924'}} >Subscribe</button>
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
  
