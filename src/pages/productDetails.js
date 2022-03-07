import React, { useState } from "react"
import { IoIosCart } from "react-icons/io"
import { FaStoreAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Footer from "../components/footer"
import Header from "../components/header"
import Tab from "../components/tab"
import RelatedProducts from "../components/relatedProducts"

export default function ProductDetails() {
  const products = [
    {
      _id: "1",
      title: "Apple Watch 2.0 Ipv4",
      price: 399,

      views: [
        require("../assets/apple-watch-img01.png"),
        require("../assets/apple-phone-img01.png"),
        require("../assets/apple-pods-img01.png"),
      ],
      variants: {
        src: [
          require("../assets/apple-watch-img01.png"),
          require("../assets/apple-watch-img02.png"),
          require("../assets/apple-watch-img03.png"),
        ],
        colors: ["grey", "red", "blue"],
      },

      sizes: ["XL", "XXL", "M"],
      stock: 20,
      brand: "Apple",
      category: "Electronics",
      subCategory: "Bands",
      seller: "Evax Electronic Store",
      description: {
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam adipisci rerum voluptate veniam ut perferendis laudantium vero perspiciatis blanditiis! Doloribus est fugiat veritatis quisquam dicta.",
        image: require("../assets/apple-watch-desc.jpg"),
      },
      reviews: [
        {
          name: "John Barnes",
          avatar: require("../assets/avatar-1.jpg"),
          content: "I'm happy with the product.",
          date: "13/02/2021",
          rating: 4,
        },
        {
          name: "David Stone",
          avatar: require("../assets/avatar-1.jpg"),
          content:
            "I've been using this product for a while now and it hasn't given me any issues.",
          date: "13/02/2021",
          rating: 3,
        },
        {
          name: "Mira Long",
          avatar: require("../assets/avatar-1.jpg"),
          content:
            "Quality product. I recommend this for any lover of this brand.",
          date: "13/02/2021",
          rating: 5,
        },
      ],
    },
  ]

  const [index, setIndex] = useState(0)

  const changeImg = index => {
    setIndex(index)
  }

  const prevView = () => {
    setIndex(index === 0 ? products[0].views.length - 1 : index - 1)
  }

  const nextView = () => {
    setIndex(index === products[0].views.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="font-poppins">
      <Header />
      <div className="container py-6 px-8 lg:px-16">
        {products.map(product => (
          <div key={product._id}>
            <div className="grid gap-6 md:grid-cols-2 my-5">
              <div>
                <div className="grid gap-2 grid-cols-8 pt-4">
                  <div className="col-span-1">
                    {product.views.map((img, index) => (
                      <img
                        src={img}
                        alt=""
                        key={index}
                        className="lg:w-3/4 w-full aspect-square block object-contain shadow rounded-md opacity-70 hover:opacity-100 focus:opacity-100 border border-gray-200 mb-2"
                        role="button"
                        onClick={() => changeImg(index)}
                      />
                    ))}
                  </div>
                  <div className="col-span-7">
                    <img
                      src={product.views[index]}
                      className="lg:w-1/2 w-3/4 object-contain aspect-square block mx-auto"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex space-x-2 mt-16 justify-end">
                  <button
                    className="border border-gray-200 rounded-full p-2 shadow"
                    onClick={prevView}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="border border-gray-200 rounded-full p-2 shadow"
                    onClick={nextView}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div>
                <nav className="flex mb-4" aria-label="breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="self-center">
                      <a
                        href="#!"
                        className="text-gray-700 hover:text-gray-900 font-medium"
                      >
                        {product.category}
                      </a>
                    </li>
                    <li>
                      <div className="inline-flex items-center pt-1">
                        <FaChevronRight className="mr-1 md:mr-3 text-gray-400" />
                        <a
                          href="#!"
                          className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                        >
                          {product.brand}
                        </a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="inline-flex items-center pt-1">
                        <FaChevronRight className="mr-1 md:mr-3 text-gray-400" />
                        <span className="text-gray-400 text-sm font-medium">
                          {product.subCategory}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                {product.stock ? (
                  <span className="bg-primary text-center text-white py-2 px-4">
                    IN STOCK
                  </span>
                ) : (
                  <span className="bg-gray-700 text-center text-white py-2 px-4">
                    OUT OF STOCK
                  </span>
                )}
                <h4 className="text-xl font-semibold mt-3 text-primary">
                  {product.title}
                </h4>
                <h2 className="text-2xl font-semibold mt-1 text-secondary">{`$${product.price}`}</h2>
                <div className="flex mt-2">
                  {product.variants.src.map((img, index) => (
                    <img
                      src={img}
                      alt=""
                      key={index}
                      className="w-16 h-auto block aspect-square object-contain shadow-sm rounded-md opacity-70 hover:opacity-100 focus:opacity-100 border border-x-gray-200 mr-2"
                    />
                  ))}
                </div>
                <div className="lg:flex lg:space-x-3 mt-2">
                  <div className="flex">
                    <span className="font-bold text-primary mr-2 py-1">
                      Color
                    </span>
                    {product.variants.colors.map((color, index) => (
                      <button
                        className="w-8 h-8 border border-gray-200 rounded-md mr-1"
                        style={{ background: color }}
                        key={index}
                      ></button>
                    ))}
                  </div>
                  <div className="flex mt-2 lg:mt-0">
                    <span className="font-bold text-primary mr-2 py-1">
                      Size
                    </span>
                    {product.sizes.map((size, index) => (
                      <span
                        className="font-bold text-gray-500 text-center py-1 px-4 bg-gray-200 rounded-2xl mr-2"
                        key={index}
                        role="button"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-primary rounded-md my-3 text-center text-white py-3 px-10 flex space-x-1">
                  <IoIosCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </button>
                <span className="text-gray-400 flex space-x-1">
                  <FaStoreAlt className="w-6 h-6" />
                  <span>{product.seller}</span>
                </span>
              </div>
            </div>
            <Tab product={products[0]} />
          </div>
        ))}
      </div>
      <RelatedProducts />
      <Footer bgColor="bg-primary" btnColor="bg-secondary" />
    </div>
  )
}
