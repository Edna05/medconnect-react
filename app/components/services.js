const Services = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Programmes de soins de santé</h1>
            <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-6">
                <div className="items-center col-span-1 md:col-span-1 bg-white h-2/3 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                            <div className="relative h-48 w-48">                
                            <img
                                src="/Gestion du diabète.svg"
                                alt="Diabetes management"
                                className="w-full h-full object-cover rounded-full"
                            />
                        
                            <img
                                src="/Hmelen.svg"
                                alt="Superposed image"
                                className="w-32 h-32 object-cover rounded-full absolute bottom-14 left-32 border-4 border-white"
                            />
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Les soins de santé aident les gens à rester en bonne santé et à prévenir les maladies. Des examens de santé, des vaccinations et des dépistages réguliers peuvent détecter rapidement les problèmes de santé et éviter qu'ils ne s'aggravent.
                    </p>
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                   
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/Gestion du diabète.svg" alt="Diabetes management" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Gestion du diabète</h3>
                        <p className="text-gray-600 mb-4">Des conseils et des traitements pour gérer le diabète.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="Santé cardiovasculaire.svg" alt="Heart health" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Santé cardiovasculaire</h3>
                        <p className="text-gray-600 mb-4">Des programmes pour maintenir un cœur en bonne santé.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/Soutien à la santé mentale.svg" alt="Mental health" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Soins de la santé mentale</h3>
                        <p className="text-gray-600 mb-4">Des services pour soutenir la santé mentale.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="pathologies respiratoires.svg" alt="Respiratory conditions" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Pathologies respiratoires</h3>
                        <p className="text-gray-600 mb-4">Réduction de 90 % des visites aux urgences pour l'asthme et la BPCO.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="Gestion de l'arthrite.svg" alt="Arthritis management" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Gestion de l'arthrite</h3>
                        <p className="text-gray-600 mb-4">80 % des patients ont constaté une réduction de la douleur et une augmentation de la mobilité.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="Gestion du poids.svg" alt="Weight management" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Gestion du poids</h3>
                        <p className="text-gray-600 mb-4">75 % des patients ont atteint leurs objectifs de perte de poids dans les six mois.</p>
                        <a href="#" className="text-blue-600 font-bold">En savoir plus</a>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mt-8">Les retours de nos patients sur nous</h2>
        </div>
    );
};

export default Services;
