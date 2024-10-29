const HopitauxData = [
    { name: "centre hospitalier universitaire d'Owendo", image: "/CHO.svg", alt: "Image of centre hospitalier d'Owendo" },
    { name: "centre hospitalier universitaire de Libreville", image: "/CHL.svg", alt: "Image of centre hospitalier de Libreville" },
    { name: "Hôpital d'instruction des armee d'Akanda", image: "CHA.svg", alt: "Image of centre hospitalier d'Akanda" },
    { name: "Hôpital d'instruction des armee Omar Bongo Ondimba", image: "hpk9.svg", alt: "" },
    { name: "Hôpital Jeanne Ebori", image: "/HJE.svg", alt: "Image of Hôpital Jeanne Ebori" },
    { name: "Centre hospitalier regional de l'Estuaire", image: "/Hmelen.svg", alt: "Image of Hôpital de Melen" }
];

function Hopitaux() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-green-700 text-2xl font-bold mb-4">Hôpitaux les mieux notés près de chez vous</h1>
            <div className="grid grid-cols-6 gap-4">
                {HopitauxData.map((hospital, index) => (
                    <div key={index} className="border rounded-lg p-4 text-center">
                        <img src={hospital.image} alt={hospital.alt} className="mb-2" />
                        <p className="mb-2">{hospital.name}</p>
                        <button className="border border-blue-500 text-blue-500 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded text-sm md:text-base lg:text-lg">
    CONTACTEZ
</button>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default Hopitaux ;