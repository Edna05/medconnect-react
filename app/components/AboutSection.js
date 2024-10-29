import React from 'react';

function AboutSection() {
  // Liste des caractéristiques à afficher dans la section
  const features = [
    { icon: 'clock', text: 'Disponible 24/7' },
    { icon: 'access', text: 'Accès rapide aux soins' },
    { icon: 'certified', text: 'Professionnels certifiés' },
    { icon: 'teleconsult', text: 'Téléconsultations' },
    { icon: 'appointment', text: 'Prise de rendez-vous en ligne' },
    { icon: 'privacy', text: 'Confidentialité assurée' }
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      {/* Grille de présentation des caractéristiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {/* Icône dynamique en fonction du type */}
            <i className={`icon-${feature.icon} text-blue-500 text-4xl mb-4`}></i>
            <p className="text-lg text-gray-700 font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
