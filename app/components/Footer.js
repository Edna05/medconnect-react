import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex md:flex-row justify-between items-center">
     
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-green-600"><span className="text-green-600">Med</span>
          <span className="text-black">connect</span></h2>
        </div>

        <div className="grid  md:grid-cols-3 gap-24 ">

        <ul className=" mb-4 md:mb-0">
          <li>
            <a href="#" className="hover:text-blue-400">Politique de confidentialité</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Mentions légales</a>
           
          </li>
      </ul>
       <ul className=" mb-4 md:mb-0">
          <li>
            <a href="#" className="hover:text-blue-400">Médicaments</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Appareils de santé</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Progrès en matière de santé</a>
           </li>
              </ul>
              <ul className=" mb-4 md:mb-0">
           <li>
            <a href="#" className="hover:text-blue-400">Acceuil</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">A propos de nous</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Services</a>
           
          </li>
        </ul>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400">
        <p>© 2024 medConnect. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
