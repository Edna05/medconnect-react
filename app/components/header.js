const Header = () => {
    return (
      <header className="bg-white  shadow-md">
        <div className="container mx-8 border-2 my-8 border-green-500 flex justify-between items-center ">
          <h1 className="text-2xl font-bold text-green-600"><span className="text-green-600">Med</span>
 <span className="text-black">connect</span>
 </h1>
 <div class="border-4 w-16 mb-0  border-b-green-500  "></div>    
            <ul className=" flex space-x-6">
              <li><a href="#" className="hover:text-green-600">Accueil</a></li>
              <li><a href="#" className="hover:text-green-600">Nos Services</a></li>
              <li><a href="#" className="hover:text-green-600">À Propos</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
            <button className="bg-green-500 text-white py-2 px-4 border rounded-full flex items-center">
    Connection
</button>
        </div>
      </header>
    );  
  };
  
  export default Header;
  