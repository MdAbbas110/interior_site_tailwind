import Card from './Card';
import { FaPhoneSquare } from 'react-icons/fa';
const Background = () => {
  return (
    <div className="full_bg  w-full mb-32 ">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 ">
        <div className="mx-auto">
          <Card heading1={'Excellent City'} heading2={'Location'} />
        </div>
        <div className="pt-20">
          <div className="w-[100%] flex flex-col gap-3  justify-center mx-auto ">
            <FaPhoneSquare color="white" size={30} />
            <h1 className="text-2xl font-bold text-white">
              For Further Inquiries Call
            </h1>
            <h1 className=" text-[#74F7EA] pb-5 pt-3 text-6xl tracking-widest font-extrabold">
              +91-9599277565
            </h1>
            <p className="text-lg font-normal text-white">
              Ornare explicabo, molestias numquam porta! Netus molestiae! Quidem
              dictum cillum. Error tempore etiam, consectetuer fusce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
