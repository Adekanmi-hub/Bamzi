import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import image15 from "../../assets/BAMZI.png";
import image16 from "../../assets/Group 11432.png";
const Footer = () => {
  return (
    <>
      <div className="py-8 px-28 relative bg-footerbg">
        <div className="bg-primary lg:mx-16 xl:mx-40 px-8 lg:py-5 sm:py-2 rounded-xl flex relative bottom-20 z-10">
          
            <div className="">
              <div className="text-white sm:text-xl lg:text-2xl font-normal">Contact Us!</div>
              <div className="text-white sm:text-sm lg:text-md xl:text-lg pt-4">
                There are many variations of passages of Lorem ipsum
              </div>
            </div>
            <form action="">
              <div className="relative flex items-center ml-56 mt-4 md:mt-0">
                <input
                  type="text"
                  name="email"
                  className="sm:py-2 lg:py-3 mt-2 sm:px-16 lg:px-14 rounded-3xl border-none w-full placeholder:text-gray-500 text-black"
                  placeholder="Email here"
                  autoComplete="off"
                  aria-label="Email here"
                />
                <button className="bg-secondary rounded-3xl mt-2 sm:py-1 sm:px-4 lg:py-1 lg:px-6 absolute right-1">
                  Send
                </button>
              </div>
            </form>
        
        </div>
        <img src={image15} alt="" className="w-28" />
        <div className="flex justify-between">
          <div className="">
            <div className="flex pt-12">
              <div className="border rounded-full px-1 py-1">
                <FaFacebook size="1.5rem" className=""></FaFacebook>
              </div>
              <div className="border rounded-full px-1 py-1 mx-4">
                {" "}
                <FaTwitter size="1.5rem" className=""></FaTwitter>
              </div>
              <div className="border rounded-full px-1 py-1">
                <FaLinkedinIn size="1.5rem" className=""></FaLinkedinIn>
              </div>
              <div className="border rounded-full px-1 py-1 mx-4">
                <FaPinterest size="1.5rem" className=""></FaPinterest>
              </div>
            </div>
            <div className="mt-8">
              <img src={image16} alt="" className="" />
            </div>
          </div>
          <div className="text-white">
            Links
            <div className="mt-8">
              <div className="text-gray-500 text-xl py-1">Home</div>
              <div className="text-gray-500 text-xl py-1">Pricing</div>
              <div className="text-gray-500 text-xl py-1">Download</div>
              <div className="text-gray-500 text-xl py-1">About</div>
              <div className="text-gray-500 text-xl py-1">Service</div>
            </div>
          </div>
          <div className="text-white">
            Support
            <div className="mt-8">
              <div className="text-gray-500 text-xl py-1">FAQ</div>
              <div className="text-gray-500 text-xl py-1">How It</div>
              <div className="text-gray-500 text-xl py-1">Features</div>
              <div className="text-gray-500 text-xl py-1">Contact</div>
              <div className="text-gray-500 text-xl py-1">Reporting</div>
            </div>
          </div>
          <div className="text-white">
            Contact Us
            <div className="mt-8">
              <div className="text-gray-500 text-xl py-1">+880 12345678</div>
              <div className="text-gray-500 text-xl py-1">
                youremail@gmail.com
              </div>
              <div className="text-gray-500 text-xl py-1">Rangpur City</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-6">
          <div className="text-blue-100 text-sm">
            Copyright and Designed By Olamide
          </div>
          <div className="text-blue-100 text-sm">
            Terms and use <span className="px-2">|</span>{" "}
            <span className="">Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
