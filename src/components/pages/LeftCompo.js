const LeftCompo = () => {
  return (
    <div className="lg:basis-2/3 px-8 py-10">
      <div className="bg-white border px-8 py-4 rounded-md">
        <div className="flex justify-between">
          <div className="font-extrabold sm:text-md lg:text-xl">Wishlist (3)</div>
          <div className="flex item-center">
            <img
              src="https://img.icons8.com/ios/50/000000/delete--v1.png"
              className="w-5 h-4"
              alt="delete all"
            />
            <div className="text-sm text-gray-600 px-1">Delete All</div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-md mt-10">
        <div className="flex  justify-between py-4 px-6">
          <div className="flex">
            <div className="flex justify-center items-center border w-32 h-32 ">
              <img
                className="w-20 h-20"
                src={require("../../assets/D1-image5.png")}
                alt="deleteimage"
              />
            </div>
            <div className="font-bold px-3">
              <div className="sm:text-md lg:text-lg text-gray-600">Sandra Smart Watch Waterproof IP65 Pedometer</div>
              <div className="text-yellow-400 pt-10">US $ 399</div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src="https://img.icons8.com/ios/50/000000/delete--v1.png"
                className="w-5 h-4"
                alt="deleteicon"
              />
            </div>
            <div className="lg:px-12 lg:py-1 mt-10 bg-primary rounded-md">
              <span className="text-white sm:text-sm lg:text-md">Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-md mt-6">
        <div className="flex  justify-between py-4 px-6">
          <div className="flex">
            <div className="flex justify-center items-center border w-32 h-32 ">
              <img
                className="w-20 h-20"
                src={require("../../assets/D6c-image4.png")}
                alt="producticon"
              />
            </div>
            <div className="font-bold px-3">
              <div className="sm:text-md lg:text-lg text-gray-600">Sandra Smart Watch Waterproof IP65 Pedometer</div>
              <div className="text-yellow-400 pt-10">US $ 399</div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src="https://img.icons8.com/ios/50/000000/delete--v1.png"
                className="w-5 h-4"
                alt="cont-icon"
              />
            </div>
            <div className="lg:px-12 lg:py-1 mt-10 bg-primary rounded-md">
              <span className="text-white sm:text-sm lg:text-md">Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-md mt-6">
        <div className="flex  justify-between py-4 px-6">
          <div className="flex">
            <div className="flex justify-center items-center border w-32 h-32 ">
              <img
                className="w-20 h-20"
                src={require("../../assets/D6-image5.jpg")}
                alt="product"
              />
            </div>
            <div className="font-bold px-3">
              <div className="sm:text-md lg:text-lg text-gray-600">Sandra Smart Watch Waterproof IP65 Pedometer</div>
              <div className="text-yellow-400 pt-10">US $ 399</div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src="https://img.icons8.com/ios/50/000000/delete--v1.png"
                className="w-5 h-4"
                alt="cont"
              />
            </div>
            <div className="lg:px-12 lg:py-1 mt-10 bg-primary rounded-md">
              <span className="text-white sm:text-sm lg:text-md">Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCompo;
