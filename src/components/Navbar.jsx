import { Link } from 'react-router-dom';
import logo from '../assets/gd-transparent.png';
import { FaPhoneSquare } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-16">
      <div className=" grid place-items-end">
        <div className="flex item-center bg-black rounded-xl opacity-80 px-3 py-1 gap-4 justify-center">
          <FaPhoneSquare size={20} color="white" />
          <p className=" text-white tracking-widest  font-medium">
            <a href="tel:+919599277565">+91-9599277565</a>
          </p>
        </div>
      </div>
      <div className="md:grid gap-7 md:gap-0 flex flex-col md:grid-cols-2 mt-8 ">
        <div>
          <a href="/">
            <img
              className="bg-white size-[115px] rounded-xl bg-opacity-90"
              src={logo}
              alt="/"
            />
          </a>
        </div>
        <div className="flex px-6 min-h-[70px] border uppercase border-[#ff7a3d] items-center justify-between text-white font-medium text-base bg-black opacity-[0.7]">
          <Link to={'/'} className="hover:text-[#ff7a3d]  ">
            Home
          </Link>
          <Link to={'/about'} className="hover:text-[#ff7a3d] ">
            About Us
          </Link>
          <Link to={'/team'} className="hover:text-[#ff7a3d] ">
            Team
          </Link>
          <Link to={'/project'} className="hover:text-[#ff7a3d] ">
            Project
          </Link>
          <Link to={'/contact'} className="hover:text-[#ff7a3d] ">
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
