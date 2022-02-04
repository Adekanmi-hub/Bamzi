import image3 from "../../assets/Mask.png";

const Section = () => {
  return (
    <div classNameName="flex flex-col lg:flex-row">
      <div className="lg:flex px-16">
        <div className="py-24 xl:px-12">
          <h3 className="font-bold text-lg md:text-5xl leading-normal  text-primary">
            One step to a Digital Store
          </h3>
          <p className="text-gray-400 text-sm mt-6">
            Every Product deserves a digital presence. Create your store from
            Bamzi and have a wide reach of market audience. Its simple and
            flexible to use.
          </p>

          <div className="pt-9 flex w-full">
            <button className=" text-white sm:text-white py-2 px-7 mx-4 rounded-lg border bg-primary">
              Get Started
            </button>
            <button className="text-white sm:text-white py-2 px-7 mx-4 rounded-lg border bg-secondary">
              Go Shopping
            </button>
          </div>
        </div>
        <div className="flex-image">
          <img
            src={image3}
            alt="features"
            class="w-full md:w-3/4 self-center lg:w-full"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Section;
