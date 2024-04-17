import Footer from '../components/Footer';
import Address from '../components/Address';
import Hero from '../components/Hero';
import Enquiry from '../components/Enquiry';
import ProjectsTab from '../components/portfolio';
const Project = () => {
  return (
    <div className="w-full">
      <Hero
        title="Projects"
        subtitle=""
        description=""
        class_name="main_image"
      />
      <div className="max-w-[1200px] mx-auto my-28">
        <ProjectsTab />
      </div>
      <Enquiry />
      <Address />
      <Footer />
    </div>
  );
};

export default Project;
