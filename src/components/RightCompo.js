const RightCompo = () => {
  return (
    <div className="lg:basis-1/3 px-8 py-10">
      <div>
        <img
          src={require("../assets/apple-watch-desc.jpg")}
          alt=""
          className=" w-80 h-20 object-cover rounded-l-md rounded-r-sm rounded-t-lg rounded-b-md"
        />
      </div>
      <div className="text-sm font-bold text-gray-500 py-4">Recent Search</div>
      <div className="">
        <img
          src={require("../assets/Group 11475.png")}
          alt=""
          className=" w-52 h-60 rounded-md mb-6 shadow-md"
        />
        <img
          src={require("../assets/Group 11523.png")}
          alt=""
          className=" w-52 h-60 rounded-md shadow-md"
        />
      </div>
    </div>
  )
}

export default RightCompo
