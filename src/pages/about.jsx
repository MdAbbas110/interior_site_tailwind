import Address from '../components/Address';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Spotlight from '../components/Spotlight';
const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle=""
        description=""
        class_name="main_image"
      />
      <div className="border-t border-b my-20  border-[#ff7a3d]">
        <div className="max-w-[1200px] mx-auto py-12">
          <p className="text-xl font-normal text-black leading-7 te tracking-wider">
            <span className="text-2xl underline text-[#ff7a3d]">
              Welcome to Grace Decor
            </span>
            , where interior design and construction expertise converge to
            create elegant, sophisticated spaces that fulfill your dreams. With
            over 5 years of experience in crafting luxurious interiors and
            constructing residential, corporate, and other properties, we pride
            ourselves on our ability to blend modern amenities seamlessly with
            timeless elegance. Our team of professionals is dedicated to
            providing sustainable and sophisticated solutions that bring your
            imagination to life, ensuring that every project receives meticulous
            attention to detail from concept to completion. Driven by a passion
            for innovation and environmental stewardship, we prioritize
            eco-friendly practices and materials in all our projects, minimizing
            our footprint while maximizing comfort and functionality. At Grace
            Decor, we believe in building more than just structures – we create
            experiences that inspire and delight. Let us transform your space
            into a sanctuary of style and luxury, where dreams become reality
            with <span className="text-[#ff7a3d]">Grace Decor.</span>
          </p>
        </div>
      </div>

      <Spotlight />
      <Address />
      <Footer />
    </div>
  );
};

export default About;
