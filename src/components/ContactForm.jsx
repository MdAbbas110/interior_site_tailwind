const ContactForm = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto pt-28 gap-8 grid grid-cols-2"
    >
      <div className="w-[70%] mx-auto flex flex-col gap-10">
        <h1 className=" text-left text-3xl font-semibold ">
          Get in Touch with Us!
        </h1>
        <h1 className=" tracking-widest text-left text-4xl font-bold ">
          We Offer Practical Solution to All Your Space Problems.
        </h1>
        <p>⭐⭐⭐⭐⭐</p>
        <p className=" text-left text-gray-700 text-xl font-medium ">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.tel. Ab accusamus dui nostrum nunc.
        </p>
      </div>
      <div>
        <form className=" flex flex-col gap-5" action="">
          <div className="flex flex-col gap-3">
            <label htmlFor="name">Enter Name *</label>
            <input
              placeholder="Your Name"
              className="border border-gray-200 outline-none p-4 bg-[#FAFAFA]"
              type="text"
              name=""
              id="name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Enter Email *</label>
            <input
              placeholder="example@email.com"
              className="border border-gray-200 outline-none p-4 bg-[#FAFAFA]"
              type="email"
              name=""
              id="email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="mesg">Your Message *</label>
            <textarea
              placeholder="Enquiry Details"
              className="border border-gray-200 outline-none p-4 bg-[#FAFAFA]"
              name=""
              id=""
              cols="10"
              rows="5"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
