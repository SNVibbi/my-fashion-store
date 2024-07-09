import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => (
    <footer className="bg-orange-500 text-white w-full h-full py-5 px-2">
        <div className="flex  justify-around items-center mb-4">
              <p className="text-xl font-semibold ">Subscribe to our news letter</p>
              <div className="flex flex-row-reverse">
              <input type="email" placeholder="Email" className="text-slate-100 rounded-2xl absolute px-14"/>
              <button className="bg-orange-800 rounded-2xl relative px-6" >Subscribe</button>
              </div>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex space-x-6 text-3xl mb-4">
            <li><FaSquareInstagram /></li>
            <li><BsTwitterX /></li>
            <li className="text-blue-800"><BsFacebook /></li>
          </ul>
          <p className="text-4xl font-bold">Dressavenue</p>
        </div>
    </footer>
  );
  
  export default Footer;
  