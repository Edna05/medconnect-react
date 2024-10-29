const DepartementData = [
    { name: "Cardiologie", image: "/cardiologie.svg", alt: "Cardiologie" },
    { name: "Ophtalmologie", image: "/ophtalmologie.svg", alt: "Ophtalmologie"},
    { name: "Gynécologie", image: "/gynecologie.svg", alt: "Gynécologie" },
    { name: "Soins Dentaires",  image: "/dentiste.svg", alt: "Soins Dentaires" },
    { name: "Chirurgie Plastique",  image: "/chirurgie.svg", alt: "Chirurgie Plastique" },
    { name: "Pédiatrie",  image: "/pediatrie.svg", alt: "Pédiatrie" },
    { name: "Gastro-entérologie",  image: "/gastrologie.svg", alt: "Gastro-entérologie" },
    { name: "Neurologie", image: "/neurologie.svg", alt: "Neurologie" }
];

function Departements() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-2">Nos Départements</h1>
            <p className="text-gray-600 text-center mb-8">
                Voici une liste de nos départements. Cliquez sur un département pour en savoir plus.
            </p>
            <div className="grid grid-cols-4 gap-4">
                {DepartementData.map((dept, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center p-4 border rounded-lg ${dept.selected ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} ${dept.selected ? 'border-blue-500' : 'border-gray-200'} hover:shadow-lg transition-shadow duration-300`}>
                       <img src={dept.image} alt={dept.alt} className="mb-2" />
                        <span className="text-lg font-semibold">{dept.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Departements ;