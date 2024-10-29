import Image from "next/image";

import Header from './components/header.js';
import AboutSection from './components/AboutSection.js';
import Hero from './components/Hero.js';
import Services from './components/services.js';
import Hopitaux from './components/hopitaux.js'
import Experience from './components/experiences.js';
import Achats from './components/achats.js';
import Departements from './components/departements.js';
import Footer from './components/Footer.js';

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      < AboutSection/>
      <Hopitaux />
      <Departements />
      <Achats/>
      <Services />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
