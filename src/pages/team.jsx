import React from 'react';

import Address from '../components/Address';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Enquiry from '../components/Enquiry';
import samyak from '../assets/team_samyak.png';

const Team = () => {
  return (
    <div className="w-full">
      <Hero
        title="Exuberant Team"
        subtitle=""
        description="Designing with grace, building with purpose – where every eco-friendly choice is a step towards a sustainable future."
        class_name="main_image"
      />

      <div className="max-w-[1200px] mx-auto my-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div></div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <img
              src={samyak}
              alt="Samyak Jain"
              className="w-full h-100 rounded-xl object-cover mb-4"
            />
            <h2 className="text-2xl underline text-center text-[#ff7a3d] mb-2">
              Samyak Jain
            </h2>
            <p className="text-gray-600 text-center">Founder</p>
            <p className="mt-4 text-gray-600">
              Our visionary founder, brings over 5 years of expertise in
              interior design and construction to Grace Decor. His keen eye for
              detail and deep understanding of creating harmonious structures
              allow him to blend innovative design with exceptional
              functionality. Samyak's passion for transforming spaces into
              elegant, sustainable environments inspires every project, ensuring
              each client receives personalized, world-class service.
            </p>
          </div>
        </div>
      </div>
      <Enquiry />
      <Address />
      <Footer />
    </div>
  );
};

export default Team;
