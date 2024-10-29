"use client"; // Assurez-vous que c'est un Client Component

import { useEffect, useRef } from 'react';

const Achats = () => {
  const carouselRef = useRef(null);
  
  // Créer un tableau des images et descriptions
  const items = [
    { src: "vitamine.svg", alt: "Vitamines", label: "Vitamines" },
    { src: "Nutritional Drink.svg", alt: "Boisson Nutritionnelle", label: "Boisson Nutritionnelle" },
    { src: "Skin Care.svg", alt: "Soins de la Peau", label: "Soins de la Peau" },
    { src: "Wellness.svg", alt: "Bien-être", label: "Bien-être" },
    { src: "bien-être.png", alt: "Bien-être Sexuel", label: "Bien-être Sexuel" },
    { src: "vitamine.svg", alt: "Vitamines", label: "Vitamines" },
    { src: "Nutritional Drink.svg", alt: "Boisson Nutritionnelle", label: "Boisson Nutritionnelle" },
    { src: "Skin Care.svg", alt: "Soins de la Peau", label: "Soins de la Peau" },
    { src: "Wellness.svg", alt: "Bien-être", label: "Bien-être" },
    { src: "bien-être.png", alt: "Bien-être Sexuel", label: "Bien-être Sexuel" },
  { src: "vitamine.svg", alt: "Vitamines", label: "Vitamines" },
  { src: "Nutritional Drink.svg", alt: "Boisson Nutritionnelle", label: "Boisson Nutritionnelle" },
  { src: "Skin Care.svg", alt: "Soins de la Peau", label: "Soins de la Peau" },
  { src: "Wellness.svg", alt: "Bien-être", label: "Bien-être" },
  { src: "bien-être.png", alt: "Bien-être Sexuel", label: "Bien-être Sexuel" },

  ];

  useEffect(() => {
    const carousel = carouselRef.current;

    // Définir la largeur totale d'un élément
    const itemWidth = 150; // Largeur approximative d'un élément (ajustez selon vos besoins)
    let index = 0;

    const scrollCarousel = () => {
      index++;
      if (index >= items.length) index = 0; // Réinitialiser l'index
      carousel.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth', // Défilement fluide
      });
    };

    const interval = setInterval(scrollCarousel, 2000); // Ajustez cette valeur pour changer la fréquence de défilement

    return () => clearInterval(interval); // Nettoyer l'intervalle à la désinstallation du composant
  }, []);

  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(/font2.png)' }}>
      <div className="shadow-lg mt-96 transform -translate-y-1/2 text-white p-2 z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600 flex justify-center items-center">
            Achetez des médicaments et du bien-être <i className="fas fa-shopping-cart ml-2"></i>
          </h1>
          <p className="text-gray-500 mt-2"></p>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex space-x-4 py-4 overflow-x-scroll" ref={carouselRef}>
            {items.map((item, index) => (
              <div key={index} className="flex-none">
                <img src={item.src} alt={item.alt} className="w-36 h-auto rounded-md" />
                <p className="text-center mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achats;
