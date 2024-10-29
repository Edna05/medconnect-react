const Hero = () => {
    return (
      <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(/photo_accueil.svg)' }}>
      <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-white mx-14 mh-6 rounded-lg shadow-lg p-6 w-3/4 max-w-4xl border-4 border-blue-500">
          <div className="flex justify-between items-center mb-4">
              <div className="text-center  border-b-2 border-transparent hover:border-blue-500">
                  <h2 className="text-blue-600 font-bold">Contactez un médecin</h2>
              </div>
              <div className="text-center">
                  <h2 className=" border-b-2 border-transparent hover:border-blue-500 text-blue-600 font-bold">Prendre rendez-vous</h2>
              </div>
              <div className="text-center border-b-2 border-transparent hover:border-blue-500">
                  <h2 className="text-blue-600 font-bold">Bilan de santé rapide</h2>
              </div>
          </div>
          <div className="flex justify-between items-center">
              <button className="bg-gray-200 text-gray-700 py-2 px-4 border-1 rounded">Besoin d'appeler</button>
              <button className="bg-green-500 text-white py-2 px-4 border-1 rounded flex items-center">
                  Sélectionner la raison <i className="fas fa-chevron-down ml-2"></i>
              </button>
          </div>
      </div>
  </div>
      </section>
    );
  };
  
export default Hero; 