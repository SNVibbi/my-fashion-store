const Footer = () => (
    <footer className="bg-orange-500 text-white w-full h-full py-10 px-2">
        <div className="flex justify-evenly mb-4 items-center mb-4">
            <p className="text-2xl">Subscribe to our news letter</p>
              <div>
              <input type="email" className="rounded-2xl absolute px-8"/>
              <button className="bg-orange-800 rounded-2xl relative px-6" >Subscribe</button>
              </div>
        </div>
        <div className="flex flex-col items-center">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="text-4xl font-bold">Dressavenue</p>
        </div>
    </footer>
  );
  
  export default Footer;
  